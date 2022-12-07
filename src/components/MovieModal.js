import React, { useRef } from 'react'
import '../styles/MovieModal.css'
import useOnClickOutside from '../hooks/useOnClickOutside';
import { AiOutlinePlus } from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";

function MovieModal({backdrop_path, title, overview, name, release_date, 
    first_air_Date, vote_average, setModalOpen }) {
    const ref = useRef();
    // 아이디값을 주는 함수 useRef

    useOnClickOutside(ref, () => { setModalOpen(false);});

  return (
    <div className="presentation">
        <div className='wrapper-modal'>
            <div className='modal' ref={ref}>
                <span className='modal-close' onClick={() => setModalOpen(false)}>X</span>
                <img 
                alt={`${title ? title : name}`}
                className='modal__poster-img'
                src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}/>
                <div className='modal__content'>
                    <p className='modal__details'>
                        <span className='modal__user_perc'>100% for you{"  "}</span>
                        {release_date ? release_date : first_air_Date}
                    </p>
                    <h2 className='modal__title'>{title ? title : name}</h2>
                    <p className='modal__vote'> 평점: {vote_average}</p>
                    <p className='modal__overview'>{overview}</p>
                    <div className='modal__clip'>
                        <div className='modal__my_clip'>
                        <p><span><AiOutlinePlus /></span><span>내가 찜한 콘텐츠</span></p>
                        </div>
                        <div className='modal__my_vote'>
                        <p><span><FiThumbsUp /></span> <span>평가</span> </p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default MovieModal