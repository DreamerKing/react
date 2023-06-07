import React, { useState, useCallback } from 'react';

export default function MeasureDomNode() {
  const [height, setHeight] = useState(0);
  const measureRef = useCallback((node) => {
    if (node) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  const [rect, useRectRef] = useRect();
  return (
    <>
      <h1 ref={measureRef}>Hello</h1>
      <p> measure height: {Math.round(height)}px</p>
      <h2 ref={useRectRef}> World</h2>
      <p> useRectRef height: {rect && Math.round(rect.height)}px</p>
    </>
  )
}


function useRect() {
  const [rect, setRect] = useState();
  const ref = useCallback((node) => {
    if (node) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
}