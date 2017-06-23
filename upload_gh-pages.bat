@echo off

cd /d "%~dp0"

for /f %%i in ('git config --get remote.origin.url') do set REMOTE_URL=%%i

if exist gh-pages/.git goto DIR_EXIST
mkdir gh-pages 2>nul
pushd gh-pages
git init
git checkout -b gh-pages
git remote add origin %REMOTE_URL%
echo # autogenerated readme > README.md
popd

:DIR_EXIST
pushd gh-pages
git add -A
git commit -m 'gh-pages'
git push --set-upstream origin gh-pages
popd

pause