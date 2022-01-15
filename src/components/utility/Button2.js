import styled from 'styled-components';

export default function Button2(
    { btnLink="", btnText="Button Text", outline=false, btnHasLink=false}) {
    const ButtonStyle = styled.div`
        margin-top: 2rem;
        .button {
            display: ${(props) =>
                props.btnHasLink ? 'inline-block' : 'none'};
            font-size: 2.2rem;
            background-color: ${(props) =>
                props.outline ? 'transparent' : 'var(--red-light)'};
            padding: 0.7em 2em;
            border-radius: 8px;
            border: 2px solid var(--red-light);
            border: ${(props) =>
                props.outline ? '2px solid var(--red-light)' : '2px solid var(--red-light)'};
            color: ${(props) =>
                props.outline ? 'var(--red-light)' : 'var(--white)'};
        }
        @media only screen and (max-width: 768px) {
            .button {
                font-size: 1.8rem;
            }
        }
    `;
    return (
        <ButtonStyle outline={outline} btnHasLink={btnHasLink}>
            <a className="button" href={btnLink} target="_blank" rel="noreferrer">
                {btnText}
            </a>
        </ButtonStyle>
    );
}