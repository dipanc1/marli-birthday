import React, { useReducer } from "react";
import "./giftboxanimation.css";

import box from "./images/box.png";
import boxLid from "./images/box-lid.png";
import kuku from "./images/jump-character.png";
// import ConfettiGenerator from "./CanvasConfetti";
import Confetti from "./confetti/Confetti";

const init_state = {
    move: "move",
    jump: "",
    rotated: "",
    rotating: ""
};
export default function GiftBoxAnimation({ setCard }) {
    const [state, setState] = useReducer(
        (state, new_state) => ({
            ...state,
            ...new_state
        }),
        init_state
    );

    const { move, rotating, rotated, jump } = state;

    function animate() {
        let isDone = rotated === "rotated" ? true : false;
        setTimeout(() => {
            setCard(true);
        }, 6000);

        if (!isDone) {
            setState({ rotating: "rotating" });
            setTimeout(() => {
                setState({ jump: "jump" });
            }, 300);
            setTimeout(() => {
                setState({ rotated: "rotated" });
            }, 1000);
        } else {
            setState(init_state);
        }
        let moving = move === "move" ? "" : "move";
        setState({ move: moving });
    }

    return (
        <div className="ppp">
            <Confetti open={jump === "jump"} />
            <div className="img-container">
                <img className={`kuku ${jump}`} src={kuku} alt="kuku" />
                <button className="box" onClick={() => animate()}>
                    <img src={box} alt="box" />
                </button>
                <img
                    className={`lid ${move} ${rotating} ${rotated}`}
                    src={boxLid}
                    alt="box-lid"
                />
            </div>
        </div>
    );
}
