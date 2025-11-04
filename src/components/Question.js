import React, { useState } from "react";
import {
  generateExplanation,
  explainIncorrectAnswer,
} from "../services/geminiService";
import "../css/Question.css";

const Question = ({ question, index, handleOptionClick }) => {
  const [showSolution, setShowSolution] = useState(false);
  const [showAIExplanation, setShowAIExplanation] = useState(false);
  const [aiExplanation, setAIExplanation] = useState("");
  const [loadingAI, setLoadingAI] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const toggleSolution = () => {
    setShowSolution(!showSolution);
  };

  const handleGetAIExplanation = async () => {
    if (aiExplanation) {
      setShowAIExplanation(!showAIExplanation);
      return;
    }

    setLoadingAI(true);
    try {
      const cleanQuestion = question.question_text.replace(/<[^>]*>/g, "");

      if (
        question.selectedOption &&
        question.selectedOption !== question.answer
      ) {
        const cleanSelectedOption =
          question.question_options[question.selectedOption]?.replace(
            /<[^>]*>/g,
            ""
          ) || question.selectedOption;

        const cleanCorrectAnswer =
          question.question_options[question.answer]?.replace(/<[^>]*>/g, "") ||
          question.answer;

        const explanation = await explainIncorrectAnswer(
          cleanQuestion,
          cleanSelectedOption,
          cleanCorrectAnswer
        );
        setAIExplanation(explanation);
      } else {
        const cleanOptions = {};
        Object.entries(question.question_options || {}).forEach(
          ([key, value]) => {
            cleanOptions[key] = value.replace(/<[^>]*>/g, "");
          }
        );

        const explanation = await generateExplanation(
          cleanQuestion,
          cleanOptions,
          question.answer
        );
        setAIExplanation(explanation);
      }

      setShowAIExplanation(true);
    } catch (error) {
      alert(error.message || "Failed to generate explanation");
    } finally {
      setLoadingAI(false);
    }
  };

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
    const bookmarks = JSON.parse(
      localStorage.getItem("bookmarkedQuestions") || "[]"
    );
    if (!bookmarked) {
      bookmarks.push(question.id);
    } else {
      const index = bookmarks.indexOf(question.id);
      if (index > -1) bookmarks.splice(index, 1);
    }
    localStorage.setItem("bookmarkedQuestions", JSON.stringify(bookmarks));
  };

  React.useEffect(() => {
    const bookmarks = JSON.parse(
      localStorage.getItem("bookmarkedQuestions") || "[]"
    );
    setBookmarked(bookmarks.includes(question.id));
  }, [question.id]);

  return (
    <div className="question-container" key={question.id}>
      <div className="question-header">
        <h4 className="question-number">
          Question {index + 1}
          {question.question_title && (
            <span className="question-badge">{question.question_title}</span>
          )}
        </h4>
      </div>

      <div
        className="question-text"
        dangerouslySetInnerHTML={{ __html: question.question_text }}
      ></div>

      {question.question_type === "MCQ" && (
        <div className="options-container">
          {Object.entries(question.question_options).map(
            ([optionKey, optionValue]) => {
              const isSelected = question.selectedOption === optionKey;
              const isCorrect = question.answer === optionKey;
              const showCorrect = question.selectedOption && isCorrect;
              const showIncorrect = isSelected && !isCorrect;

              return (
                <div
                  key={optionKey}
                  className={`option ${isSelected ? "selected" : ""} ${
                    showCorrect ? "correct-answer" : ""
                  } ${showIncorrect ? "incorrect" : ""}`}
                  onClick={() =>
                    !question.selectedOption &&
                    handleOptionClick(index, optionKey)
                  }
                >
                  <div className="option-label">{optionKey}</div>
                  <div
                    className="option-content"
                    dangerouslySetInnerHTML={{ __html: optionValue }}
                  ></div>
                  {showCorrect && <span className="check-icon">✓</span>}
                  {showIncorrect && <span className="cross-icon">✗</span>}
                </div>
              );
            }
          )}
        </div>
      )}

      {question.selectedOption && (
        <div
          className={`answer-message ${
            question.selectedOption === question.answer ? "correct" : "incorrect"
          }`}
        >
          {question.selectedOption === question.answer ? (
            <>
              <span className="message-icon">🎉</span>
              <span>Excellent! Your answer is correct!</span>
            </>
          ) : (
            <>
              <span className="message-icon">💡</span>
              <span>The correct answer is: {question.answer}</span>
            </>
          )}
        </div>
      )}

      <div className="action-buttons">
        <button className="action-btn solution-btn" onClick={toggleSolution}>
          <span className="btn-icon">📝</span>
          {showSolution ? "Hide Solution" : "Show Solution"}
        </button>
      </div>

      {showSolution && (
        <div className="solution-container">
          <div className="section-header">
            <span className="section-icon">📝</span>
            <h3 className="section-heading">Solution</h3>
          </div>
          <div
            className="solution"
            dangerouslySetInnerHTML={{ __html: question.solution }}
          ></div>
        </div>
      )}

      {showAIExplanation && aiExplanation && (
        <div className="ai-explanation-container">
          <div className="section-header">
            <span className="section-icon">🤖</span>
            <h3 className="section-heading">AI-Powered Explanation</h3>
            <span className="ai-badge">Gemini AI</span>
          </div>
          <div className="ai-explanation">
            {aiExplanation
              .split("\n")
              .map(
                (paragraph, idx) =>
                  paragraph.trim() && <p key={idx}>{paragraph}</p>
              )}
          </div>
        </div>
      )}

      <hr className="question-separator" />
    </div>
  );
};

export default Question;
