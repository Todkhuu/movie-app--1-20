import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { GenreType } from "@/utils/types";

type types = {
  dataGenre: GenreType;
};

export function ToggleGroupDemo({ dataGenre }: types) {
  React.useEffect(() => {
    const getDatas = async () => {
      const data = await getData(
        `/discover/movie?language=en&with_genres=${genreId}&page=${1}`
      );
      setData(data);
      console.log(data);
    };
    getDatas();
  }, []);

  React.useEffect(() => {
    const getDatass = async () => {
      const responses = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?language=en`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      const dataGenre = await responses.json();
      setDataGenre(dataGenre);
      console.log(dataGenre);
    };
    getDatass();
  }, []);
  return (
    <ToggleGroup type="multiple" className="flex flex-wrap ">
      {dataGenre
        // .filter((genre: GenreType) => genre.id.toString() == genreId)
        .map((genre: GenreType) => (
          <ToggleGroupItem value={genre.name} aria-label="Toggle bold">
            <p>{genre.name}</p>
          </ToggleGroupItem>
        ))}
    </ToggleGroup>
  );
}
