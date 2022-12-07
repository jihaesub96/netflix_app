import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import requests from '../api/requests';
import "../styles/Banner.css"
import styled from 'styled-components';

function Banner() {
    const [movie, setMovie] = useState([]);
    //영화를 가지고와야 하기 때문에 movie useState 만들어주기
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        fetchData();
    },[]);
    //컨포넌트가 데이터를 부착하고나서 실행되는 함수

    const fetchData = async() => {
        //현재 상영중인 영화 정보를 가져오기(20개의 영화 데이터가 20개밖에 엄슴)
       const request = await axios.get(requests.fetchNowPlaying);
       //axios.js 기본주소에 request.js장르주소를 대입하여 변수에 저장
       console.log(request);
       
       const movieId = request.data.results[

        Math.floor(Math.random() * request.data.results.length + 0 )
        
        ].id;
        // console.log(Math.floor(Math.random() * request.data.results.length + 0 ));
        // console.log(movieId);
        
       //request인덱스 []에 들어가는 데이터를 가져온다.
       /*랜덤의 [인덱스]가 0부터 시작해서 무작위 랜덤으로 하나 나온다.
        Math.random(): 랜덤의 숫자에 * request.data.results.length: 영화 데이터 인덱스 번호를 곱하고,
       Math.floor를 넣어 소수점이 나올것을 방지하여 빼준다*/

       //특정 영화의 더 상세한 정보를 가져오기(videos 비디오 정보도 포함)
       const {data:movieDetail} = await axios.get(`movie/${movieId}`,{
        params:{append_to_response: "videos"}
        });
        // console.log(movieDetail);
        setMovie(movieDetail);
    }
    //영화정보를 가지고 오는 함수
    // async() => {await} 외부에서 데이터를 가지고옴

        const turncate = (str, n) => {
            return str?.length > n ? str.substr(0, n - 1) + "..." : str;
            //index 0 부터 n-1 개면 글씨 내용을 "..."으로 생략한다
        }
    
  if(!isClicked){
    return (
    <header className='banner'
        style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        }}>

    <div className='banner__contents'>
        <h1 className='banner__title'>
            {movie.title || movie.name || movie.original_name}
        </h1>
        <div className='banner__buttons'>
            <button className='banner__button play'
                onClick={() => setIsClicked(true)}>Play</button>
            <button className='banner__button info'>More Information</button>
        </div>
        <p className='banner__description'>
            {turncate(movie.overview, 100)}
            {/* movie.overview: 배너의 영화 설명을 불러넣음
                100자가 넘는 설명은 줄인다. */}
        </p>
    </div>

    <div className='banner--fadeBottom'></div>
    </header>
  )}else{
    return(
        <Container>
            <HomeContainer>
                <Iframe src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&
                mute=1&playlist=${movie.videos.results[0].key}`} 
                width="640" height="360" frameBorder="0" allow="autoplay; fullscreen"
                title="YouTube video player" allowFullScreen
                ></Iframe>
                {/* movie.videos.results[0].key: 영화 키값 주소  */}
            </HomeContainer>
        </Container>
    )
  }
  /* Play 버튼을  isClicked (클릭) 하면 영상이 실행되게 하여라
  true 상단의 return 헤더배너 , false 하단의 return 헤더배너가 실행돼라*/
//   isClicked : 변수에서 부정으로 설정     !isClicked : 부정의 부정 = 긍정
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;    
`;
const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.65;
    border: none;
    &:after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        hright: 100%;
    }
`;
//&:after{ } 여기서 &는 자기 자신울 뜻한다
// styled를 사용하려면 import styled from 'styled-components'; 터미널에서 인스톨 후, import 과정을 해야한다.
export default Banner