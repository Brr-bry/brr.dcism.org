import { useEffect, useState } from "react";

const ASCII_CHARS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const getRandomChar = () => {
    return ASCII_CHARS[
        Math.floor(Math.random() * ASCII_CHARS.length)
    ];
};

export function Hero({ isLoaded }) {

    const name = "John Bryan Ponce";

    const [displayText, setDisplayText] = useState(() =>
        name.split("").map((char) =>
            char === " " ? " " : getRandomChar()
        )
    );

    const [hoveredLetter, setHoveredLetter] = useState(null);

    useEffect(() => {

        if (!isLoaded) return;

        const timers = [];

        name.split("").forEach((char, index) => {

            if (char === " ") return;

            const delay = Math.random() * 500;
            const duration = 500 + Math.random() * 700;

            const startTimer = setTimeout(() => {

                const startTime = Date.now();

                const cycle = setInterval(() => {

                    const elapsed = Date.now() - startTime;

                    if (elapsed >= duration) {

                        clearInterval(cycle);

                        setDisplayText((prev) => {
                            const next = [...prev];
                            next[index] = char;
                            return next;
                        });

                        return;
                    }

                    setDisplayText((prev) => {

                        const next = [...prev];

                        next[index] = getRandomChar();

                        return next;
                    });

                }, 50);

                timers.push(cycle);

            }, delay);

            timers.push(startTimer);

        });

        return () => {

            timers.forEach((timer) => {
                clearTimeout(timer);
                clearInterval(timer);
            });

        };

    }, [isLoaded]);

    return (
        <section
            className="
                min-h-screen
                w-full
                flex
                flex-col
                items-center
                justify-center
                text-center
                px-4
            "
        >

            <div
                className="
                    flex
                    flex-wrap
                    justify-center
                    p-2
                    sm:p-5
                    text-[clamp(2.5rem,8vw,8rem)]
                    leading-none
                    text-text
                    font-space
                    font-bold
                "
            >

                {displayText.map((letter, index) => {

                    if (name[index] === " ") {

                        return (
                            <span
                                key={index}
                                className="inline-block w-[0.3em]"
                            />
                        );

                    }

                    return (
                        <span
                            key={index}
                            onMouseEnter={() => setHoveredLetter(index)}
                            onMouseLeave={() => setHoveredLetter(null)}
                            className="
                                inline-block
                                overflow-hidden
                                h-[1em]
                                align-bottom
                            "
                        >

                            <span
                                className={`
                                    relative
                                    flex
                                    flex-col
                                    transition-transform
                                    duration-500
                                    ease-in-out

                                    ${
                                        hoveredLetter === index
                                            ? "-translate-y-[1em]"
                                            : "translate-y-0"
                                    }
                                `}
                            >

                                <span className="absolute bottom-[1em] left-0 h-[1em] w-full">
                                    {letter}
                                </span>

                                <span className="h-[1em]">
                                    {letter}
                                </span>

                                <span className="h-[1em]">
                                    {letter}
                                </span>

                            </span>

                        </span>
                    );

                })}

            </div>

            <span
                className="
                    text-secondary
                    text-[clamp(1.5rem,4vw,3rem)]
                    mt-4
                    sm:mt-6
                "
            >
                Web Developer
            </span>

        </section>
    );
}