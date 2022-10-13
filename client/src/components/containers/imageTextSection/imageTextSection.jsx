import React from "react";
import { size } from "../../../sizes/screenSize.style";
import { useResize } from "../../../hooks/screenDetection";
import { Loader } from "../loader/loader";
import { CenterStyled } from "../center/center.style";
import { useState } from "react";
import { BorderImagesStyled } from "../../images/borderImages/borderImages.style";
import { BorderImageStyled } from "../../images/borderImage/borderImage.style";

function CenteredLoader(props) {
  const { textIndex, images } = props;

  const columnSizeFull = 11;
  const columnSizeHalf = 5;

  const columnSize =
    images !== undefined
      ? images[textIndex] === undefined
        ? ` is-${columnSizeFull} px-5 `
        : ` is-${columnSizeHalf} `
      : ` is-${columnSizeHalf} `;

  return (
    <Loader
      className={columnSize + " column my-5 "}
      content={<CenterStyled content={props.children} />}
    />
  );
}

function ImageTextSectionImages(props) {
  const images = props.images;

  return (
    <>
      {images.map((image, i) => (
        <CenteredLoader key={i}>
          <BorderImageStyled
            src={image.src}
            alt={image.alt}
            backgroundColor={image.backgroundColor}
            width={image.width}
            padding={"1em"}
            offsetY={image.offsetY}
            offsetX={image.offsetX}
          />
        </CenteredLoader>
      ))}
    </>
  );
}

function ImageTextSection(props) {
  const [isMobile, setIsMobile] = useState(false);
  const { images } = props;

  function handleResize() {
    if (window.innerWidth >= size.tablet) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }
  useResize(handleResize);

  return (
    <div
      className={
        props.className + " columns is-centered is-vcentered is-multiline mb-0"
      }
    >
      <CenteredLoader>{props.textContentFirst}</CenteredLoader>

      {isMobile ? (
        <Loader
          className={" column is-12 my-6 "}
          content={
            <CenterStyled
              content={
                <BorderImagesStyled
                  images={images}
                  backgroundColor={images[0].backgroundColor}
                  height={"500px"}
                />
              }
            />
          }
        />
      ) : (
        <ImageTextSectionImages images={images} />
      )}

      <CenteredLoader textIndex={1} images={images}>
        {props.textContentSecond}
      </CenteredLoader>
    </div>
  );
}

export { ImageTextSection };
