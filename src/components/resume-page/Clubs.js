import { RiTeamFill } from "../../proxy/react-icons-proxy";
import Job from "./Job";
import SectionTitle from "../utility/SectionTitle";
import styled from "styled-components";

const ClubStyles = styled.nav`
  .container {
    text-align: left;
  }
  .club__header {
    display: flex;
    align-items: left;
    justify-content: center;
    svg {
      margin-left: 2rem;
      width: 4rem;
      height: auto;
    }
  }
  .club__jobs {
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

export default function Clubs() {
  return (
    <ClubStyles>
      <div className="container">
        <div className="club__header">
          <SectionTitle heading="Clubs" subheading="" />
          <RiTeamFill />
        </div>
        <div className="club__jobs">
          <Job
            title={"Charlotte Hack"}
            company={"Univeristy of North Carolina at Charlotte"}
            location={"Charlotte, NC"}
            time={"Sep. 2019 - Present"}
            responsibilities={[
              "Go to Hackathons to compete for prizes",
              "learn new coding techniques at workshops with company recruiters and employees",
              'Won "Most Spooky Hack" at VolHacks V 2021 (UT Knoxville)',
            ]}
          />
          <Job
            title={"Niner eSports"}
            company={"Univeristy of North Carolina at Charlotte"}
            location={"Charlotte, NC"}
            time={"Jan. 2019 - Present"}
            responsibilities={[
              "Compete in eSports titles at LAN events",
              "Compete at sponsored events in various eSports titles",
            ]}
          />
          <Job
            title={"49er Rocketry and Projectile Society"}
            company={"Univeristy of North Carolina at Charlotte"}
            location={"Charlotte, NC"}
            time={"Jan. 2021 - Present"}
            responsibilities={[
              "Work in teams to design and create rockets for exhibition or competition",
              "Earn Certifications in High Power Rocketry",
              "Go to launch sites to fly High Power Rockets",
              "Discuss space news and industry at weekly meetings",
              "Learn about rocketry modeling and testing software",
            ]}
          />
        </div>
      </div>
    </ClubStyles>
  );
}
