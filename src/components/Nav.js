import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Nav.css'
import Profile from './profile'

function Nav() {
  const [show, setShow] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const outerDivRef = useRef()

  const navigate = useNavigate()

  const handleClick = () => {
    setModalOpen(true)
    // setMovieSelected(movie);
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // console.log("window.scrolly", window.scrollY);
      // 스크롤을 내릴때 Y값이 나온다.
      if (window.scrollY > 50) {
        setShow(true)
      } else {
        setShow(false)
      }
    })
    // Show값이 if문 기준 true면 배경이 검정 . flase 면 배경이 흰색이 되게 한다.
    return () => {
      window.removeEventListener('scroll', () => {})
      /*컨포넌트가 더이상 사용되지 않을때는 위쪽의 
            윈도우 스크롤 이벤트를 더이상 사용할 필요가 없기때문에 
            윈도우 스크롤 이벤트를 지워준다.*/
    }
  }, [])
  //useEffect(() => {},[]); 컨포넌트가 마운트 되었을때 , 딱 그때만 실행된다.
  // 헤더가 처음엔 흰색이였다가 스크롤 내릴수록 검정색으로 변하게 하는 함수.

  const onChange = e => {
    setSearchValue(e.target.value)
    navigate(`/search?q=${e.target.value}`)
  }

  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      {/* 스크롤을 내리면 내비(클래스네임 "nav"에서) 가 검정으로(클래스네임 "nav__black"로) 변할예정이기 때문에 `조건부` 로 클래스네임 작성 
        Skow 기준으로 true면 클래스네임 "nav" flase면 클래스네임 "nav__black"*/}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
        className="nav__logo"
        onClick={() => (window.location.href = '/netflix_app/')}
        // onClick={() => window.location.reload()}
        // Netflix logo를 onClick했을때 새로고침이 되게 한다.
      />
      <input
        type="search"
        value={searchValue}
        onChange={onChange}
        placeholder="영화를 검색해주세요."
        className="nav__input"
      />
      <img
        src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
        alt="User logged"
        className="nav__avatar"
        onClick={handleClick}
      />
      {modalOpen && <Profile setModalOpen={setModalOpen} />}
    </nav>
  )
}

export default Nav
