@echo off
title Toolskin Webserver (Node)
echo Starting web server in: %cd%
echo.

:: Find an available port starting from 8000
set PORT=8000
:findport
netstat "-ano" | findstr ":%PORT% " >nul 2>&1
if not errorlevel 1 (
    set /a PORT+=1
    goto findport
)

echo Using port: %PORT%
echo Open: http://localhost:%PORT%/
echo.
echo Press Ctrl+C to stop the server
echo.

:: Auto-open the browser in the background (wait 2 seconds for the server to spin up)
timeout /t 2 /nobreak >nul
start "" "http://localhost:%PORT%/"

:: Start Node server with the chosen port
set PORT=%PORT%
node tools/server.js
pause