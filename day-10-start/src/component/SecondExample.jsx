import { useEffect, useState } from "react";

export const ShowingMessage = () => {
    useEffect(() => {
        const timerId = setInterval(() => {
            console.log("times running");
        }, 1000);
        return () => {
            clearInterval(timerId);
        };
    }, []);
    return <div>Hello mate i am the message you are reading</div>;
};

export const SecondExample = () => {
    const [showComponent, setShowComponent] = useState(true);
    function handleBtnClick() {
        setShowComponent(false);
    }
    return (
        <div>
            {showComponent ? <ShowingMessage /> : null}
            <button onClick={handleBtnClick}>Hide this message</button>
        </div>
    );
};
