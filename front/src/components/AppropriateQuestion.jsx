import {React, useContext} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Storage } from '../App';
import { useParams } from "react-router-dom"




function AppropriateQuestion(props) {
    const navigate = useNavigate();
    const { link, videoSrc, handleAnswer2,handleAppropriate, handleAnswer
        ,handleAnswer3,handleAnswer4,handleAnswer5, allEmotion } = useContext(Storage)
        const params = useParams();
console.log(params);
    const isAppropriate = () => {
        axios.put(`http://localhost:8639/isappropriateVIdeo/${videoSrc[0]._id}`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }
    // const handleAnswer = () => {
    //     isAppropriate();
    //     console.log(videoSrc[0]._id);
    //     // navigate('/checker/quality');
    // }
    const randomA= Math.floor(Math.random() * allEmotion.length)
    const randomA2= Math.floor(Math.random() * allEmotion.length)
    const randomA3= Math.floor(Math.random() * allEmotion.length)
    return (
        <div>
            {/* need to add local storage to save answer and handle only on submit */}
            <div className='appropriate'>
            <h1>is it an appropriate video?</h1>
            <button>yes</button>
            <button onClick={handleAppropriate}>no</button>
            </div>

            {/* need to add local storage to the buttons and handle answer(number)
            based on it */}
            {/* <div className='quality'>
            <h1>rate the video qulity(regardless of content)</h1>
            <button onClick={handleAnswer}>1</button>
            <button onClick={handleAnswer2}>2</button>
            <button onClick={handleAnswer3}>3</button>
            <button onClick={handleAnswer4}>4</button>
            <button onClick={handleAnswer5}>5</button>
            </div> */}

            <div className='emotion'>
            <h1>how does the person feel?</h1>
            <button>{videoSrc[params.index]?.emotion}</button>
            <button onClick={handleAnswer}>{allEmotion[randomA]}</button>
            <button onClick={handleAnswer}>{allEmotion[randomA2]}</button>
            <button onClick={handleAnswer}>{allEmotion[randomA3]}</button>
            </div>
        </div>
    );
}

export default AppropriateQuestion;


