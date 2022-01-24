import React from "react";
import styles from "./Login.module.css";

import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";

import firebase from "firebase/compat/app";

import { auth } from "../../firebase";

export default function Login() {
  return (
    <div id="login-page" className={styles["login-page"]}>
      <div id="login-card" className={styles["login-card"]}>
        <h2>Welcome to one touch</h2>

        <div
          className={styles["login-button","google"]}
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Sign In with Google
        </div>

        <br />
        <br />

        <div
          className={styles["login-button","facebook"]}
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          }
        >
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
}
