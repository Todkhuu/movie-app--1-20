import { Suspense } from "react";
import SearchPages from "./_components/SearchPage";

const SearchPage = () => {
  return (
    <Suspense>
      <SearchPages />
    </Suspense>
  );
};
export default SearchPage;
