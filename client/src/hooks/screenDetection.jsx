import React, { useEffect, useState } from "react";

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
