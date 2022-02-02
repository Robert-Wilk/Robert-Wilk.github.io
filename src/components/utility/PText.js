import styled from "styled-components";

const PStyle = styled.div`
  max-width: ${(props) => props.maxWidth ? "500px" : "none"};
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;
`;

export default function PText({ 
  children, 
  maxWidth=true 
}) {
  return (
    <PStyle className="para" maxWidth={maxWidth}>
      <p>{children}</p>
    </PStyle>
  );
}
