import React, { useState } from "react";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleFacebookLogin = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleTwitterLogin=()=>{
    signInWithPopup(auth, twitterProvider)
    .then((result) => {
      const loggedUser = result.user;
      setUser(loggedUser);
      console.log(loggedUser);
    })
    .catch((error) => {
      console.log(error.message);
    });
  }

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      {user ? (
        <button
          className="bg-blue-500 text-white p-3 rounded-md"
          onClick={handleLogOut}
        >
          LogOut
        </button>
      ) : (
        <>
          <button
            className="bg-blue-500 text-white p-3 rounded-md"
            onClick={handleGoogleLogin}
          >
            Google Login
          </button>
          <button
            className="bg-blue-500 text-white p-3 rounded-md"
            onClick={handleGithubLogin}
          >
            Github Login
          </button>
          <button
            className="bg-blue-500 text-white p-3 rounded-md"
            onClick={handleFacebookLogin}
          >
            Facebook Login
          </button>
          <button
            className="bg-blue-500 text-white p-3 rounded-md"
            onClick={handleTwitterLogin}
          >
            Twitter Login
          </button>
        </>
      )}

      <div>
        {user && (
          <>
            <h1>Name: {user?.displayName}</h1>
            <h1>Email: {user?.email}</h1>
            <img src={user?.photoURL} alt="" />
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
