import styled from "styled-components";
import SectionTitle from "../../components/utility/SectionTitle";
import PText from "../../components/utility/PText";
import githubLogo from "../../assests/images/visualizations/GithubViz/githubLogo.png";
import GlanceSectionItem from "../../components/misc/GlanceSectionItem";
import headDisplay from "../../assests/images/visualizations/GithubViz/headDisplay.png";
import repos from "../../assests/images/visualizations/GithubViz/repos.png";
import prs from "../../assests/images/visualizations/GithubViz/prs.png";
import issues from "../../assests/images/visualizations/GithubViz/issues.png";
import TextLeftImgRight from "../../components/utility/TextLeftImgRight";
import TextRightImgLeft from "../../components/utility/TextRightImgLeft";
import cleaning1 from "../../assests/images/visualizations/GithubViz/cleaning1.png"
import cleaning2 from "../../assests/images/visualizations/GithubViz/cleaning2.png"
import graph1 from "../../assests/images/visualizations/GithubViz/graph1.png"
import graph2 from "../../assests/images/visualizations/GithubViz/graph2.png"
import graph3 from "../../assests/images/visualizations/GithubViz/graph3.png"
import graph4 from "../../assests/images/visualizations/GithubViz/graph4.png"
import graph5 from "../../assests/images/visualizations/GithubViz/graph5.png"
import relatives from "../../assests/images/visualizations/GithubViz/relatives.png"

