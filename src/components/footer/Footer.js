import styled from 'styled-components';
import FooterCol from './FooterCol';
import BackToTop from '../scroll/BackToTop';
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from '../../proxy/react-icons-proxy';
import { IconContext } from 'react-icons';

const FooterStyle = styled.div`
    background-color: var(--red-light);
    padding-top: 5rem;
    padding-bottom: 2rem;
    color: var(--white);
    .container {
        display: flex;
        gap: 3rem;
    }
    .contain-center {
        display: flex;
    }
    .footer__col {
        flex: 1;
        text-align: center;
        .social {
            margin-bottom: 1rem;
            display: flex;
            justify-content: space-evenly;
            a {
                font-size: 1.6rem;
                letter-spacing: 5px;
                margin-bottom: 2rem;
                :link, :visited {
                    color: var(--white);
                }
                svg {
                    height: 3rem;
                    width: auto;
                }
            }
        }
    }
    @media only screen and (max-width: 768px) {
        .container {
            flex-direction: column;
            gap: 0rem;
            & > div {
                margin-top: 5rem;
            }
        }
        .footer__col {
            .social {
                a {
                    svg {
                        height: 5rem;
                        width: auto;
                    }
                }
            }
        }
    }
`;

export default function Footer() {
    return (
        <FooterStyle>
            <div className="container">
                <div className="footer__col">
                    <FooterCol heading="Links" links={
                        [
                            {
                                type: "Link",
                                title: "Home",
                                path: "/",
                            },
                            {
                                type: "Link",
                                title: "About",
                                path: "/About",
                            },
                            {
                                type: "Link",
                                title: "Resume",
                                path: "/Resume",
                            },
                            {
                                type: "Link",
                                title: "Portfolio",
                                path: "/Portfolio",
                            }
                        ]
                    }/>
                </div>
                <div className="footer__col">
                    <FooterCol heading="Contact Info"
                    links={
                        [
                            {
                                title: "rwilk@uncc.edu",
                                path: "mailto:rwilk@uncc.edu"
                            },
                        ]
                    }/>
                </div>
                <div className="footer__col">
                    <FooterCol heading="Social Media"
                    links={ [ ] }/>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/robertmwilk" target="_blank" rel="noreferrer">
                            <IconContext.Provider value={{ className: 'react-icons'}}>
                                <AiFillLinkedin />
                            </IconContext.Provider>
                        </a>
                        <a href="https://github.com/Robert-Wilk" target="_blank" rel="noreferrer">
                            <IconContext.Provider value={{ className: 'react-icons'}}>
                                <AiFillGithub />
                            </IconContext.Provider>
                        </a>
                        <a href="https://twitter.com/robert_wilk_" target="_blank" rel="noreferrer">
                            <IconContext.Provider value={{ className: 'react-icons'}}>
                                <AiFillTwitterCircle />
                            </IconContext.Provider>
                        </a>
                    </div>
                </div>
            </div>
            <div className="contain-center">
                <BackToTop />
            </div>
        </FooterStyle>
    );
}