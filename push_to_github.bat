@echo off
REM Push repository to GitHub (Windows)
echo This script will add, commit, and push the repository to GitHub (branch: main).
echo Make sure you have configured git and are authenticated (GitHub CLI or credential manager).
echo.
pause

git add .
git commit -m "Add deployment workflows, Dockerfile, README" || (
  echo No changes to commit or commit failed. Proceeding to push.
)
git branch -M main
git remote get-url origin >nul 2>&1
IF ERRORLEVEL 1 (
  echo Adding remote origin...
  git remote add origin https://github.com/2303A52442/deadline_remainder.git
) ELSE (
  echo Remote origin already set.
)
echo Pushing to origin main...
git push -u origin main

echo Done. Check GitHub Actions in your repository to verify deployments.
pause