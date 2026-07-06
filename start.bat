@echo off
title Career Guidance Agent - React Setup
color 0A
echo.
echo  ============================================
echo    Career Guidance Agent - React App Setup
echo  ============================================
echo.

:: Check Node.js
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo  [ERROR] Node.js is not installed.
    echo  Please download it from: https://nodejs.org
    echo.
    pause
    exit /b 1
)

echo  [OK] Node.js found:
node --version
echo.

:: Install / update dependencies
echo  [STEP 1] Installing / updating dependencies...
echo  (This ensures @supabase/supabase-js is present)
echo.
npm install
if %errorlevel% neq 0 (
    echo.
    echo  [ERROR] npm install failed. Check your internet connection.
    pause
    exit /b 1
)
echo.
echo  [OK] Dependencies ready.

echo.
echo  [STEP 2] Starting development server...
echo.
echo  The app will open at: http://localhost:5173
echo  Press Ctrl+C in this window to stop the server.
echo.

:: Open browser after a short delay
start /b cmd /c "timeout /t 3 >nul && start http://localhost:5173"

:: Start Vite dev server
npm run dev
