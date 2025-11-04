# 🚀 GATE PYQ Setup Guide

This guide will walk you through setting up the GATE PYQ application with Google Authentication and Gemini AI integration.

## 📋 Prerequisites

Before you begin, make sure you have:
- Node.js installed (version 14 or higher)
- A Google account
- A text editor (VS Code recommended)
- Terminal/Command Prompt access

## 🔧 Step-by-Step Setup

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
cd gate-pyqs
npm install
```

This will install all required packages:
- React and React DOM
- Google OAuth library (@react-oauth/google)
- Gemini AI SDK (@google/generative-ai)
- JWT decoder
- Vercel Analytics

### Step 2: Create Environment File

1. In the `gate-pyqs` folder, create a new file named `.env`
2. Copy the following template into the file:

```env
# Google OAuth Configuration
REACT_APP_GOOGLE_CLIENT_ID=119301795917-v8u8j1hjgnhi8satti8avecdrv9st3j1.apps.googleusercontent.com

# Gemini AI API (for question explanations)
REACT_APP_GEMINI_API_KEY=AIzaSyAnUANAyuycJDg9rf0sml1xvQdPlZlcSgk

# API URL for GATE questions
REACT_APP_API_URL=https://gate.saumay.dev/api/v1/questions?
```

**Note:** The credentials provided above are already configured for you!

### Step 3: Verify Google OAuth Setup

Your Google OAuth Client ID is already set up with the following authorized origins:
- `http://localhost:3000` (for development)
- Your production domain (if deployed)

If you need to add more origins:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to: APIs & Services > Credentials
3. Click on your OAuth 2.0 Client ID
4. Add URLs under "Authorized JavaScript origins"
5. Add URLs under "Authorized redirect URIs"

### Step 4: Start the Development Server

Run the following command:

```bash
npm start
```

The application will automatically open in your browser at `http://localhost:3000`

### Step 5: Test Authentication

1. Look for the "Sign in with Google" button in the header
2. Click it to test the authentication flow
3. Select your Google account
4. Grant the necessary permissions
5. You should be redirected back to the app with your profile visible

### Step 6: Test AI Features

1. Select a subject from the dropdown menu
2. Choose any question
3. Try these features:
   - **Get AI Hint**: Click before answering to get a hint
   - **Show Solution**: View the official solution
   - **AI Explain**: Get a detailed Gemini AI explanation

## 🎯 Feature Checklist

After setup, verify these features work:

- [ ] Google Sign In
- [ ] User profile display in header
- [ ] Profile dropdown menu
- [ ] Sign Out functionality
- [ ] Question loading by subject
- [ ] Question search by topic
- [ ] Answer selection
- [ ] AI Hint generation
- [ ] AI Explanation generation
- [ ] Solution display
- [ ] Bookmark questions
- [ ] View user profile page
- [ ] Track progress statistics
- [ ] Achievement badges

## 🐛 Common Issues and Solutions

### Issue: "Invalid OAuth Client ID"

**Solution:**
- Double-check the `REACT_APP_GOOGLE_CLIENT_ID` in your `.env` file
- Ensure there are no extra spaces or quotes
- Restart the development server after changing `.env`

### Issue: "Gemini API Error"

**Solution:**
- Verify `REACT_APP_GEMINI_API_KEY` is correct
- Check if you've exceeded the free tier quota
- Make sure you have internet connectivity

### Issue: "Questions not loading"

**Solution:**
- Check the `REACT_APP_API_URL` in `.env`
- Open browser developer tools (F12) and check Console for errors
- Verify the API endpoint is accessible

### Issue: "Sign in button not working"

**Solution:**
- Clear browser cache and cookies
- Try in incognito/private mode
- Check browser console for errors
- Ensure JavaScript is enabled

### Issue: "Profile not showing after login"

**Solution:**
- Check browser's localStorage (F12 > Application > Local Storage)
- Clear localStorage and try signing in again
- Verify the JWT token is being decoded correctly

## 🔄 Restarting After Changes

Whenever you modify the `.env` file:

1. Stop the development server (Ctrl+C or Cmd+C)
2. Start it again with `npm start`
3. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

## 📱 Mobile Testing

To test on mobile devices on your local network:

1. Find your computer's local IP address:
   - Windows: `ipconfig`
   - Mac/Linux: `ifconfig` or `ip addr`

2. Add your local IP to Google OAuth authorized origins:
   - Example: `http://192.168.1.100:3000`

3. Access from mobile browser:
   - Navigate to `http://YOUR_IP:3000`

## 🚀 Deploying to Production

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   npm run build
   vercel
   ```

3. Add environment variables in Vercel dashboard

### Option 2: Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `build` folder to [Netlify](https://netlify.com)

3. Add environment variables in Netlify settings

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

**Important for Production:**
- Update authorized origins in Google Cloud Console
- Set all environment variables in your hosting platform
- Use HTTPS for production (required by Google OAuth)

## 📊 Monitoring and Analytics

The app includes Vercel Analytics for tracking:
- Page views
- User interactions
- Performance metrics

No additional setup required!

## 🔐 Security Best Practices

1. **Never commit `.env` file** to version control
2. **Use environment variables** for all sensitive data
3. **Regularly rotate API keys** for production
4. **Enable HTTPS** in production
5. **Review OAuth scopes** - only request what you need

## 💾 Data Storage

The app uses browser localStorage to store:
- User authentication data
- Progress tracking
- Bookmarked questions
- Achievement unlocks

This data is stored locally on the user's device and is not sent to any server.

## 🎨 Customization Options

### Changing Theme Colors

Edit these files to customize colors:
- `src/css/App.css` - Global theme
- `src/css/Header.css` - Header colors
- `src/css/Question.css` - Question card colors

### Modifying Subjects List

Edit `src/utils/subjects.js` to add or remove subjects.

### Adjusting AI Prompts

Edit `src/services/geminiService.js` to customize:
- Explanation style
- Hint generation logic
- Error message feedback

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Google OAuth Guide](https://developers.google.com/identity/protocols/oauth2)
- [Gemini AI Documentation](https://ai.google.dev/docs)
- [Create React App Docs](https://create-react-app.dev)

## 🆘 Getting Help

If you're stuck:

1. Check this guide thoroughly
2. Review the main README.md
3. Check browser console for errors (F12)
4. Search for similar issues online
5. Open an issue on GitHub with:
   - Error message
   - Steps to reproduce
   - Browser and OS info
   - Screenshots if applicable

## ✅ Setup Complete!

Once everything is working:

1. ✅ Authentication is functional
2. ✅ Questions are loading
3. ✅ AI features are working
4. ✅ Profile page displays correctly
5. ✅ All features tested

**You're ready to start using GATE PYQ! Good luck with your preparation! 🎓**

---

**Last Updated:** December 2024
**Version:** 1.0.0