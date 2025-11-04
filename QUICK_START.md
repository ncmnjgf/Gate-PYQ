# 🚀 GATE PYQs - Quick Start Guide

**Get your app running in 5 minutes!**

---

## ⚡ Super Quick Setup

### Option 1: Automatic Setup (Recommended for Windows)

1. **Double-click** `setup-env.bat` in the `gate-pyqs` folder
2. Press `Y` when prompted
3. Wait for "SUCCESS!" message
4. Open terminal and run:
   ```bash
   npm start
   ```
5. **Done!** Browser will open automatically at http://localhost:3000

---

### Option 2: Manual Setup (All Platforms)

1. **Create .env file** in the `gate-pyqs` folder

2. **Copy and paste** these 3 lines into `.env`:
   ```
   REACT_APP_GOOGLE_CLIENT_ID=119301795917-v8u8j1hjgnhi8satti8avecdrv9st3j1.apps.googleusercontent.com
   REACT_APP_GEMINI_API_KEY=AIzaSyAnUANAyuycJDg9rf0sml1xvQdPlZlcSgk
   REACT_APP_API_URL=https://gate.saumay.dev/api/v1/questions?
   ```

3. **Save the file** (make sure it's named `.env` exactly, not `.env.txt`)

4. **Open terminal** in the `gate-pyqs` folder and run:
   ```bash
   npm start
   ```

5. **Done!** Browser will open at http://localhost:3000

---

## ✅ What You Should See

After starting the app, you should see:

✓ **Welcome page** with "Sign In to Get Started"  
✓ **Google Sign-In button** in the header (blue button)  
✓ **No red errors** in the browser console (press F12 to check)  
✓ **Beautiful gradient design** with smooth animations  

---

## 🎯 First Steps After Setup

### 1. Sign In
- Click the **"Sign in with Google"** button in the header
- Choose your Google account
- Grant permissions

### 2. Start Practicing
- After sign-in, you'll automatically go to the Questions page
- Select a **subject** from the dropdown (like Computer Science)
- Click on **options** to answer questions
- Get instant feedback!

### 3. Try AI Features
- **Get AI Hint** - Click before answering for a subtle clue
- **Show Solution** - View the official solution
- **AI Explain** - Get detailed Gemini AI explanation

### 4. Track Your Progress
- Click your **profile picture** in the header
- Select **"My Profile"**
- View your statistics, achievements, and progress

---

## 🐛 Common Issues & Quick Fixes

### Issue: "Client ID not found" error

**Fix:**
1. Make sure `.env` file exists in the `gate-pyqs` folder
2. Check that it has **no spaces** around the `=` sign
3. Restart the development server (Ctrl+C then `npm start`)

---

### Issue: Google Sign-In button shows 403 error

**Fix:**
1. Check your internet connection
2. Try a different browser
3. Clear browser cache (Ctrl+Shift+Delete)
4. Disable browser extensions temporarily

---

### Issue: "Gemini API key not found"

**Fix:**
1. Verify `REACT_APP_GEMINI_API_KEY` is in your `.env` file
2. No quotes around the value
3. Restart the server

---

### Issue: Questions not loading

**Fix:**
1. Make sure you're **signed in** (check if you see your profile picture)
2. Select a subject from the dropdown
3. Check browser console for errors (F12)

---

## 📂 Important Files

| File | Purpose |
|------|---------|
| `.env` | **YOUR API KEYS** (must create this!) |
| `setup-env.bat` | Automatic .env creator (Windows) |
| `ENV_SETUP.txt` | Detailed environment setup guide |
| `SETUP_GUIDE.md` | Complete setup instructions |
| `FIXES_APPLIED.md` | All fixes and features list |
| `README.md` | Full documentation |

---

## 🎓 Using the App

### Practice Questions
1. **Sign in** with Google
2. **Select subject** or search by topic
3. **Click options** to answer
4. **Get instant feedback** (green = correct, red = wrong)

### AI Features
- **Before answering**: Click "Get AI Hint" 💡
- **After answering**: Click "AI Explain" 🤖
- **Anytime**: Click "Show Solution" 📝

### Bookmarks
- Click 📑 icon to bookmark a question
- Access bookmarks from your profile

### Profile & Stats
- Click your picture → "My Profile"
- View questions attempted, accuracy, achievements
- Unlock badges as you progress!

---

## 🌟 Key Features

| Feature | Description |
|---------|-------------|
| 🔐 **Google Sign-In** | Secure authentication with your Google account |
| 🤖 **AI Explanations** | Powered by Google Gemini for detailed solutions |
| 📊 **Progress Tracking** | Monitor your accuracy and performance |
| 🔖 **Bookmarks** | Save important questions for later |
| 🏆 **Achievements** | Unlock badges as you practice |
| 📱 **Responsive** | Works on desktop, tablet, and mobile |
| 💯 **1000+ Questions** | Comprehensive question bank |
| 🆓 **100% Free** | All features, no payment required |

---

## 🎯 Your First Session

**Recommended workflow for beginners:**

1. ✅ Sign in with Google
2. ✅ Choose a familiar subject (like your strongest topic)
3. ✅ Attempt 5-10 questions
4. ✅ Use "AI Explain" to understand concepts
5. ✅ Bookmark difficult questions
6. ✅ Check your profile to see stats
7. ✅ Practice daily for best results!

---

## 💡 Pro Tips

1. **Use Hints Wisely**: Try to solve first, use hints if stuck
2. **Read AI Explanations**: Even if you got it right, learn the concept
3. **Track Your Progress**: Check your profile weekly to see improvement
4. **Bookmark Strategically**: Mark questions you want to revisit
5. **Practice Daily**: Consistency is key for GATE preparation

---

## 📞 Need More Help?

### Quick Resources:
- **Environment Issues**: Read `ENV_SETUP.txt`
- **Detailed Setup**: Read `SETUP_GUIDE.md`
- **All Features**: Read `FIXES_APPLIED.md`
- **Full Docs**: Read `README.md`

### Still Stuck?
1. Check browser console for errors (F12)
2. Verify `.env` file is created correctly
3. Try restarting your computer
4. Read the detailed guides mentioned above

---

## ✨ You're All Set!

Once you see the welcome page and can sign in, you're ready to start your GATE preparation journey!

**Happy Learning! 🎓**

---

## 📊 Expected Timeline

| Step | Time Required |
|------|---------------|
| Create .env file | 1 minute |
| Install dependencies | 2 minutes |
| Start server | 1 minute |
| Sign in | 30 seconds |
| **Total** | **~5 minutes** |

---

## 🎉 Success Indicators

You know everything is working when you see:

- ✅ No console errors (F12)
- ✅ Google Sign-In button appears
- ✅ Can sign in successfully
- ✅ Profile picture shows after sign-in
- ✅ Can select subjects and see questions
- ✅ AI features respond (Hint, Explain)
- ✅ Smooth animations throughout
- ✅ All pages navigate properly

---

**Version 2.0.0** | Last Updated: December 2024

*Made with ❤️ for GATE aspirants*