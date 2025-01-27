"use client";
import { Input } from "@/components/ui/input";

export function InputDemo() {
  return (
    <div>
      <Input className="w-[379px]" type="text" placeholder="Search..." />
      <div className="mt-4"></div>
    </div>
  );
}
