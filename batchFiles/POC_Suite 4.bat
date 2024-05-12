@echo off
set "batchPath=%~dp0"
echo The location of the currently running batch file is: %batchPath%
echo running suite
cd /d "%batchPath%"
cd..
npx cypress open
