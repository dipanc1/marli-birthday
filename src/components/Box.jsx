import React from 'react'
import Arrow from './Arrow';
import Birthday from './Birthday';
import './box.css'

const Box = () => {
    const [card, setCard] = React.useState(false);
    const handleClick = () => {
        setCard(true);
        console.log('card');
    }
    return (
        !card ? (
            <>
            <h1 className='clickhere'>Click Here!!</h1>
                <Arrow />
                <div className="birthday-gift">
                    <div className="gift">
                        <input id='click' type='checkbox' />
                        <label className='click' for='click' onClick={handleClick}></label>
                        <div className="wishes">Happy Birthday!</div>
                        <div className="sparkles">
                            <div className="spark1"></div>
                            <div className="spark2"></div>
                            <div className="spark3"></div>
                            <div className="spark4"></div>
                            <div className="spark5"></div>
                            <div className="spark6"></div>
                        </div>
                    </div>
                </div>
            </>
        ) : (<Birthday />)
    )
}

export default Box