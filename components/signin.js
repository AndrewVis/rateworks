import React from 'react'
import styles from '../styles/styles.module.css'

export default class SignIn extends React.Component {
render () {
  return (
  <div className={styles.modal_bg}>
    <div className={styles.modal}>
      <h2>Sign in!</h2>
      <label for="name">Username/Email</label>
      <input type="text"></input>
      <label for="password">Password</label>
      <input type="text"></input>
      <button>Sign in</button>
    </div>
  </div>


    );
  }
}