import { TOKEN } from "./constant";

export const getDatas = async (movieId: string) => {
  const response = await fetch(`https://api.themoviedb.org/3${movieId}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
  // console.log("gg", datas);
  // console.log({ response });
};
