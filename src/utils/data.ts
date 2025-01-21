import { TOKEN } from "./constant";

export const getData = async (url: string) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${url}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  const datas = await response.json();
  const data = datas.results;
  return data;
  // console.log({ response });
  // console.log("gg", data.results);
};

// const addNumber = (a:number, b:number)=>{
//     return a + b
// }

// const value = addNumber(4, 6)
