import { TOKEN } from "@/utils/constant";
import { getData } from "@/utils/data";

const categoryId = async ({
  params: { categoryId },
}: {
  params: { categoryId: string };
}) => {
  const link = `/movie/${categoryId}?language=en-US&page=1`;
  const data = await getData(link);
  console.log(data);

  console.log(categoryId);
  return <div className="max-w-[1280px] m-auto">asd</div>;
};
export default categoryId;
