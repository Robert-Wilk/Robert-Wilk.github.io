import { HiOutlineBriefcase } from '../../proxy/react-icons-proxy';
import Job from './Job';
import SectionTitle from '../utility/SectionTitle';
import styled from 'styled-components';

const WorkExperienceStyles = styled.nav`
  .container {
    text-align: left;
  }
  .work__header {
    display: flex;
    align-items: left;
    justify-content: center;
    svg {
      margin-left: 2rem;
      width: 6rem;
      height: auto;
    }
  }
  .work__jobs {
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
  @media only screen and (max-width: 768px) {
  }
`;

export default function WorkExperience() {

  return (
    <WorkExperienceStyles>
      <div className="container">
        <div className="work__header">
          <SectionTitle heading="Work Experience" subheading="" />
          <HiOutlineBriefcase />
        </div>
        <div className="work__jobs">
          <Job 
            title={"Air Ramp Person | Package Handler"} 
            company={"United Parcel Service (UPS)"} 
            location={"Charlotte, NC"} 
            time={"Jun. 2021 - Aug. 2021"} 
            responsibilities={["Carefully handle packages coming from delivery trucks and airplanes", 
                                "Safely operate machinery used to load/unload airplanes and delivery trucks", 
                                "Sort packages for appropriate destination",
                                "Provide appropriate care for hazardous material transport",
                                "Guide vehicles within airplane perimeter",
                                "Uphold Airport Security guidelines"]} 
          />
          <Job 
            title={"Special Needs Caregiver"} 
            company={"GT Independence"} 
            location={"Charlotte, NC"} 
            time={"May 2019 - Jan. 2021"} 
            responsibilities={["Promoted independence through skill building and providing opportunities to practice daily activities (cooking, cleaning, travelling in the community)", 
                                "Provided care for individuals who are medically fragile by reminding them to take medications, rest breaks, and stay hydrated"]} 
          />
        </div>
      </div>
    </WorkExperienceStyles>
  );
}