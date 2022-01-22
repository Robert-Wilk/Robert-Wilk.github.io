import { Link } from 'react-router-dom';
import styled from 'styled-components';
import placeholder from '../../../assests/images/placeholder.png';

const GalleryItemStyles = styled.div`
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
  /* ALT STYLE FOR LIST VIEW */
  .galleryItem__date {
    font-size: 1.6rem;
    font-family: 'Roboto';
    margin-top: 1rem;
    text-align: right;  
  }
  .galleryItem__info_alt {
    gap: 5rem;
    justify-content: space-between;
    padding: 1rem;
    margin: 1rem 1rem 2rem 1rem;
    border: 3px solid var(--red-light);
    border-radius: 12px;
    color: black;
  }
  @media only screen and (max-width: 768px) {
    .galleryItem__info_alt {
      flex-direction: column;
      gap: 0;
    }
  }
`;

export default function GalleryItemAlt({
    key = 0,
    index = 0,
    title = 'Project Name',
    desc = 'description',
    date = ''
}) {

  return (
    <GalleryItemStyles>
      <Link key={key} to={{pathname: `/Portfolio/${index}`}}>
      <div className={"galleryItem__info_alt"}>
          <h3 className="galleryItem__title">{title}</h3>
          <p className="galleryItem__desc">{desc}</p>
          <p className="galleryItem__date">{date}</p>
      </div>
      </Link>
    </GalleryItemStyles>
  );
}