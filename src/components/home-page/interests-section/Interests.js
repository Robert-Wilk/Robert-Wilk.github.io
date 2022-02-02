import styled from "styled-components";
import SectionTitle from "../../utility/SectionTitle";
import InterestSectionItem from "./InterestSectionItem";
import { FaBrain, MdCode, FaRobot } from "../../../proxy/react-icons-proxy";

const ServicesStyles = styled.div`
  padding: 10rem 0;
  .focus__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  .focusItem__title {
    color: var(--red-light);
  }
  .para {
    color: var(--black);
  }
  @media only screen and (max-width: 768px) {
    .focus__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function Interests() {
  return (
    <ServicesStyles>
      <div className="container">
        <SectionTitle
          className="section-title"
          heading="About My Studies"
          subheading=""
        />
        <div className="focus__allItems">
          <InterestSectionItem
            title="Artificial Intelligence"
            desc="I am learning the basics of machine learning, computer vision, and data science algorithms."
            icon={<FaBrain />}
          />
          <InterestSectionItem
            title="Front-End Development"
            desc="I am teaching myself React Js and CSS to create user interfaces on future projects (This website was built in React!)"
            icon={<MdCode />}
          />
          <InterestSectionItem
            title="Robotics"
            desc="I am learning about the theory and prattical programming of mobile robots and manipulators"
            icon={<FaRobot />}
          />
        </div>
      </div>
    </ServicesStyles>
  );
}
