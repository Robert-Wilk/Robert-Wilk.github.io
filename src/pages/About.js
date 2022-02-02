/* install Swiper modules
SwiperCore.use([Autoplay, Pagination]);
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import GalleryItem from '../components/home-page/gallery-preview-section/GalleryItem';
import 'swiper/swiper-bundle.min.css';
*/

import SectionTitle from "../components/utility/SectionTitle";
import styled from "styled-components";
import PText from "../components/utility/PText";
import mewithboard from "../assests/images/mewithboard.JPG";

const AboutPageStyles = styled.div`
  background-color: var(--light-bg);
  padding: 10rem 0 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left {
    padding: 2rem;
    margin-right: 2rem;
    border: 3px solid var(--red-light);
    border-radius: 12px;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
    color: var(--blue-light);
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
    color: var(--black);
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    object-position: 10% top;
    overflow: hidden;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left {
      margin-right: 0;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
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

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            className="section-title"
            subheading=""
            heading="Robert Wilk"
          />
          <PText>
            I am a student at the University of North Carolina at Charlotte. At
            UNC Charlotte, I am majoring in Computer Science with a
            concentration in AI, robotics, and gaming, with minoring in Computer
            Engineering.
            <br />
            <br />
            I have many things I like to do in my free time. I like to
            play video games, go rock climbing/bouldering, go longboarding,
            build/launch rockets, and learn about front-end development.
          </PText>
        </div>
        <div className="aboutSection__right">
          <img src={mewithboard} alt="About Section image" />
        </div>
      </div>
    </AboutPageStyles>
  );
}
