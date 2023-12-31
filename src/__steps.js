/**
 * 
 * -----------------------
 *   INITIAL INSTALLATION
 * -----------------------
 * 
 * 1. visit: console.firebase.google.com 
 * 2. create project (skip google analytics)
 * 3. Register app (create config)
 * 4. install firebase: npm install firebase
 * 5. add config file to your project
 * 6. DANGER do not publish or make firebase config to public by pushing those to github
 * 
 * ------------------
 *    INTEGRATION
 * ------------------
 * 
 * 7. Then router setup in the main.jsx file from react router tutorial site (Browser router) (Add 3 things)
 * 8. Create teo folder in src > Layout & Components > 
 * Layout > Main.jsx , Components > Header.jsx 
 * Add Header and Layout in Main.jsx such as > <div> <Header/> <layout/> </div>
 * 
 * 9. Go to docs > Build > Authentication > Web > Get started > and follow the steps (number 2 only & then click left side Google  and follow it (number 1, 5))
 * 10. export app from the firebase.config.js file: 
 * export default app;
 * 11. Login.jsx: import getAuth from firebase/auth;
 * 12. create const auth = getAuth(app);
 * 
 * -------------------
 *    PROVIDER SETUP
 * -------------------
 * 
 * 13. import googleAuthProvider and create a new provider
 * 14. use signInWithPopUp and pass auth and provider
 * 15. activate sign-in method (google, facebook, github etc.)
 * 16. [vite]: change 127.0.0.1 to localhost
 * 
 * ----------------------
 *   MORE AUTH PROVIDER
 * ----------------------
 * 1. activate the auth provider (create app, provide redirect url, client id, client secret)
 * 2. 
 * 
* */