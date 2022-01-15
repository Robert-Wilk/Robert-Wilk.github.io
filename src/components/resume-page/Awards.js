import { HiOutlineLightBulb } from '../../proxy/react-icons-proxy';
import SectionTitle from '../utility/SectionTitle';
import styled from 'styled-components';

const AwardsStyles = styled.nav`
  .container {
    text-align: left;
  }
  h1 {
      font-size: 3rem;
  }
  p {
      font-size: 1.8rem;
  }
  .awards__header {
    display: flex;
    align-items: left;
    justify-content: center;
    svg {
      margin-left: 2rem;
      width: 6rem;
      height: auto;
    }
  }
  .awards__grid {
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
    .awards__header {
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

export default function Awards() {

  return (
    <AwardsStyles>
      <div className="container">
        <div className="awards__header">
          <SectionTitle className="section-title" heading="Awards" subheading="" />
          <HiOutlineLightBulb />
        </div>
        <div className="awards__grid">
          <div className="row">
            <h1>Chancellors List</h1>
            <p><strong>Fall: </strong>2019, 2020, 2021<br /><strong>Spring: </strong>2021</p> 
          </div>
          <div className="row">
            <h1>Deans List</h1>
            <p><strong>Spring: </strong>2020</p> 
          </div>
          <div className="row padding">
            <h1>IEEE-HKN Kappa Phi</h1>
            <p>Honor society member and chapter treasurer</p> 
          </div>
        </div>
      </div>
    </AwardsStyles>
  );
}