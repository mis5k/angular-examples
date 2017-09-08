// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAEnI0ohSEoG3z2yR5NBuhjnt5Ioqw9MKA",
    authDomain: "reversi-9dce2.firebaseapp.com",
    databaseURL: "https://reversi-9dce2.firebaseio.com",
    projectId: "reversi-9dce2",
    storageBucket: "reversi-9dce2.appspot.com",
    messagingSenderId: "254138563340"
  }
};
