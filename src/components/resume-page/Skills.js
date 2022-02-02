import { HiOutlineChip } from "../../proxy/react-icons-proxy";
import SectionTitle from "../utility/SectionTitle";
import styled from "styled-components";

const SkillsStyles = styled.nav`
  .container {
    text-align: left;
  }
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1.8rem;
  }
  .skills__header {
    display: flex;
    align-items: left;
    justify-content: center;
    svg {
      margin-left: 2rem;
      width: 6rem;
      height: auto;
    }
  }
  .skills__grid {
    display: flex;
    gap: 2rem;
    text-align: left;
    justify-content: space-between;
    flex-direction: column;
    border: 3px solid var(--red-light);
    border-radius: 12px;
    padding: 1rem;
    margin: 1rem 1rem 2rem 1rem;
  }
  .padding {
    padding-bottom: 1rem;
  }
  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
    }
    .skills__header {
      svg {
        width: 4rem;
        height: auto;
      }
    }
    .padding {
      padding-bottom: 0;
    }
  }
`;

export default function Skills() {
  return (
    <SkillsStyles>
      <div className="container">
        <div className="skills__header">
          <SectionTitle
            className="section-title"
            heading="Skills"
            subheading=""
          />
          <HiOutlineChip />
        </div>
        <div className="skills__grid">
          <div className="row">
            <h1>Programming</h1>
            <p>Python, Java, C, C++, HTML/CSS, JavaScript, PostgreSQL</p>
          </div>
          <div className="row">
            <h1>Frameworks</h1>
            <p>React, Django, JUnit, PyTest, OpenCV, ROS</p>
          </div>
          <div className="row padding">
            <h1>Software Skills</h1>
            <p>Git, Agile/Scrum, Windows, Mac, Linux, Discord, Zoom</p>
          </div>
        </div>
      </div>
    </SkillsStyles>
  );
}
