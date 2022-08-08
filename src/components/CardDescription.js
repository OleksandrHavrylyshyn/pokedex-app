import { StyledCardDescription } from "./styles/CardDescription.styled";

export default function CardDescription({ description }) {
  let types = "";
  description.types.forEach((type) => (types += type.type.name + " "));
  return (
    <StyledCardDescription>
      <img alt={description.name} src={description.sprites.front_default}></img>
      <h2>
        {description.name} #{description.id}
      </h2>
      <table>
        <tbody>
          <tr>
            <td>Type</td>
            <td>{types}</td>
          </tr>
          <tr>
            <td>Attack</td>
            <td>{description.stats[1].base_stat}</td>
          </tr>
          <tr>
            <td>Defence</td>
            <td>{description.stats[2].base_stat}</td>
          </tr>
          <tr>
            <td>HP</td>
            <td>{description.stats[0].base_stat}</td>
          </tr>
          <tr>
            <td>SP Attack</td>
            <td>{description.stats[3].base_stat}</td>
          </tr>
          <tr>
            <td>SP Defence</td>
            <td>{description.stats[4].base_stat}</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>{description.stats[5].base_stat}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{description.weight}</td>
          </tr>
          <tr>
            <td>Total Moves</td>
            <td>{description.moves.length}</td>
          </tr>
        </tbody>
      </table>
    </StyledCardDescription>
  );
}
