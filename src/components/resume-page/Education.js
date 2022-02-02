import { FaGraduationCap } from "../../proxy/react-icons-proxy";
import SectionTitle from "../utility/SectionTitle";
import styled from "styled-components";

const EducationStyles = styled.nav`
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1.8rem;
  }
  .education__header {
    display: flex;
    align-items: left;
    justify-content: center;
    svg {
      margin-left: 2rem;
      width: 6rem;
      height: auto;
    }
  }
  .education__content {
    display: flex;
    gap: 5rem;
    justify-content: space-between;
    border: 3px solid var(--red-light);
    border-radius: 12px;
    padding: 1rem;
    margin: 1rem 1rem 2rem 1rem;
  }
  .education__left {
    text-align: left;
  }
  .schoolInfo__top {
    p {
      color: var(--red-light);
    }
  }
  .schoolInfo__bottom {
  }
  .education__right {
    text-align: right;
  }
  .padding {
    padding-bottom: 1rem;
  }
  .paddingMore {
    padding-bottom: 1rem;
  }
  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
    }
    .education__header {
      svg {
        width: 4rem;
        height: auto;
      }
    }
    .schoolInfo__top {
      padding-bottom: 1rem;
    }
    .education__content {
      flex-direction: column;
      gap: 0;
    }
    .education__right {
      text-align: left;
    }
    .padding {
      padding-bottom: 0.2rem;
    }
  }
`;

export default function Education() {
  return (
    <EducationStyles>
      <div className="container">
        <div className="education__header">
          <SectionTitle
            className="section-title"
            heading="Education"
            subheading=""
          />
          <FaGraduationCap />
        </div>
        <div className="education__content">
          <div className="education__left">
            <div className="schoolInfo__top paddingMore">
              <h1>University of North Carolina at Charlotte</h1>
              <p>Bachelor of Science in Computer Science</p>
            </div>
            <div className="schoolInfo__bottom">
              <ul>
                <li className="padding">
                  <p>
                    <strong>GPA: </strong>3.925
                  </p>
                </li>
                <li className="padding">
                  <p>
                    <strong>Concentration: </strong>Artificial Intelligence,
                    Robotics, Gaming
                  </p>
                </li>
                <li className="paddingMore">
                  <p>
                    <strong>Minor: </strong>Computer Engineering
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="education__right">
            <p className="padding">Charlotte, NC</p>
            <p>December 2022</p>
          </div>
        </div>
      </div>
    </EducationStyles>
  );
}
