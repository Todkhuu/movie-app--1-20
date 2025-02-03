import { Suspense } from "react";
import ToggleGroupDemos from "./_components/GenrePage";

export default function ToggleGroupDemo() {
  return (
    <Suspense>
      <ToggleGroupDemos />
    </Suspense>
  );
}
