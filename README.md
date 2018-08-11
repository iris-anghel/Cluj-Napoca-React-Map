# Cluj-Napoca Neighborhood Map

Project 8 - [Front-End Web Developer Nano Degree with Udacity & Google](https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001)

* This is a web application that shows cafes in downtown Cluj-Napoca, Romania.
* You can see the list by clicking the magnifying glass icon in the top left corner.
* Each location has a marker assigned to it.
* An infowindow is triggered by clicking the marker or a location in the sidebar.
* The infowindow content is provided by **Foursquare**.

## Instructions

To use this repository in development:
* Clone or download the repository
* Run `npm install`
* Start the development server with `npm start`
* The application will open in your browser at `localhost:3000`

To use it in production:
* Run `npm run build`
* Run `npm install -g serve`
* Start server with `serve -s build`  
* The application will open in your browser at `localhost:5000`

## Important

* The service worker runs only in production build

## Dependencies

The app is built with:

* [React](https://github.com/facebook/React)
* [Create React App](https://github.com/facebookincubator/create-react-app)
* [Node.js](https://github.com/nodejs/node)
* [npm](https://github.com/npm/cli)
* [google-maps-react](https://github.com/fullstackreact/google-maps-react)
* [Google Maps API](https://cloud.google.com/maps-platform/)
* [Foursquare API](https://foursquare.com/)
* [Escape RegExp special characters package](https://github.com/sindresorhus/escape-string-regexp)

This app uses the **flat-colors** theme from [Snazzy Maps](https://snazzymaps.com/style/19955/flat-colors) and the search icon is provided by [Flaticon](https://www.flaticon.com/)

![map](https://user-images.githubusercontent.com/18640359/43990912-1332b530-9d6b-11e8-9cab-8345414499c9.PNG)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).