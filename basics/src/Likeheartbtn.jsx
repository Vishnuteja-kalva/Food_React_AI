import { useState } from "react";

function Likeheartbtn() {
    const [isliked, setisliked] = useState(false);

    function likebtn() {
        setisliked((isliked) => !isliked);
    }

    return (
        <div onClick={likebtn}>
            <span>
                <i className={isliked ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
            </span>
        </div>
    );
}

export default Likeheartbtn;
