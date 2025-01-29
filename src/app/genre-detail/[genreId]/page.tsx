import ToggleGroupDemo from "../page";

const GenrePage = async ({
  params,
}: {
  params: Promise<{ genreId: string }>;
}) => {
  const { genreId } = await params;
  return (
    <div className="max-w-[1280px] m-auto">
      <h2 className="text-[30px] font-semibold mt-[52px] mb-[32px]">
        Search filter
      </h2>
      <ToggleGroupDemo />
    </div>
  );
};
export default GenrePage;
