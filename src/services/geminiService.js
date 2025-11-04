import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

// Simple direct approach
export const generateExplanation = async (questionText, options, correctAnswer) => {
  try {
    // Validate API key
    if (!API_KEY || API_KEY === 'your_actual_api_key_here') {
      throw new Error(`
❌ API Key Issue:
1. Create a .env file in your project root
2. Add: REACT_APP_GEMINI_API_KEY=your_actual_key
3. Restart your development server
      `);
    }

    // Initialize Gemini
    const genAI = new GoogleGenerativeAI(API_KEY);
    
    // Try the most common working model
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-flash',
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      }
    });

    // Create the prompt
    const optionsText = options ? Object.entries(options)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n') : 'No options provided';

    const prompt = `
As a GATE exam tutor, explain this question:

QUESTION: ${questionText}

OPTIONS:
${optionsText}

CORRECT ANSWER: ${correctAnswer}

Provide a step-by-step explanation suitable for engineering students.
`;

    // Generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    return response.text();

  } catch (error) {
    console.error('Gemini API Error:', error);
    throw new Error(`Failed to generate explanation: ${error.message}`);
  }
};

export const generateHint = async (questionText) => {
  try {
    if (!API_KEY) {
      throw new Error('API key not configured');
    }

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const result = await model.generateContent(`Give a brief hint for this GATE question: ${questionText}`);
    const response = await result.response;
    return response.text();

  } catch (error) {
    throw new Error(`Failed to generate hint: ${error.message}`);
  }
};

export const explainIncorrectAnswer = async (questionText, selectedOption, correctAnswer) => {
  try {
    if (!API_KEY) {
      throw new Error('API key not configured');
    }

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `
For this GATE exam question:
${questionText}

The student selected: ${selectedOption}
The correct answer is: ${correctAnswer}

Explain in 2-3 sentences why the selected answer is incorrect and what concept they might be missing.
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();

  } catch (error) {
    throw new Error(`Failed to explain incorrect answer: ${error.message}`);
  }
};

// Mock versions for development (uncomment if API is not working)
/*
export const generateExplanation = async (questionText, options, correctAnswer) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`🔍 Explanation for: "${questionText}"
      
✅ Correct Answer: ${correctAnswer}

📚 Step-by-step explanation would appear here when Gemini API is properly configured.

💡 Make sure your REACT_APP_GEMINI_API_KEY is set in .env file`);
    }, 1000);
  });
};

export const generateHint = async (questionText) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`💡 Hint: Consider the key concepts related to this question. Review the fundamental principles involved.`);
    }, 800);
  });
};

export const explainIncorrectAnswer = async (questionText, selectedOption, correctAnswer) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`❌ The selected option "${selectedOption}" is incorrect because it doesn't align with the core concept. The correct approach leads to "${correctAnswer}".`);
    }, 800);
  });
};
*/

export default {
  generateExplanation,
  generateHint,
  explainIncorrectAnswer
};