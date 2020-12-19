# meurancho-portal

Portal Meu Rancho Pizzaria - A Restaurant's Marketplace Admin Panel powered by ReactJS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It relies on `meurancho-api` server in order to perform its crud operations. That is a project apart, powered by Nodejs + Express + MongoDB & Docker.

## API set up

The project defines a default API service configuration using axios. In order to connect to the API, the following environment variables can be changed accordindly:

On the project's root directory find the files:

`/.env` - production enviroment variables - please refer to .env.example

`/.env.development` - development enviroment variables

```bash
# Where to point API requests to
REACT_APP_BASE_API_URL=http://localhost
# If developing locally, on which port?
REACT_APP_BASE_API_PORT=3333
# Defines on which --port `react-scripts start` runs
PORT=3001
```

## Components & UI

The project uses [React Bootstrap](https://react-bootstrap.netlify.app/) components on most of its UI, with some major custom styles involved. A few other third party libraries and components are used througout the project. Please refer to the project's `package.json` to get a glimpse about these other libraries and packages.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: <https://facebook.github.io/create-react-app/docs/code-splitting>

### Analyzing the Bundle Size

This section has moved here: <https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size>

### Making a Progressive Web App

This section has moved here: <https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app>

### Advanced Configuration

This section has moved here: <https://facebook.github.io/create-react-app/docs/advanced-configuration>

### Deployment

This section has moved here: <https://facebook.github.io/create-react-app/docs/deployment>

### `yarn build` fails to minify

This section has moved here: <https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify>
