import React from 'react'
import Arrow from './Arrow';
import Birthday from './Birthday';
import './box.css'
import GiftBoxAnimation from './GiftBoxAnimation';

const Box = () => {
    const [card, setCard] = React.useState(false);

    return (
        !card ? (
            <>
                <h1 className='clickhere'>Click Here!!</h1>
                <Arrow />
                <GiftBoxAnimation setCard={setCard} />
                {/* <div className="birthday-gift"> */}
                {/* <div className="gift"> */}
                {/* <input id='click' type='checkbox' /> */}
                {/* <label className='click' htmlFor='click' onClick={handleClick}></label>
                        <div className="wishes">Happy Birthday!</div> */}
                {/* <div className="sparkles">
                            <div className="spark1"></div>
                            <div className="spark2"></div>
                            <div className="spark3"></div>
                            <div className="spark4"></div>
                            <div className="spark5"></div>
                            <div className="spark6"></div>
                        </div> */}
                {/* </div> */}
                {/* </div> */}
            </>
        ) : (<Birthday />)
    )
}

export default Box