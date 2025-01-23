import { TOKEN } from "./constant";

export const getData = async (movieId: string) => {
  const response = await fetch(`https://api.themoviedb.org/3${movieId}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  const datas = await response.json();
  const data = datas.results;
  return data;
  // console.log("gg", datas);
  // console.log({ response });
};

// const addNumber = (a:number, b:number)=>{
//     return a + b
// }

// const value = addNumber(4, 6)
