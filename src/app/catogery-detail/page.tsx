import { Suspense } from "react";
import CategoryPages from "./_components/CategoryPage";

const CategoryPage = () => {
  return (
    <Suspense>
      <CategoryPages />
    </Suspense>
  );
};
export default CategoryPage;
