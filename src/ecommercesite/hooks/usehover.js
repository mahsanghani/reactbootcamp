import { useState, useEffect, useRef } from "react";

function useHover() {
  // Challenge:
  // Keep track of hover state in this hook

  // Create a couple of functions (enter, leave) that set the hovered
  // state accordingly (true when entered, false when left)

  /**
   * Challenge:
   *
   * Using useEffect and useRef, make it so when this hook first loads,
   * it sets up the "mouseenter" and "mouseleave" event listeners on the ref.
   *
   * Remember: the ref.current will represent the DOM node, which is where you can
   * do imperative commands like `.addEventListener` and `removeEventListener`.
   */

  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  function enter() {
    setHovered(true);
  }

  function leave() {
    setHovered(false);
  }

  useEffect(() => {
    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", leave);

    return () => {
      ref.current.removeEventListener("mouseenter", enter);
      ref.current.removeEventListener("mouseleave", leave);
    };
  }, []);

  return [hovered, ref];
}

export default useHover;
