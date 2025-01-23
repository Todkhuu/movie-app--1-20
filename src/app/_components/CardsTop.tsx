import { FaArrowRight } from "react-icons/fa6";
type CardsProps = {
  text: string;
};
export const CardsTop = ({ text }: CardsProps) => {
  return (
    <div className="w-[100%] flex justify-between items-center my-[32px]">
      <h2 className="text-[24px] font-semibold">{text}</h2>
      <p className="text-[14px] flex items-center gap-[8px] hover:underline">
        See more <FaArrowRight className="w-[14px] h-[14px]" />
      </p>
    </div>
  );
};
