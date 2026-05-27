import { useRef } from 'react';

export default function FileInput() {
  const fileInputRef = useRef(null);
  const btnRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fileInputRef.current?.files);
  };

  const handleClick = () => {
    console.log(btnRef.current);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload:
        <input type="file" ref={fileInputRef} />
      </label>
      <br />
      <button type="submit" onClick={handleClick} ref={btnRef}>
        Submit
      </button>
    </form>
  );
}
