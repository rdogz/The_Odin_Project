import { useState } from 'react';
import './App.css';

const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple'];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [changeCount, setChangeCount] = useState(0);

  const onButtonClick = (color) => () => {
    if (color === backgroundColor) return;
    setBackgroundColor(color);
    setChangeCount((prev) => prev + 1);
  };

  return (
    <>
      <h1>
        Background color has been changed {changeCount}{' '}
        {changeCount !== 1 ? 'times' : 'time'}
      </h1>
      <div
        className="App"
        style={{
          backgroundColor,
        }}
      >
        {COLORS.map((color) => (
          <button
            type="button"
            key={color}
            onClick={onButtonClick(color)}
            className={backgroundColor === color ? 'selected' : ''}
          >
            {color}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;
