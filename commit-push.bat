@echo off
cd /d D:\PROVE\richieste_assistenza
git status
echo.
set /p MSG=Messaggio commit: 
if "%MSG%"=="" (
  echo Messaggio obbligatorio.
  exit /b 1
)
git add .
git status
set /p OK=Procedere con commit e push? (s/N): 
if /i not "%OK%"=="s" exit /b 0
git commit -m "%MSG%"
git push -u origin main