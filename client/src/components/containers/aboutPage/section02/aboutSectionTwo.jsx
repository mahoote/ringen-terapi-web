import data from "../../../../../public/data.json";
import {
  desktopBig,
  desktopSmall,
  mobileBig,
  mobileSmall,
  tabletBig,
  tabletSmall,
} from "../../../globals/fontSizes";
import { TextStyled } from "../../../text/text.style";
import {
  AboutSectionTwoContentStyled,
  AboutSectionTwoParagraphItemStyled,
} from "./aboutSectionTwo.style";
import { CenterStyled } from "../../center/center.style";
import { standardColors } from "../../../../palettes/standardColors.style";
import { Loader } from "../../loader/loader";

function AboutSectionTwoParagraphItem(props) {
  const list = props.list;

  return (
    <div className={props.className}>
      <ul style={{ listStyleType: "circle" }}>
        {list.map((item, i) => (
          <li key={i}>
            <TextStyled
              text={item}
              sizeDesktop={desktopSmall}
              sizeTablet={tabletSmall}
              sizeMobile={mobileSmall}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function AboutSectionTwoParagraph(props) {
  return (
    <Loader
      content={
        <div className={"my-6 py-1"}>
          <div className={"has-text-centered my-6"}>
            <hr
              style={{
                backgroundColor: standardColors.brown4,
                maxWidth: "60%",
                margin: "3em auto",
              }}
            />
            <TextStyled
              text={props.headline}
              sizeDesktop={tabletBig}
              sizeTablet={tabletBig}
              sizeMobile={mobileBig}
              textWeight={"bold"}
            />
          </div>
          <CenterStyled
            content={<AboutSectionTwoParagraphItemStyled list={props.list} />}
          />
        </div>
      }
    />
  );
}

function AboutSectionTwoContent(props) {
  const paragraphs = data.aboutPage.section2.paragraphs;

  return (
    <CenterStyled
      content={
        <div className={props.className}>
          <div className={"has-text-centered pt-5 pb-0"}>
            <Loader
              content={
                <TextStyled
                  text={data.aboutPage.section2.headline1.text}
                  sizeDesktop={desktopBig}
                  sizeTablet={tabletBig}
                  sizeMobile={mobileBig}
                  textWeight={"bold"}
                />
              }
            />
          </div>
          <div>
            {paragraphs.map((p, i) => (
              <AboutSectionTwoParagraph
                key={i}
                headline={p.headline.text}
                list={p.list}
              />
            ))}
          </div>
        </div>
      }
    />
  );
}

function AboutSectionTwo(props) {
  return (
    <div className={props.className}>
      <AboutSectionTwoContentStyled />
    </div>
  );
}

export {
  AboutSectionTwo,
  AboutSectionTwoContent,
  AboutSectionTwoParagraphItem,
  AboutSectionTwoParagraph,
};
