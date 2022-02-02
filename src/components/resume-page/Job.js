import styled from "styled-components";

const JobStyles = styled.div`
  .container {
    margin: 0;
    padding-top: 0;
    max-width: none;
    width: 100%;
  }
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1.8rem;
  }
  ul,
  li {
    list-style: square;
    margin-left: 1rem;
    font-size: 1.8rem;
  }
  .job__header {
    display: flex;
    align-items: left;
    justify-content: center;
    svg {
      margin-left: 2rem;
      width: 6rem;
      height: auto;
    }
  }
  .job__content {
    display: flex;
    gap: 5rem;
    justify-content: space-between;
  }
  .job__left {
    text-align: left;
  }
  .jobInfo__top {
    p {
      color: var(--red-light);
    }
  }
  .jobInfo__bottom {
  }
  .job__right {
    text-align: right;
  }
  .padding {
    padding-bottom: 1rem;
  }
  .paddingMore {
    padding-bottom: 0em;
  }
  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
    }
    .job__header {
      svg {
        width: 4rem;
        height: auto;
      }
    }
    .jobInfo__top {
      padding-bottom: 1rem;
    }
    .job__content {
      flex-direction: column;
      gap: 0;
    }
    .job__right {
      text-align: left;
    }
    .padding {
      padding-bottom: 1rem;
    }
  }
`;
export default function Job({
  title = "job title",
  company = "company",
  location = "Charlote, NC",
  time = "Dec. 31st 2021 - Jan. 1st 2022",
  responsibilities = [1, 2],
}) {
  return (
    <JobStyles>
      <div className="container">
        <div className="job__content">
          <div className="job__left">
            <div className="jobInfo__top padding">
              <h1>{title}</h1>
              <p>{company}</p>
            </div>
            <div className="schoolInfo__bottom paddingMore">
              <ul>
                {responsibilities.map((item) => (
                  <li className="padding">
                    <p>{item}</p>
                    {console.log(item)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="job__right">
            <p className="padding">{location}</p>
            <p>{time}</p>
          </div>
        </div>
      </div>
    </JobStyles>
  );
}