const VizStyles = styled.div`
  padding: 10rem 0 10rem 0;
  .section-title p {
    color: var(--red-light);
  }
  .title {
    .section-title {
      text-align: center;
    }
  }
  .glance  {
    padding: 10rem 0 0 0;
    .section-title {
      text-align: center;
    }
    .focus__allItems {
      display: flex;
      gap: 10rem;
      justify-content: space-between;
      margin-top: 5rem;
    }
  }
  .code-snippet {
      padding-top: 3rem;
      height: 400px;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      object-fit: contain;
  }
  .visualizations {
    padding-top: 10rem;
    .para {
      padding: 3rem 0 3rem 0;
    }
  }
  .graph {
    padding-top: 3rem;
  }
  .conclusion {
    padding-top: 10rem;
    .para {
      padding: 3rem 0 3rem 0;
    }
    li {
      a {
        margin: 0 auto;
        font-size: 1.8rem;
        line-height: 1.3em;
        color: var(--black);
        text-decoration: underline;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
    }
    .focus__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function GithubViz() {

  return (
    <VizStyles>
        <div className="container">
            <div className="title">
                <SectionTitle heading="Github Programming Languages" subheading="A visualization on programming languages on Github"/>
            </div>
                <TextLeftImgRight text={
                <PText>
                  I have always wondered one thing since starting in computer science: 
                  What is the most commonly used programming language amoung developers?
                  <br />
                  <br />
                  Github is a platform used by developers for version control and team collaboration
                  on software projects. <a href="https://github.com/" target="_blank">According to Github</a>, 
                  they host 200+ million repositories and have
                  over 73 million developers. Because of Github's size, we can use data from their service
                  to find out what is the most used language. This dataset shows us the number of repositories
                  associated with a language, issue counts for a given language, year, and quarter, in addition to 
                  pull requests (prs) for a given language, year, and quarter.
                </PText>
                }
                  img={githubLogo} 
                  alt={"Github Logo"}
                  heading="The Problem"
                />
              <div className="glance">
                  <SectionTitle
                          className="glance__section-title"
                          subheading=""
                          heading="The data at a glance"
                  />
                  <img className="code-snippet" src={headDisplay} alt="code snippet 1" />
                  <div className="focus__allItems">
                      <GlanceSectionItem
                        title="Issues.csv"
                        img={issues}
                      />
                      <GlanceSectionItem
                        title="Repos.csv"
                        img={repos}
                      />
                      <GlanceSectionItem
                        title="PRS.csv"
                        desc=""
                        icon={""}
                        img={prs}
                      />
                  </div>
              </div>
              <TextLeftImgRight text={
                <PText>
                  Before creating visualizations, we need to sort our data, check for null values, drop duplicates, and rename columns. 
                  These steps are necessary for organizing the data and cleaning it for proper visualization.
                </PText>
                }
                  img={cleaning1} 
                  alt="Data Cleaning"
                  heading="Data Cleaning"
                  outline={false}
              />
              <TextRightImgLeft text={
                <PText>
                  From the look at the data above, there are two datasets that could be combined: Pull Requests and Issues. 
                  Let's combine the files to cut down on the amount of files we are working with. 
                  However, the datasets are different sizes so we will have to do some pre-processing.
                  <br />
                  <br />
                  From combining the average we got 1019 null values which equates to 26% of our data.
                  There are many problems associated with this. I will explain why I decided to drop the null values.
                </PText>
                }
                  img={cleaning2} 
                  alt="Data Cleaning"
                  heading="Data Cleaning"
                  outline={false}
              />
              <PText maxWidth={false}>
                We see that each language has a data point for year, quarter, and prs/issue count. 
                We could take the average over the course of a given year and backfill the null values, 
                but some languages lack the data to create an average which would still require them to be dropped. 
                A second issue is that the 2 datasets that we combined to get this dataset are different sizes. 
                This would mean that some data points would again not have the data to calculate an average. 
                The final issue I found is that the datasets have different data points.
                <br />
                <br />
                For example:
                <br />
                Dataset one has a value for 2011 q1 while the dataset two does not. 
                Dataset two has a value for 2012 q3 while dataset one does not.
                <br />
                <br />
                For all of these reasons, backfilling would be a challenge.
              </PText>
              <div className="visualizations">
                <SectionTitle
                          subheading=""
                          heading="Visualizations"
                />
                <PText maxWidth={false}>
                  After cleaning our data, we can now visualize it! 
                  Using the datasets we have processed, we can find the most used programming languages on Github.
                  In this dataset, there are 453 unique programming languages. 
                  Because 453 languages would be hard to display, I will display the top 10 in each category for the visualizations.
                  <br />
                  <br />
                  The first visualization is the top ten programming languages on Github by repository count. 
                </PText>
                <img src={graph1} alt="top ten programming languages on Github by repository count"/>
                <PText maxWidth={false}>
                  This is really suprising to me. 
                  I am suprising that C++ and Python are not higher on the list. 
                  On the other hand, it is not suprising that JavaScript, HTML, and CSS are as high 
                  because they the foundation of all web/front-end development.
                  <br />
                  <br />
                  Let's see what programming language has the highest issue count and pull request count.
                  High issue and pull request counts show the level of activity associated with a given language.
                  If a language is actively used, it will likely have a high amount of issues and pull requests.
                  Besides, it is also a fun statistic to see what languages causes the highest amount of issues!
                </PText>
                <div className="graph">
                  <img src={graph2} alt="top ten programming languages on Github with highest issue count"/>
                </div>
                <div className="graph">
                  <img src={graph3} alt="top ten programming languages on Github with highest pull request count"/>
                </div>
                <PText maxWidth={false}>
                  These charts cleary have bias towards how often the programming language is used versus its pull request/issue count.
                  If something is used more often, then there will be more interactions for it. This is the bias the charts show.
                  Instead, let's look at the issue and pull request count relative to the amount of repository a given language has.
                  This will put into scale what languages have many issues and pull requests.
                </PText>
                <TextLeftImgRight text={
                  <PText>
                    Before getting the relative counts, I resorted the data as a precaution.
                    The next step was to get the data in the issues and prs datasets to look like the repos dataset. 
                    After, I merged the repos dataset with the prs and issue datasets into new datasets.
                    Finally, I created new columns in each dataset, divided the number pull requests or issues by the number of repositories,
                    and graphed.
                  </PText>
                  }
                    img={relatives} 
                    alt="Data Cleaning"
                    heading="Ratio the Data"
                    outline={false}
                />
                <div className="graph">
                  <img src={graph4} alt="top ten programming languages on Github with highest relative issue count"/>
                </div>
                <div className="graph">
                  <img src={graph5} alt="top ten programming languages on Github with highest relative pull request count"/>
                </div>
              </div>
              <div className="conclusion">
                <SectionTitle
                          subheading=""
                          heading="Conclusion"
                />
                <PText maxWidth={false}>
                  According to what we have seen, we can see that JavaScript is by far the most used programming language by developers on Github. 
                  Because JavaScript is used heavily in web development, it makes sense why there is so many repositories for it. 
                  The internet we see and all of its pages require web development. Node, Express, React, and Vue are just a fraction of 
                  the many frameworks used in web development that use JavaScript.
                  <br />
                  <br />
                  While looking at the ratios between issues and number of repositories, we see a completely different story. 
                  According to Google, YAML is a human-readable data-serialization language and commonly used for configuration files. 
                  YAML is also pretty similar to JSON and XML. 
                  YAML likely has many pull requests and issues because it is used in many projects alongside other languages.
                  <br />
                  <br />
                  I hope my visualization help answer the question of the most used language by developers. 
                  Below are my sources and my code:
                </PText>
                <ul>
                  <li>
                    <a href="https://www.google.com/search?q=YAML&rlz=1C1CHBF_enUS933US933&oq=YAML&aqs=chrome.0.69i59.646j0j7&sourceid=chrome&ie=UTF-8">1. What is YAML</a>
                  </li>
                  <li>
                    <a href="https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf">2. Pandas Cheat Sheet</a>
                  </li>
                  <li>
                    <a href="https://seaborn.pydata.org/examples/palette_choices.html">3. Seaborn Charts Tutorial</a>
                  </li>
                  <li>
                    <a href="https://www.kaggle.com/isaacwen/github-programming-languages-data">4. Dataset</a>
                  </li>
                  <li>
                    <a href="https://colab.research.google.com/drive/1Cno1o_pDVxbnmx0LUiXHSOtg36rvF62_?usp=sharing">5. My Code</a>
                  </li>
                </ul>
              </div>
        </div>
    </VizStyles>
  );
}
