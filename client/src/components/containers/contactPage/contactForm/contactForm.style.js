import styled from "styled-components";
import { ContactForm, FormInputs } from "./contactForm";
import { device } from "../../../../sizes/screenSize.style";

const ContactFormStyled = styled(ContactForm)`
  background-color: white;
`;

const FormInputsStyled = styled(FormInputs)`
  @media screen and ${device.tablet} {
    margin: 0 3rem;
  }

  margin: 0 0.25rem;
`;

export { ContactFormStyled, FormInputsStyled };
