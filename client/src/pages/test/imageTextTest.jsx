import { PageLayout } from "../../components/containers/pageLayout/pageLayout";
import {
  MainSectionOneAboutStyled,
  MainSectionOneHeadlineStyled,
} from "../../components/containers/mainPage/section01/mainSectionOne.style";
import { standardColors } from "../../palettes/standardColors.style";
import data from "../../../public/data.json";
import { ImageTextSection } from "../../components/containers/imageTextSection/imageTextSection";

const images = [
  {
    src: require("../../../public/images/people01.jpg"),
    alt: data.homePage.section1.image1.description,
    width: data.homePage.section1.image1.width,
    widthMobile: data.homePage.section1.image1.widthMobile,
    backgroundColor: standardColors.blue1,
    offsetX: "-3em",
    offsetY: "2em",
    offsetXMobile: "-2em",
    offsetYMobile: "-1em",
  },
  {
    src: require("../../../public/images/lin01.jpg"),
    alt: data.homePage.section1.image2.description,
    width: data.homePage.section1.image2.width,
    widthMobile: data.homePage.section1.image2.widthMobile,
    backgroundColor: standardColors.brown3,
    offsetX: "3em",
    offsetY: "-3em",
    offsetXMobile: "2em",
    offsetYMobile: "2em",
  },
];

function ImageTextTest() {
  return (
    <PageLayout>
      <ImageTextSection
        textContentFirst={<MainSectionOneHeadlineStyled />}
        textContentSecond={<MainSectionOneAboutStyled />}
        images={[images[0], images[1]]}
      />
    </PageLayout>
  );
}

export { ImageTextTest };
