import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import GalleryItem from './GalleryItem';
import SectionTitle from '../../utility/SectionTitle';
import 'swiper/swiper-bundle.min.css';
import works from '../../../assests/data/works.js';
import styled from 'styled-components';

// install Swiper modules
SwiperCore.use([Navigation]);

const PortfolioPreviewStyle = styled.div`
    padding: 10rem 0;
    .projects__allItems {
        display: flex;
        gap: 3rem;
    }
    .swiper-container {
        padding-top: 8rem;
        max-width: 100%;
    }
    .swiper-button-prev,
    .swiper-button-next {
        position: absolute;
        height: 50px;
        width: 50px;
        background: var(--red-light);
        z-index: 10;
        right: 60px;
        left: auto;
        top: 0;
        transform: translateY(50%);
        color: var(--white);
        border-radius: 8px;
    }
    .swiper-button-next {
        right: 0;
    }
    .swiper-button-prev::after,
    .swiper-button-next::after {
        font-size: 2rem;
    }
    @media only screen and (max-width: 768px) {
        .projects__allItems {
            flex-direction: column;
            max-width: 400px;
            margin: 0 auto;
            margin-top: 7rem;
            gap: 5rem;
            .projectItem__img {
                width: 100%;
            }
        }
    }
`;

export default function PortfolioPreview() {
    return (
        <PortfolioPreviewStyle>
            <div className="container">
                <SectionTitle className="section-title" heading="Recent Work" subheading=""/>
                <div className="projects__allItems">
                    <Swiper spaceBetween={30} slidesPerView={1} navigation
                        breakpoints={{
                          640: {
                            slidesPerView: 1,
                          },
                          768: {
                            slidesPerView: 2,
                          },
                          1200: {
                            slidesPerView: 3,
                          },
                        }}>
                        {works.map((project, index) => {
                            if (index >= 5) return;
                            return (
                                <SwiperSlide key={project.id}>
                                    <GalleryItem title={project.name} desc={project.flavorText} img={project.img} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </PortfolioPreviewStyle>
    );
}