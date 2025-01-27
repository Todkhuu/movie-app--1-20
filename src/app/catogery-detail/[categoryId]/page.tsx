import { Cards } from "@/app/_components/Cards";
import { getData } from "@/utils/data";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;
  const data = await getData(`/movie/${categoryId}?language=en-US&page=1`);
  console.log(data);
  return (
    <div className="max-w-[1280px] m-auto">
      <h2 className="text-[30px] font-semibold mt-[52px] mb-[32px]">
        {categoryId}
      </h2>
      <Cards data={data.results} />
    </div>
  );
};
export default CategoryPage;
