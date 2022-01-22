import SectionTitle from '../components/utility/SectionTitle';
import styled from 'styled-components';
import PText from '../components/utility/PText';
import { useParams } from 'react-router';
import works from '../assests/data/works';
import Button from '../components/utility/Button';
import Button2 from '../components/utility/Button2';

const ShowcaseStyles = styled.div`
  padding: 10rem 0 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .showcase__left {
    padding-right: 2rem;
  }
  .showcase__left,
  .showcase__right {
    flex: 1;
  }
  .showcase__right {
    text-align: right;
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
  .showcase__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  .section-title h2 {
    color: var(--blue-light);
  }
  .section-title p {
    color: var(--red-light);
  }
  img {
    width: 80%;
    height: auto;
    border-radius: 12px;
    object-position: 10% top;
    overflow: hidden;
  }
  @media only screen and (max-width: 950px) {
    .showcase__left {
      flex: 4;
    }
    .showcase__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 14rem 0 10rem 0;
    .container {
      flex-direction: column;
      text-align: center;
    }
    .showcase__left {
      padding-right: 0;
    }
    .showcase__left,
    .showcase__right {
      width: 100%;
    }
    .showcase__right {
      margin-top: 3rem;
      text-align: center;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .showcase__buttons {
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

export default function Showcase(props) {
  let { id } = useParams();
  let galleryEntry = works[parseInt(id, 10)];

  if (!galleryEntry) return <div>Entry Not found</div>;

  return (
      <ShowcaseStyles>
            <div className="container">
                <div className="showcase__left">
                    <SectionTitle className="section-title" subheading={galleryEntry.date} heading={galleryEntry.name}/>
                    <PText>
                    {galleryEntry.desc}
                    </PText>
                    <div className="showcase__buttons">
                      <Button btnLink={"/Portfolio"} btnText={"Back to Portfolio"}/>
                      <Button2
                          btnText="View Project" 
                          galleryEntry
                          btnLink={galleryEntry.link} outline
                          btnHasLink={galleryEntry.hasLink} />
                    </div>
                </div>
                <div className="showcase__right">
                    <img src={galleryEntry.img} alt="Gallery Entry Image" />
                </div>
            </div>
      </ShowcaseStyles>
  );
}