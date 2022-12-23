import { ArtistProps } from "../../queries/Artists";
import "./ArtistCard.scss";

export const ArtistCard = (props: { artist: ArtistProps }) => {
  const { artist } = props;

  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const getRating = () => {
    const ratedStar = <i className={"material-icons rated-star"}>star_rate</i>;
    const unratedStar = <i className={"material-icons"}>star_rate</i>;

    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i > artist.rating) {
        stars.push(unratedStar);
      } else {
        stars.push(ratedStar);
      }
    }

    return <>{stars.map((star) => star)}</>;
  };

  return (
    <div
      className={"ArtistCard-container"}
      key={artist.name}
      title={`Read more about ${artist.name}`}
    >
      <img
        className={"ArtistCard-image"}
        src={artist.profilePic}
        alt={artist.name}
      />
      <h4>{artist.name}</h4>
      <div>{getRating()}</div>
      <p>
        <i className={"material-icons"}>group</i>{" "}
        {numberWithCommas(artist.followers)}
      </p>
    </div>
  );
};
