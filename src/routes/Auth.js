import React from 'react'
import { authService } from '../fbase'
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import AuthFrom from '../components/AuthFrom'
import '../styles/Auth.css'

function Auth() {
  const onSocialClick = e => {
    // console.log(e.target.name)
    const {
      target: { name },
    } = e
    let provider
    if (name === 'google') {
      provider = new GoogleAuthProvider()
    } else if (name === 'github') {
      provider = new GithubAuthProvider()
    }
    const data = signInWithPopup(authService, provider)
    // console.log(data);
  }
  // setNewAccount를 이전값에서 !이전= 부정값 으로 바꾼다.

  return (
    <div className="authContainer">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
        className="Auth__logo"
        onClick={() => (window.location.href = '/netflix_app/')}
        // onClick={() => window.location.reload()}
        // Netflix logo를 onClick했을때 새로고침이 되게 한다.
      />
      <AuthFrom />
    </div>
  )
}

export default Auth
