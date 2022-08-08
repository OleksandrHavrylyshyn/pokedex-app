import { StyledCard } from "./styles/Card.styled";
import { TypeText } from "./styles/TypeText.styled";

export default function Card({handleClick, id, name, sprite, types }) {
  return (
    <StyledCard onClick={() => handleClick(id)}>
      <img alt="" src={sprite} />
      <h3>{name}</h3>
      <div className="types">
        {types.map((type, index) => {
          return <TypeText key={index} type={type.type.name}>{type.type.name}</TypeText>
        })}
      </div>
    </StyledCard>
  );
}
