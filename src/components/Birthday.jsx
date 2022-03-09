import React from 'react'
import './birthday.css'

const Birthday = () => {
    return (
        <div className="birthdayContainer">
            <div class="birthdayCard">
                <div class="cardFront"><h3 class="happy">HAPPY BIRTHDAY!</h3>
                    <div class="balloons">
                        <div class="balloonOne"></div>
                        <div class="balloonTwo"></div>
                        <div class="balloonThree"></div>
                        <div class="balloonFour"></div>
                    </div>
                </div>
                <div class="cardInside">
                    <h3 class="back">HAPPY BIRTHDAY!</h3>
                    <p>Dear Friend,</p>
                    <p>Happy birthday!! I hope your day is filled with lots of love and laughter! May all of your birthday wishes come true.</p>
                    <p class="name">xxx</p>
                </div>
            </div>
        </div>
    )
}

export default Birthday