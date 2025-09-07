import { useState } from 'react';


export default function Picture() {
  const [isBgActive, setIsBgActive] = useState(true);
  const handleBgActive = () => {
    if (!isBgActive) {
      setIsBgActive(true);
    }
  };
  return (
    <div onClick={handleBgActive} className={`background ${isBgActive ? 'background--active' : ''}`}>
      <img onClick={(e) => {
        e.stopPropagation();
        if (isBgActive) {
          setIsBgActive(false);
        }
      }}
        className={`picture ${isBgActive ? '': 'picture--active'}`}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
