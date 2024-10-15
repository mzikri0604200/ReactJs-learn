/* eslint-disable react/prop-types */
import { useState } from 'react';
export default function ButtonLike({ children }) {
  const [likes, setLikes] = useState(0);
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <button onClick={handleClick}>
      {children} ({likes})
    </button>
  );
}
