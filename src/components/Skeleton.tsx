import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonSlider() {
  return (
    <div className="w-[90%] m-auto">
      <Skeleton className="h-[600px] w-[100%] rounded-xl" />
    </div>
  );
}
