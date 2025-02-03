import { Suspense } from "react";
import SimilarPages from "./_components/SimilarPage";

const SimilarPage = () => {
  return (
    <Suspense>
      <SimilarPages />
    </Suspense>
  );
};
export default SimilarPage;
