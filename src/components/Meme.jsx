import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((result) => setAllMemes(result.data.memes));
  }, []);

  function getRandomImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImg: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <div className="form--input">
          <input
            type="text"
            placeholder="Top text"
            className="form--input1"
            name="topText"
            value={meme.topText}
            onChange={handleChange}></input>
          <input
            type="text"
            placeholder="Bottom text"
            className="form--input2"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}></input>
        </div>
        <button className="form--button" onClick={getRandomImage}>
          Get a new meme image
        </button>
        <div className="meme">
          <h1 className="memeText top">{meme.topText}</h1>
          <img src={meme.randomImg} className="meme--image"></img>
          <h1 className="memeText bottom">{meme.bottomText}</h1>
        </div>
      </div>
    </main>
  );
}
