import { TextStyled } from "../../../text/text.style";
import React, { useEffect, useRef, useState } from "react";
import { desktopBig, mobileBig, tabletBig } from "../../../globals/fontSizes";
import { MainSectionTwoTextStyled } from "./mainSectionTwo.style";
import { useGetScreenDistance } from "../../../../hooks/screenDetection";

function MainSectionTwoText(props) {
  return (
    <div className={props.className}>
      <TextStyled
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        }
        sizeDesktop={desktopBig}
        sizeTablet={tabletBig}
        sizeMobile={mobileBig}
      />
    </div>
  );
}

function MainSectionTwo(props) {
  const ref = useRef();
  const { topStart, bottomEnd } = useGetScreenDistance(ref);
  const [showElement, setShowElement] = useState(false);

  const showThreshold = 200;

  useEffect(() => {
    // console.log("Top: " + topStart);
    // console.log("Bottom end: " + bottomEnd);

    if (topStart < showThreshold && bottomEnd < showThreshold) {
      setShowElement(true);
    } else setShowElement(false);
  }, [topStart, bottomEnd]);

  return (
    <div className={props.className} ref={ref}>
      <MainSectionTwoTextStyled showElement={showElement} />
    </div>
  );
}

export { MainSectionTwo, MainSectionTwoText };
