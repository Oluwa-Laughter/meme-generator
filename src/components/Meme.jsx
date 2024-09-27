import { useState } from "react";

export default function Meme() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  return (
    <main>
      <form action="">
        <div>
          <label htmlFor="top-text">Top text</label>
          <input
            type="text"
            id="top-text"
            name="top-text"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="bottom-text">Bottom text</label>
          <input
            type="text"
            id="bottom-text"
            name="bottom-text"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
          />
        </div>
        <button type="submit">Get a new meme image 🖼️</button>
      </form>
    </main>
  );
}
