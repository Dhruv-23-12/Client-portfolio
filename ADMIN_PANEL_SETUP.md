# Admin Panel Setup Guide

## 🔐 Protected Admin Route

Your portfolio now has a protected admin panel accessible at:
```
https://your-vercel-url.com/admin-varshil-07
```

## 🚀 Quick Start

### 1. Set Admin Password

Create a `.env` file in the `client` directory:

```bash
cd client
cp .env.example .env
```

Edit `.env` and set your admin password:
```env
VITE_ADMIN_PASSWORD=your-secure-password-here
```

**⚠️ Important:** Change the default password before deploying to production!

### 2. Access Admin Panel

1. Navigate to: `https://your-vercel-url.com/admin-varshil-07`
2. You'll be redirected to the login page
3. Enter your admin password
4. Session lasts 24 hours

### 3. Manage Your Videos

Once logged in, you can:
- ✅ Edit project titles
- ✅ Change categories
- ✅ Update MEGA.nz links
- ✅ Add new projects
- ✅ Delete projects
- ✅ Save all changes

## 📋 Features

### Admin Panel Features
- **Password Protection** - Secure login required
- **Session Management** - 24-hour sessions with time display
- **Project Management** - Full CRUD operations
- **Inline Editing** - Click any field to edit
- **Local Storage** - Changes saved locally
- **Responsive Design** - Works on all devices

### Security Features
- ✅ Password-protected routes
- ✅ Session expiration (24 hours)
- ✅ Automatic logout on session expiry
- ✅ Protected route wrapper
- ✅ No admin links in public navigation

## 🔧 Configuration

### Default Password
The default password is: `admin-varshil-07-2024`

**Change this immediately in production!**

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_ADMIN_PASSWORD` | Admin login password | `admin-varshil-07-2024` |

### Vercel Deployment

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add: `VITE_ADMIN_PASSWORD` = `your-secure-password`
4. Redeploy your application

## 📝 Usage

### Editing Projects

1. Click on any field (Title, Category, or MEGA URL) to edit
2. Make your changes
3. Press Enter or click outside to save
4. Click "Save All" to persist all changes

### Adding Projects

1. Click "Add New Project" button
2. Edit the new project fields
3. Save your changes

### Deleting Projects

1. Click "Delete" button on any project
2. Confirm deletion
3. Project is removed immediately

## 🔄 Syncing with Work.jsx

Currently, the admin panel saves to `localStorage`. To sync with `Work.jsx`:

### Option 1: Manual Update
1. Export projects from admin panel (copy from localStorage)
2. Manually update `client/src/pages/Work.jsx`

### Option 2: Backend API (Recommended)
1. Create an API endpoint to save/load projects
2. Update `Admin.jsx` to use API calls
3. Update `Work.jsx` to load from API

### Option 3: File Export/Import
Add export/import functionality to download/upload JSON

## 🛡️ Security Best Practices

1. **Change Default Password** - Never use default password in production
2. **Use Strong Password** - At least 12 characters, mixed case, numbers, symbols
3. **Environment Variables** - Never commit `.env` file to Git
4. **HTTPS Only** - Always use HTTPS in production
5. **Session Timeout** - Current 24-hour sessions (adjustable in `auth.js`)

## 📍 Routes

| Route | Access | Description |
|-------|--------|-------------|
| `/admin-varshil-07` | Protected | Admin panel dashboard |
| `/admin-varshil-07/login` | Public | Admin login page |

## 🐛 Troubleshooting

### Can't Access Admin Panel
- Check that you're using the correct URL: `/admin-varshil-07`
- Make sure you're not logged out (session expired)
- Clear browser cache and try again

### Password Not Working
- Check `.env` file has `VITE_ADMIN_PASSWORD` set
- Restart dev server after changing `.env`
- In production, check Vercel environment variables

### Changes Not Saving
- Check browser console for errors
- Verify localStorage is enabled
- Try saving individual fields first

### Session Expired
- Logout and login again
- Session lasts 24 hours by default
- Adjust `SESSION_DURATION` in `client/src/utils/auth.js` if needed

## 📚 Files Created

- `client/src/utils/auth.js` - Authentication utilities
- `client/src/components/ProtectedRoute.jsx` - Route protection wrapper
- `client/src/pages/Admin.jsx` - Admin panel dashboard
- `client/src/pages/AdminLogin.jsx` - Login page
- `client/.env.example` - Environment variables template

## 🎯 Next Steps

1. ✅ Set your admin password in `.env`
2. ✅ Test login locally
3. ✅ Add your MEGA links via admin panel
4. ✅ Deploy to Vercel with environment variables
5. ✅ Access admin panel at: `your-vercel-url.com/admin-varshil-07`

## 💡 Tips

- Bookmark the admin URL for easy access
- Keep your password secure and don't share it
- Regularly backup your project data
- Consider adding API integration for production use

