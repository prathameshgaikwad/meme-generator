export default function Meme() {
  return (
    <main>
      <form className="form">
        <div className="form--input">
          <input
            type="text"
            placeholder="Top text"
            className="form--input1"></input>
          <input
            type="text"
            placeholder="Bottom text"
            className="form--input2"></input>
        </div>
        <button className="form--button">Get a new meme image</button>
      </form>
    </main>
  );
}
