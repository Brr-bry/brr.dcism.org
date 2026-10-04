
import {useState, useEffect} from 'react';

export function LoadingScreen ({onComplete}){

    const [text, setText] = useState("");
    const fullText = "<Welcome. />"

    useEffect( () =>{
        let index = 0;
        const interval = setInterval(() => {
           setText(fullText.substring(0, index));
            index++;

            if(index > fullText.length){
                clearInterval(interval)

                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete])


    return (
        <div className="fixed inset-0 z-50 bg-bg text-primary flex flex-col items-center justify-center">
            <div className="mb-4 text-[clamp(1.75rem,5vw,2.5rem)] font-space font-bold">
                {text}
                <span className="animate-blink ml-1">|</span>
            </div>

            <div className="w-[min(200px,60vw)] h-[2px] bg-bg-dark rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-primary shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
            </div>
        </div>
    )
}