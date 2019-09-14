# Blogifier Themes

This project contains source code for [Blogifier](https://github.com/blogifierdotnet/Blogifier) themes. Project uses [Angular CLI](https://github.com/angular/angular-cli) to generate and build themes, then deploy to Blogifier under `src/App/wwwroot/themes`. If you need to check or modify any distributed with Blogifier theme, follow steps below. 

## Requirements
- Node Package Manager (npm)
- Angular CLI

## Instructions for VS Code
1. Clone or download source code
2. Navigate in the file manager to any project folder, for example `box`, and open it in the VS Code
3. Open terminal window (teminal -> new terminal) and run `npm install` command. This will generate `node_modules` folder.
4. To run application (theme) in the browser, execute `ng serve -o` command.
5. To build theme for deployment, execute `ng build --prod`. This will build and copy theme to `../_dist` folder one level up.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
