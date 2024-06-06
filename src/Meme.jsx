import React from "react";

// Meme component
export default function Meme() {
  // State to hold the meme data (top text, bottom text, and random image URL)
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg", // Default image
  });

  // State to hold the array of all memes fetched from the API
  const [allMemes, setAllMemes] = React.useState([]);

  // UseEffect hook to fetch memes from the API when the component mounts
  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes"); // Fetch memes
      const data = await res.json(); // Parse JSON response
      setAllMemes(data.data.memes); // Set the memes data to state
    }
    getMemes(); // Call the function to fetch memes
  }, []);

  // Function to get a random meme image from the allMemes array
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length); // Generate random index
    const url = allMemes[randomNumber].url; // Get URL of the random meme
    setMeme((prevMeme) => ({
      ...prevMeme, // Keep previous meme state
      randomImage: url, // Update randomImage with new URL
    }));
  }

  // Function to handle changes in the input fields
  function handleChange(event) {
    const { name, value } = event.target; // Get name and value of the input
    setMeme((prevMeme) => ({
      ...prevMeme, // Keep previous meme state
      [name]: value, // Update the respective field (topText or bottomText)
    }));
  }

  // JSX rendering
  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange} // Handle input change
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange} // Handle input change
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
