import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import placeholder from "../../assests/images/placeholder.png";

const AboutPageStyles = styled.div`
  background-color: var(--light-bg);
  padding: 3rem 0 0 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left {
    padding: 2rem;
    margin-right: 2rem;
    border: ${(props) =>
        props.outline ? "3px solid var(--red-light)" : "none"};
    border-radius: 12px;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
    color: var(--blue-light);
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
    color: var(--black);
    a {
        text-decoration: underline;
        color: var(--black);
    }
  }
  img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    object-position: contain;
    overflow: hidden;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left {
      margin-right: 0;
      padding: ${(props) =>
        props.outline ? "2rem" : "0"};
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      text-align: left;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function TextRightImgLeft({
    heading="heading",
    text = "text",
    img = placeholder,
    alt = "alt text",
    outline=true
}) {
  return (
    <AboutPageStyles outline={outline}>
      <div className="container">
        <div className="aboutSection__left">
          <img src={img} alt={alt} />
        </div>
        <div className="aboutSection__right">
          <SectionTitle
            className="section-title"
            subheading=""
            heading={heading}
          />
          {text}
        </div>
      </div>
    </AboutPageStyles>
  );
}
