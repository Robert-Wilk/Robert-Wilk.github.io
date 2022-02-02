import styled from "styled-components";

const SectionTitleStyles = styled.div`
  text-align: center;
  p {
    font-family: "Roboto";
    font-size: 1.8rem;
  }
  h2 {
    font-family: "Oswald";
    font-weight: bold;
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.8rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;
export default function SectionTitleReverse({
  subheading = "subheading",
  heading = "heading",
}) {
  return (
    <SectionTitleStyles className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyles>
  );
}
