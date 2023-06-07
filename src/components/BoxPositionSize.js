import { useState, useEffect } from 'react';

/* export default function BoxPositionSize() {
  const [ps, setPs] = useState({ x: 0, y: 0, with: 10, height: 10 });

  useEffect(() => {
    function handleWindowMouseMove(e) {
      console.log(e)
      setPs({ ...ps, x: e.pageX, y: e.pageY });
    }

    window.addEventListener('mousemove', handleWindowMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    }
  })

  return (<div>
    <p> position : ({ps.x},{ps.y})</p>
    <p> size: ({ps.with},{ps.height})</p>
  </div>)
} */
/* 
export default function BoxPositionSize() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 100, height: 100 });

  useEffect(() => {
    function handleWindowMouseMove(e) {
      setPosition({ x: e.pageX, y: e.pageY });
    }

    window.addEventListener('mousemove', handleWindowMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    }
  })

  return (<div>
    <p> position : ({position.x},{position.y})</p>
    <p> size: ({size.width},{size.height})</p>
  </div>)
} */

function usePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function handleWindowMouseMove(e) {
      setPosition({ x: e.pageX, y: e.pageY });
    }

    window.addEventListener('mousemove', handleWindowMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    }
  });
  return position;
}

export default function BoxPositionSize() {
  const position = usePosition();
  const [size, setSize] = useState({ width: 100, height: 100 });
  return (<div>
    <p> position : ({position.x},{position.y})</p>
    <p> size: ({size.width},{size.height})</p>
  </div>)
}

