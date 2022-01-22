import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const BackStyles = styled.div`
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--white);
    font-size: 1.8rem;
    text-align: center;
    margin: 0 auto;
    display: flex;
    margin-top: 2.2rem;
    cursor: pointer;
`

export default function ScrollToTop() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <BackStyles>
        <div className="back-to-top" onClick={scrollToTop}>
          <p>Back to top</p>
        </div>
    </BackStyles>
  );
}