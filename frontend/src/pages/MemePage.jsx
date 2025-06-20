import React, { useState } from "react";

const MemePage = () => {
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");
    const [memeImage, setMemeImage] = useState("https://i.imgflip.com/1bij.jpg");

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "topText") setTopText(value);
        if (name === "bottomText") setBottomText(value);
    };

    const getRandomMeme = async () => {
        try {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            const memes = data.data.memes;
            const randomMeme = memes[Math.floor(Math.random() * memes.length)];
            setMemeImage(randomMeme.url);
        } catch (error) {
            alert("Failed to fetch meme image.");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <h1>Meme Generator</h1>
            <div>
                <input
                    type="text"
                    placeholder="Top text"
                    name="topText"
                    value={topText}
                    onChange={handleChange}
                    style={{ margin: "0.5rem" }}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={bottomText}
                    onChange={handleChange}
                    style={{ margin: "0.5rem" }}
                />
                <button onClick={getRandomMeme} style={{ margin: "0.5rem" }}>
                    Get Random Meme
                </button>
            </div>
            <div style={{ position: "relative", display: "inline-block", marginTop: "2rem" }}>
                <img
                    src={memeImage}
                    alt="Meme"
                    style={{ width: "400px", height: "auto", border: "2px solid #ccc" }}
                />
                <h2
                    style={{
                        position: "absolute",
                        top: "10px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        color: "white",
                        textShadow: "2px 2px 4px #000",
                        width: "90%",
                        fontSize: "2rem",
                        margin: 0,
                        pointerEvents: "none",
                        userSelect: "none",
                    }}
                >
                    {topText}
                </h2>
                <h2
                    style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        color: "white",
                        textShadow: "2px 2px 4px #000",
                        width: "90%",
                        fontSize: "2rem",
                        margin: 0,
                        pointerEvents: "none",
                        userSelect: "none",
                    }}
                >
                    {bottomText}
                </h2>
            </div>
        </div>
    );
};

export default MemePage;