import React from 'react'
import '../styles/profile.css'

function profile({ setModalOpen }) {
  return (
    <div className="profile_presentation">
      <span className="profile-close" onClick={() => setModalOpen(false)}>
        X
      </span>
      <div className="profile-modal">
        <div className="profile_img"></div>
        <p className="profile_name">USER NAME</p>
      </div>
      <div className="profile_button">
        <button className="profile_Edit_name">이름 수정</button>
        <button className="profile_Edit_photo">사진 수정</button>
      </div>
    </div>
  )
}

export default profile
