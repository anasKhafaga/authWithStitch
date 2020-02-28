import {
  UserPasswordAuthProviderClient,
  UserPasswordCredential
} from 'mongodb-stitch-browser-sdk';
import { app } from './app.js';
import { Redirect } from 'react-router-dom'
export function signupUser(email, password) {
  const emailClient = app.auth.getProviderClient(
    UserPasswordAuthProviderClient.factory
  );
  return emailClient
    .registerWithEmail(email, password)
    .then(res => {
      alert('Check your email account to confirm your registration!!');
    })
    .catch(err => {
      if (err) {
        alert('Oops! something went wrong.');
      }
    });
}

export function emailConfirmation() {
  const emailPasswordClient = app.auth.getProviderClient(
    UserPasswordAuthProviderClient.factory,
    'userpass'
  );
  const params = new URLSearchParams(window.location.search);
  const token = params.get('token');
  const tokenId = params.get('tokenId');
  if (!token || !tokenId) {
    return;
  }
  return emailPasswordClient
    .confirmUser(token, tokenId)
    .then(() =>
      alert('You have confirmed your account successfully, login please')
    )
    .catch(err => {
      if (err) {
        alert('Oops! something went wrong.');
      }
    });
}

export function loginUser(email, password) {
  const login = new UserPasswordCredential(email, password);
  return app.auth
    .loginWithCredential(login)
    .then(res => {
      return true;
    })
    .catch(err => {
      if (err) {
        alert('Oops! something went wrong.');
        return false;
      }
    });
}

export function hasLoggedInUser() {
  return app.auth.isLoggedIn;
}

export function getCurrentUser() {
  return app.auth.isLoggedIn ? app.auth.user : null;
}

export async function logoutCurrentUser() {
  const user = getCurrentUser();
  if (user) {
    return app.auth.logoutUserWithId(user.id);
  }
}
