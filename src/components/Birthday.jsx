import React from 'react'
import './birthday.css'
import Slide from './Slide';

const Birthday = () => {
    const [slide, setSlide] = React.useState(false);

    const handleClick = () => {
        setSlide(true);
    }

    return (
        <>
            {!slide ? (
                <>
                    <h1 class="clickhere2">Click on Card After Reading!! </h1>
                    <div className="birthdayContainer" onClick={handleClick}>
                        <div className="birthdayCard">
                            <div className="cardFront"><h3 className="happy">Alles Gute Zum Geburtstag Meine Puppe!!
                            </h3>
                                <div className="balloons">
                                    <div className="balloonOne"></div>
                                    <div className="balloonTwo"></div>
                                    <div className="balloonThree"></div>
                                    <div className="balloonFour"></div>
                                </div>
                            </div>
                            <div className="cardInside">
                                <h3 className="back">Herzlichen Glückwunsch zum Geburtstag mein Schatz!!</h3>
                                <br />
                                <p>Meine Babypuppe,</p>
                                <p>Du weißt, wie viel du mir bedeutest, mein Schatz, ich vermisse dich jeden Tag. Ich hoffe, wir können so schnell wie möglich vereint sein
                                    <br />
                                    <br />
                                    dein
                                    Dipan</p>
                                <p className="name">Dipan</p>
                                <p className="name3">&#10084;</p>
                                <p className="name2">Marleen</p>
                            </div>
                        </div>
                    </div>
                </>
            ) : (<Slide />)}
        </>
    )
}

export default Birthday