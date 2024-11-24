# CodingExample

## Your task

1. Check if junior developer implemented a good current time display in app component. Is everything okay? What would you do differently?
2. Add a new page to the application. Add a route guard. Fake an api call and response (only when logged in is allowed to view the page). The page contains a form to add a credit card. Imagine the user was redirected to this page after he chosen Credit Card as payment type. The form should contain the following fields:
   - Cardholder name
   - Card number
   - CVV
   - Submit button
3. Based on the card number display the card type (Visa, MasterCard, Other) in the form.
4. Validate the form fields:
   - Cardholder name: Required
   - Card number: Required, 16 digits
   - CVV: Required, 3 digits
5. Submit the form to an fake api endpoint (POST https://dummyjson.com/http/200) and add the values from the form as payload. Display the response in the console and redirect to homepage.

Consider the following:

- The user can use desktop or a mobile device.
- The user can have a handicap.
- The user can have a slow internet connection.
- Think about a good folder structure (if the application grows, everything should be easy to find).

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
