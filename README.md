# Incidents Application

This project consists in a CRUD application about report incidents.

- React for the front-end
- Node.js for the back-end
- MySQL for the database

## Requirements

- Command Console Program (Git Bash or CMD)
- Node installed
- Npm(server) and Yarn(react-app)
- Database Management System (Xampp)
- Code Editor (Visual Studio Code or Sublime Text)

## Technologies Used

- [React] - A JavaScript library for building user interfaces
- [Express.js cli] - Command line tool that generates an express project structure preconfigured with most commonly used packages
- [Tailwind] - A utility-first CSS framework
- [Redux] - A Predictable State Container for JS Apps
- [React Router Dom] - Allows your application to navigate between different components
- [Redux Saga] - An intuitive Redux side effect manager
- [Luxon] - A powerful, modern, and friendly wrapper for JavaScript dates and times.
- [Node] - A JavaScript runtime built on Chrome's V8 JavaScript engine
- [NPM] - Node package manager

## How to Run the Application

- Download the file from github:

```sh
git clone https://github.com/VictorRamirez18/incidents-application.git
```

- Create a dabatabase named incidentss, using a Database Management System (Xampp)

- Import the file incidents inside of the database incidents
  (If you don´t know who to do it, here is a [Youtube Video] that explains it)

- Open the console in server folder

```sh
cd server/
```

- In the console run npm install to install all the dependencies of server app

```sh
npm install
```

- In the console run npm start

```sh
npm start
```

- Open another window console in the react-app folder

```sh
cd incidents-application/
```

- Run npm install to install all the dependencies from react-app

```sh
npm install
```

- Run npm start to run the react application

```sh
npm start
```

## HOW TO USE THE APPLICATION

#### Report incidents

- In the _Home Page_, fill the formulary of New Incident
- Click the button Report incident

#### See all incidents

-Go to _See all incidents_ options in the navbar

#### Update the actions of an incident

- Go to _See all incidents_ option in the navbar
- Click the button _Edit_ in the incident that you want to update of the table (It will open a modal with a formulary)
- Modify the actions input and click the button _Accept_

#### Update the status of an incident

- Go to _See all incidents_ option in the navbar
- Click the button _Edit_ in the incident that you want to update of the table (It will open a modal with a formulary)
- Click the checkbox _Edit Status_
- Select the status that you want in the select element
- Fill the reason input
- Click the button _Accept_

#### Delete an Incident

- Go to _See all incidents_ option in the navbar
- Click the button delete in the incident that you want to delete of the table
- Click _Yes_ or _No_ button of the window confirm according to your intention

#### Filter the incidents

- Got to _See all incidents_ option in the navbar
- Select the filter that you want (writing the description, order by date or filter by status)

[react]: https://reactjs.org
[express.js cli]: https://github.com/tolustar/express-api-cli
[tailwind]: https://tailwindcss.com
[redux]: https://es.redux.js.org
[react router dom]: https://reactrouter.com/web/guides/quick-start
[redux saga]: https://redux-saga.js.org
[luxon]: https://moment.github.io/luxon/
[node.js]: http://nodejs.org
[youtube video]: https://www.youtube.com/watch?v=J_ow7VIQhxw
[node]: https://nodejs.org/en/
[npm]: https://www.npmjs.com
[yarn]: https://yarnpkg.com
