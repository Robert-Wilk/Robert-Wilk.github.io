import styled from "styled-components";
import PText from "../../utility/PText";
import { MdDesktopMac } from "react-icons/md";

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
  @media only screen and (max-width: 768px) {
    .detail {
      font-size: 1.4rem;
    }
  }
`;
export default function InterestSectionItem({
  title = "Title",
  desc = "description",
  icon = <MdDesktopMac />,
}) {
  return (
    <ItemStyles>
      <div className="focusItem__icon">{icon}</div>
      <div className="focusItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}
