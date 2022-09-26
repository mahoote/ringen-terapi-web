import React, { useEffect, useState } from "react";

export default function useOnScreen(ref) {
  /*
   * Know if the element is visible on the screen.
   * */

  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  );

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}

export function useGetScreenDistance(ref) {
  /*
   * Get the distance between an element and the ends of the screen.
   * */

  const [topSpace, setTopSpace] = useState();
  const [bottomSpace, setBottomSpace] = useState();

  const onScroll = () => {
    const el = ref.current;

    if (el !== null) {
      setTopSpace(el.getBoundingClientRect().top);
      setBottomSpace(window.innerHeight - el.getBoundingClientRect().top);
    }
  };

  // First time.
  useEffect(() => {
    onScroll();
  }, []);

  // After scrolling.
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return { topSpace, bottomSpace };
}

export function useResize(resizeHandler) {
  useEffect(() => {
    resizeHandler();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
}
