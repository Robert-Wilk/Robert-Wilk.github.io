import styled from 'styled-components';
import Button from '../utility/Button';
import PText from '../utility/PText';
import SectionTitleReverse from '../utility/SectionTitleReverse';
import mewithsnow from '../../assests/images/mewithsnow.JPG';

const HeroStyles = styled.div`
  padding-top: 10rem;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    min-height: 500px;
    width: 100%;
  }
  .heroSection__left,
  .heroSection__right {
    flex: 1;
    padding: 3rem;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .heroSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  .heroImg {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
  }
  @media only screen and (max-width: 950px) {
    .heroSection__left {
      flex: 4;
    }
    .heroSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
      min-height: 400px;
    }
    .heroSection__left,
    .heroSection__right {
      width: 100%;
    }
    .heroSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .heroSection__buttons {
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

export default function Hero() {
  return (
    <HeroStyles>
      <div className="container">
        <div className="heroSection__left">
          <SectionTitleReverse
            subheading="Hello, I am"
            heading="Robert Wilk"
          />
          <PText>
            A CS student studying artificial intelligence, robotics, and front-end development.
          </PText>
          <div className="heroSection__buttons">
            <Button btnText="Portfolio" btnLink="/Portfolio" />
            <Button btnText="Read More" btnLink="/About" outline />
          </div>
        </div>
        <div className="heroSection__right">
          <img className="heroImg" src={mewithsnow} alt="Img" />
        </div>
      </div>
    </HeroStyles>
  );
}