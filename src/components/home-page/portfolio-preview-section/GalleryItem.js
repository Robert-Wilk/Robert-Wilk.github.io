import { Link } from 'react-router-dom';
import styled from 'styled-components';
import placeholder from '../../../assests/images/placeholder.png';

const GalleryItemStyles = styled.div`
  .galleryItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--black);
    img {
      height: 100%;
    }
  }
  .galleryItem__info {
    margin-top: 1rem;
    padding: 1rem;
  }
  .galleryItem__title {
    color: var(--red-light);
    font-size: 2.2rem;
    font-family: 'Oswald';
    font-weight: 400;
  }
  .galleryItem__desc {
    font-size: 1.6rem;
    font-family: 'Roboto';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .galleryItem__img {
      height: 350px;
    }
  }
`;

export default function GalleryItem({
    key = 0,
    index = 0,
    img = placeholder,
    title = 'Project Name',
    desc = 'description',
}) {

  return (
    <GalleryItemStyles>
      <Link key={key} to={{pathname: `/Portfolio/${index}`}} className="galleryItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="galleryItem__info">
        <Link key={key} to={{pathname: `/Portfolio/${index}`}}>
          <h3 className="galleryItem__title">{title}</h3>
        </Link>
        <p className="galleryItem__desc">{desc}</p>
      </div>
    </GalleryItemStyles>
  );
}