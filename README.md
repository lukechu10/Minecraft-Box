# Minecraft Box

[![Build Status](https://dev.azure.com/Bloody-Turtles/Minecraft-Box/_apis/build/status/Minecraft%20Box%20(Windows%2010%20build%201803)%20Build?branchName=master)](https://dev.azure.com/Bloody-Turtles/Minecraft-Box/_build/latest?definitionId=1&branchName=master)

## How to build

This app uses PUGJS for templates. In the command prompt, run:
```cmd
npm install
npm install -g pug-cli
npm run pug
npm start
```

If you wish to package it too, run:
```cmd
mpm pack
```
**NOTE:** Run `npm dist` if you wish to package the app into a installer
