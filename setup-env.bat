@echo off
REM ================================================================
REM GATE PYQs - Automatic Environment Setup Script
REM ================================================================
REM This script will automatically create your .env file with the
REM correct configuration for Google OAuth and Gemini AI
REM ================================================================

echo.
echo ================================================================
echo         GATE PYQs - Environment Setup Script
echo ================================================================
echo.
echo This script will create your .env file with the correct values.
echo.

REM Check if .env already exists
if exist .env (
    echo WARNING: .env file already exists!
    echo.
    set /p OVERWRITE="Do you want to overwrite it? (Y/N): "
    if /i not "%OVERWRITE%"=="Y" (
        echo.
        echo Setup cancelled. Your existing .env file was not modified.
        echo.
        pause
        exit /b
    )
    echo.
    echo Backing up existing .env to .env.backup...
    copy .env .env.backup >nul 2>&1
    echo Backup created: .env.backup
    echo.
)

REM Create the .env file with correct values
echo Creating .env file...
(
echo # Google OAuth Configuration
echo REACT_APP_GOOGLE_CLIENT_ID=119301795917-v8u8j1hjgnhi8satti8avecdrv9st3j1.apps.googleusercontent.com
echo.
echo # Gemini AI API Key
echo REACT_APP_GEMINI_API_KEY=AIzaSyAnUANAyuycJDg9rf0sml1xvQdPlZlcSgk
echo.
echo # API URL for GATE questions
echo REACT_APP_API_URL=https://gate.saumay.dev/api/v1/questions?
) > .env

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ================================================================
    echo                    SUCCESS! ✓
    echo ================================================================
    echo.
    echo .env file has been created successfully!
    echo.
    echo The following environment variables have been configured:
    echo   - REACT_APP_GOOGLE_CLIENT_ID
    echo   - REACT_APP_GEMINI_API_KEY
    echo   - REACT_APP_API_URL
    echo.
    echo ================================================================
    echo                  NEXT STEPS:
    echo ================================================================
    echo.
    echo 1. Close any running development server (Ctrl+C)
    echo 2. Start the development server: npm start
    echo 3. Wait for browser to open at http://localhost:3000
    echo 4. You should see the Google Sign-In button working!
    echo.
    echo ================================================================
    echo.
    echo TIP: If you still see errors, try:
    echo   - Clear browser cache (Ctrl+Shift+Delete)
    echo   - Hard refresh the page (Ctrl+Shift+R)
    echo   - Restart your computer if needed
    echo.
    echo Need help? Read ENV_SETUP.txt for detailed instructions.
    echo.
    echo ================================================================
) else (
    echo.
    echo ================================================================
    echo                    ERROR! ✗
    echo ================================================================
    echo.
    echo Failed to create .env file!
    echo.
    echo Please try:
    echo   1. Run this script as Administrator
    echo   2. Create .env manually (see ENV_SETUP.txt)
    echo   3. Check folder permissions
    echo.
    echo ================================================================
)

echo.
pause
