import { useEffect, useRef, useState } from "react";
import "./TheaterOpening.css";
import { useNavigate } from "react-router-dom";

const TheaterOpening = () => {
    const [showButton, setShowButton] = useState(false);
    const [lightsOn, setLightsOn] = useState(false);
    const [showMusicPlayer, setShowMusicPlayer] = useState(false);
    const [showWishesCard, setShowWishesCard] = useState(false);
    const [showMemories, setShowMemories] = useState(false);

    const audioRef = useRef<HTMLAudioElement>(null);
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleLightsOn = () => {
        setLightsOn(true);
    };

    const handleBackToHome = () => {
        navigate("/");
    };

    const handlePlayMusic = async () => {
        try {
            if (audioRef.current) {
                await audioRef.current.play();

                setShowMusicPlayer(true);

                setTimeout(() => {
                    setShowWishesCard(true);
                }, 2000);
            }
        } catch (error) {
            console.error("Audio play failed:", error);
        }
    };

    return (
        <div className="theater">
            {/* Audio always mounted so music doesn't stop */}
            <audio
                ref={audioRef}
                src="/birthday.mp3"
            />

            {/* Birthday Screen */}
            {!showMemories && (
                <>
                    <div className="curtain left-curtain"></div>
                    <div className="curtain right-curtain"></div>

                    {!lightsOn && (
                        <div className="stage-content">
                            <h1 className="title">
                                🎂 Birthday Celebration 🎂
                            </h1>

                            {showButton && (
                                <button
                                    className="light-btn"
                                    onClick={handleLightsOn}
                                >
                                    💡 Turn On Lights
                                </button>
                            )}
                        </div>
                    )}

                    {lightsOn && (
                        <>
                            <div className="party-lights">
                                {[...Array(25)].map((_, index) => (
                                    <span
                                        key={index}
                                        className="party-bulb"
                                        style={{
                                            animationDelay: `${index * 0.1}s`,
                                        }}
                                    />
                                ))}
                            </div>

                            <div className="stage-content">
                                <h1 className="title">
                                    ✨ Welcome to the Celebration ✨
                                </h1>

                                {!showMusicPlayer && (
                                    <button
                                        className="music-btn"
                                        onClick={handlePlayMusic}
                                    >
                                        🎵 Play Music
                                    </button>
                                )}

                                {showWishesCard && (
                                    <div className="wishes-card">
                                        <h2>💖 A Special Message For You 💖</h2>
                                        
                                        <p>
                                            Wishing you endless happiness,
                                            success, good health, and beautiful
                                            memories.
                                        </p>

                                        <p>
                                            May this special day bring joy,
                                            laughter, and all the things that
                                            make you smile.
                                        </p>

                                        <h3>
                                            🎁 Have an Amazing Year Ahead! 🎁
                                        </h3>

                                        <button
                                            className="memory-btn"
                                            onClick={() =>
                                                setShowMemories(true)
                                            }
                                        >
                                            📸 See Our Memories
                                        </button>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </>
            )}

            {/* Memories Screen */}
            {showMemories && (
                <div className="memories-container">
                    <h1>💖 Our Memories 💖</h1>

                    <div className="special-message-card">

                        <p>
                            Every moment spent with you has become a beautiful memory.
                            Your smile brings happiness, your presence brings comfort,
                            and your friendship/love makes life more meaningful.
                        </p>

                        <p>
                            On this special day, I wish you endless joy, success,
                            laughter, and countless reasons to smile. May all your
                            dreams come true and may every day be as wonderful as you are.
                            ✨🎂🎉
                        </p>

                        <h3>❤️ Thank You For Being Part Of My Life ❤️</h3>
                    </div>

                    <div className="memory-gallery">
                        <div className="memory-card">
                            <img
                                src="/image.png"
                                alt="Memory 1"
                            />
                            <p>❤️ Our First Beautiful Memory</p>
                        </div>

                        <div className="memory-card">
                            <img
                                src="/image.png"
                                alt="Memory 2"
                            />
                            <p>✨ A Special Day Together</p>
                        </div>

                        <div className="memory-card">
                            <img
                                src="/image.png"
                                alt="Memory 3"
                            />
                            <p>🎉 Unforgettable Moments</p>
                        </div>
                    </div>

                    <button
                        className="back-btn"
                        onClick={handleBackToHome}
                    >
                        ⬅ Back to Celebration
                    </button>
                </div>
            )}
        </div>
    );
};

export default TheaterOpening;