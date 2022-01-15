// import Button2 from '../components/utility/Button2';
import Education from '../components/resume-page/Education';
import Skills from '../components/resume-page/Skills';
import WorkExperience from '../components/resume-page/WorkExperience';
import Clubs from '../components/resume-page/Clubs';
import Awards from '../components/resume-page/Awards';
// import resume from '../assests/data/Resume.pdf';
import styled from 'styled-components';

const ResumePageStyles = styled.div`
  padding-top: 8rem;
  .container {
    align-items: center;
    text-align: center;
  }
  .download-button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sections {
    padding-top: 5rem;
    padding-bottom: 5rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    justify-content: space-between;
  }
`;

export default function Resume() {

  return (
    <ResumePageStyles>
        <div className="container">
            <div className="sections">
              <Education />
              <Skills />
              <WorkExperience />
              <Clubs />
              <Awards />
            </div>
        </div>
    </ResumePageStyles>
  );
}