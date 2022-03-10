import React from 'react'
import { useTimer } from 'react-timer-hook';
import Box from './Box';
import './countdown.css'

const MyTimer = ({ expiryTimestamp }) => {
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    const hourTime = hours < 10 ? `0${hours}` : `${hours}`;
    const dayTime = days < 10 ? `0${days}` : `${days}`;
    const secondTime = seconds < 10 ? `0${seconds}` : `${seconds}`;
    const minuteTime = minutes < 10 ? `0${minutes}` : `${minutes}`;

    return (
        isRunning ?
            (<div className="container">
                <h1 id="headline" > Time Till My Baby's Birthday </h1>
                <div id="countdown" >
                    <ul>
                        <li><span id="days">{dayTime}</span>days</li>
                        <li><span id="hours">{hourTime}</span>Hours</li>
                        <li><span id="minutes">{minuteTime}</span>Minutes</li>
                        <li><span id="seconds">{secondTime}</span>Seconds</li>
                    </ul>
                </div>
            </div>) :
            (<Box />)
    );
}
const Countdown = () => {
    const time = new Date();

    return (
        <div>
            <MyTimer expiryTimestamp={time} />
        </div>
    );
}

export default Countdown