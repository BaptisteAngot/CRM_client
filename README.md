# CrmApi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2.
This project is the front-end app. To use it, you absolute need the API.

## Installation

Clone this projet, install dependancies with `npm install`, if your API server is remote you can change in environment.ts file in apiUrl.
Exemple :
```angular2html
export const environment = {
  production: false,
  apiUrl: 'http://127.0.0.1:8000/',
  nameSociete: 'Web Partner'
};
```

## Run server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
