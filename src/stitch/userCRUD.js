import { db } from './mongodb';
import { hasLoggedInUser } from './auth';

export function addUser(name, age, position) {
  if (!hasLoggedInUser()) {
    return alert('Login please!');
  }
  db.collection('users')
    .insertOne({
      name,
      age,
      position
    })
    .then(user => {
      console.log('User is successfully added!');
      console.log(user);
    })
    .catch(err => {
      console.log(err);
      alert('Oops! something went wrong');
    });
}

export async function fetchUsers() {
  let users;
  if (!hasLoggedInUser()) {
    return 'Login please!';
  }
  await db
    .collection('users')
    .find()
    .asArray()
    .then(res => {
      users = res;
    })
    .catch(err => {
      console.log(err);
    });
  return users;
}

export async function deleteUser(id) {
  if (!hasLoggedInUser()) {
    return 'Login please!';
  }
  db.collection('users')
    .deleteOne({ _id: id })
    .then(user => {})
    .catch(err => {
      console.log(err);
    });
}

export async function findUser(id) {
  if (!hasLoggedInUser()) {
    return 'Login please!';
  }
  db.collection('users')
    .findOne({ _id: id })
    .then(user => {
      return user;
    })
    .catch(err => {
      console.log(err);
    });
}

export async function updateUser(id, name, age, position) {
  db.collection('users')
    .findOneAndUpdate(
      { _id: id },
      {
        name,
        age,
        position
      }
    )
    .then(user => {
      console.log('User is successfully added!');
      console.log(user);
    })
    .catch(err => {
      console.log(err);
      alert('Oops! something went wrong');
    });
}
