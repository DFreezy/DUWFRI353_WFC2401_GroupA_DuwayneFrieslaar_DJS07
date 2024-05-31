import React from "react"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });
    const [allMemeImages, setAllMemeImages] = React.useState([]);
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes));
    }, []);
   
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
        }));
    }
    
    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }));
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Hey" 
                    className="input" 
                    name="topText"
                    value={meme.topText} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    placeholder="How you doin" 
                    className="input" 
                    name="bottomText"
                    value={meme.bottomText} 
                    onChange={handleChange} 
                />
                <button 
                    className="form-button" 
                    onClick={getMemeImage}
                > 
                    Generate Meme 
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" alt="meme"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}
