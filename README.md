## Run the project locally

In the project directory, you can run:

`npm install`<br />
Install dependencies.

`npm start`<br />

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Notes

The application mocks server responses in `src/utils/constants.js`.<br />
Because there is no connection to a real API, the results will always stay the same, as defined in constants.<br />
Redux DevTools is enabled in the application and interactions with the store can be checked in the browser inspector.<br />
Because there is no real API, no payload is sent on submit. There are comments in `src/components/QuestionList.js` that describe how the payload would be built.

## TODO/Improvements

Add option to configure the type of questions. At the moment the questions support multiple variants selected. Add the option to limit variant selection.<br />
Integrate with a real API.
