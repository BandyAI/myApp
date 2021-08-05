// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from 'firebase';


export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: 'AIzaSyBlAjRI22R6K_nnYncNK3VxTCfMCdPRGWo',
    authDomain: 'apptest-440a2.firebaseapp.com',
    databaseURL: 'https://apptest-440a2-default-rtdb.firebaseio.com',
    projectId: 'apptest-440a2',
    storageBucket: 'apptest-440a2.appspot.com',
    messagingSenderId: '700522251633',
    appId: '1:700522251633:web:1808dcc3c4241b9dce62d0'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
