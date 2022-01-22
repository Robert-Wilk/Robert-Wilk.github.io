import styled from 'styled-components';

const PStyle = styled.div`
    max-width: 500px;
    margin: 0 auto;
    font-size: 1.8rem;
    line-height: 1.3em;
`;

export default function PText({ children }) {
    return (
        <PStyle className="para">
            <p>{children}</p>
        </PStyle>
    );
}