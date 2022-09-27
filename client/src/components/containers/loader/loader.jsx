import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { LoaderContentStyled } from "./loader.style";

function LoaderContent(props) {
  const { className, content, divShown, rf } = props;

  return (
    <div className={className} ref={rf}>
      {divShown ? content : null}
    </div>
  );
}

function Loader(props) {
  const [divShown, setDivShown] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && !divShown) {
      setDivShown(true);
    }
  }, [inView]);

  return (
    <LoaderContentStyled
      className={props.className}
      rf={ref}
      inView={inView}
      divShown={divShown}
      content={props.content}
    />
  );
}

export { Loader, LoaderContent };
