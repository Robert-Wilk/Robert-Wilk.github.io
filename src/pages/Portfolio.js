import styled from "styled-components";
import { MdSearch, BsGrid3X3Gap, BsCardList } from "../proxy/react-icons-proxy";
import SectionTitle from "../components/utility/SectionTitle";
import GalleryItem from "../components/home-page/portfolio-preview-section/GalleryItem";
import GalleryItemAlt from "../components/home-page/portfolio-preview-section/GalleryItemAlt";
import works from "../assests/data/works";
import { useEffect, useState } from "react";

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
    border: 3px solid var(--red-light);
    border-radius: 12px;
    display: inline-block;
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
    width: 2.5rem;
    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--black);
  }
  .section-title p {
    color: var(--red-light);
  }
  .format-toggle {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    text-align: right;
  }
  .toggle-button {
    width: 4em;
    font-size: 10px;
  }
  .projects__allItems_alt {
    display: grid;
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__header {
    margin: 5rem 1rem 0 1rem;
    display: flex;
    justify-content: space-between;
    gap: 5rem;
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
  @media only screen and (max-width: 640px) {
    .projects__header {
      flex-direction: column;
      gap: 0;
    }
    .format-toggle {
      text-align: center;
      margin-top: 1rem;
      justify-content: center;
    }
  }
`;

export default function Portfolio() {
  const [searchText, setSearchText] = useState("");
  const [projectData, setProjectData] = useState(works);
  const [cssMode, setCssMode] = useState(true);

  let length = projectData.length;

  useEffect(() => {
    if (searchText === "") return;

    // Get projects to display from search text
    const newData = works.filter((item) =>
      item.name.toLowerCase().match(searchText.toLowerCase())
    );
    setProjectData(newData);

    // get the length of the new list
    length = newData.length;
  }, [searchText]);

  function handleChange(e) {
    e.preventDefault();
    setSearchText(e.target.value);
  }
  // Change between css modes (card view and list view)
  function cardView() {
    setCssMode(true);
    console.log(cssMode);
  }
  function listView() {
    setCssMode(false);
    console.log(cssMode);
  }

  return (
    <PortfolioStyle>
      <div className="container">
        <SectionTitle
          heading="Portfolio"
          subheading="A collection of projects I have worked on!"
        />
        <div className="projects__header">
          <div className="projects__searchBar">
            <form>
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Project Name"
                maxLength="20"
              />
              <MdSearch className="searchIcon" />
            </form>
          </div>
          <div className="format-toggle">
            <BsCardList className="toggle-button" onClick={listView} />
            <BsGrid3X3Gap className="toggle-button" onClick={cardView} />
          </div>
        </div>
        <div
          className={cssMode ? "projects__allItems" : "projects__allItems_alt"}
        >
          {cssMode === true &&
            projectData.map((item) => (
              <GalleryItem
                key={item.id}
                index={item.id}
                title={item.name}
                desc={item.flavorText}
                img={item.img}
              />
            ))}
          {cssMode === false &&
            projectData.map((item) => (
              <GalleryItemAlt
                key={item.id}
                index={item.id}
                title={item.name}
                desc={item.flavorText}
                date={item.date}
              />
            ))}
        </div>
      </div>
    </PortfolioStyle>
  );
}
