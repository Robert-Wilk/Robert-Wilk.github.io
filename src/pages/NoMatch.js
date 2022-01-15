import SectionTitle from '../components/utility/SectionTitle';
import styled from 'styled-components';
import PText from '../components/utility/PText';
import placeholder from '../assests/images/placeholder.png';

const NoMatchStyles = styled.div`
  padding: 10rem 0 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
  }
  .section-title {
    text-align: center;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
    color: var(--black);
  }
  @media only screen and (max-width: 768px) {
    padding: 14rem 0 10rem 0;
    .container {
      flex-direction: column;
      text-align: center;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
  }
  @media only screen and (max-width: 600px) {
    padding: 8rem 0 10rem 0;
  }
`;

export default function NoMatch() {
  return (
      <NoMatchStyles>
        <SectionTitle className="section-title" heading="No Match Found" subheading=""/>
      </NoMatchStyles>
  );
}