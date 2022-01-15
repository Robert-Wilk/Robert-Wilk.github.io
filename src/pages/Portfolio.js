import styled from 'styled-components';
import { MdSearch } from '../proxy/react-icons-proxy';
import SectionTitle from '../components/utility/SectionTitle';
import GalleryItem from '../components/home-page/portfolio-preview-section/GalleryItem';
import works from '../assests/data/works';
import {useEffect, useState} from 'react';

const PortfolioStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
    border: 3px solid var(--red-light);
    border-radius: 12px;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    padding-right: 1rem;
    color: var(--black);
    border-radius: 12px;
    outline: none;
    border: none;
    font-family: "Roboto";
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--black);
  }
  .section-title p {
    color: var(--red-light);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
    .section-title p {
      font-size: 1.6rem;
    }
  }
`;

export default function Portfolio() {
    const [searchText, setSearchText] = useState('');
    const [projectData, setProjectData] = useState(works);

    let length = projectData.length;

    useEffect(() => {
        if (searchText === '') return;

        // Get projects to display from search text
        const newData = works.filter((item) => (
                item.name.toLowerCase().match(searchText.toLowerCase())
            ))
        setProjectData(newData);

        // get the length of the new list
        length = newData.length;
    }, [searchText]);

    function handleChange(e) {
        e.preventDefault();
        setSearchText(e.target.value);
    }

    return (
        <PortfolioStyle>
            <div className="container">
                <SectionTitle heading="Portfolio" subheading="A collection of projects I have worked on!" />
                <div className="projects__searchBar">
                    <form>
                        <input
                            type="text"
                            value={searchText}
                            onChange={handleChange}
                            placeholder="Project Name"
                            maxLength="20"
                        />
                        <MdSearch className="searchIcon"/>
                    </form>
                </div>
                <div className="projects__allItems">
                    {projectData.map((item) =>(
                        <GalleryItem
                          key={item.id}
                          index={item.id}
                          title={item.name}
                          desc={item.flavorText}
                          img={item.img}
                        />
                    ))}
                </div>
            </div>
        </PortfolioStyle>
    );
}