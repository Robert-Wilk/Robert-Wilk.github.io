import styled from "styled-components";
import placeholder  from "../../assests/images/placeholder.png";

const ItemStyles = styled.div`
  text-align: center;
  .focusItem__icon {
    color: var(--red-light);
    svg {
      width: 3rem;
    }
  }
  .focusItem__title {
    font-size: 2.5rem;
    font-family: "roboto";
    font-weight: bold;
  }
  .para {
    margin-top: 2rem;
  }
  img {
      object-fit: contain;
      width: 80%;
      height: 80%;
  }
  @media only screen and (max-width: 768px) {
    .detail {
      font-size: 1.4rem;
    }
  }
`;
export default function GlanceSectionItem({
  title = "Title",
  img = placeholder,
  alt = "alt text",
}) {
  return (
    <ItemStyles>
      <div className="focusItem__title">{title}</div>
      <img src={img} alt={alt}/>
    </ItemStyles>
  );
}