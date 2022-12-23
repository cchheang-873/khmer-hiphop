import { useEffect, useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import { ArtistCard } from "../../components/ArtistCard/ArtistCard";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { ArtistProps } from "../../queries/Artists";
import "./HomePage.scss";

export const HomePage = (): JSX.Element => {
  const [artists, setArtists] = useState<ArtistProps[]>([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // getArtists().then((r) => {
    //   setArtists(r.map((res) => res.data() as ArtistProps));
    //   setLoading(false);
    // });

    // test data
    setArtists(
      ["Changster", "Vannda", "Ruthko", "Khmer1Jivit", "Polarix"].map(
        (artist) => {
          return {
            name: artist,
            profilePic: `/assets/${artist.toLowerCase()}.jpg`,
            rating: 1,
            followers: 1000,
          };
        }
      )
    );

    // reset loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <SearchInput setFilter={setFilter} />
      <div className={"Artists-container"}>
        {!loading ? (
          artists
            .filter((artist) =>
              artist.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((artist) => {
              return <ArtistCard key={artist.name} artist={artist} />;
            })
        ) : (
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        )}
      </div>
    </>
  );
};
