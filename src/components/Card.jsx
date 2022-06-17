import { StyledCard } from "./styles/Card.styled";

const Card = ({ item: { title, body, image } }) => {
  return (
    <StyledCard>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={image} alt={title} />
      </div>
    </StyledCard>
  );
};
export default Card;
