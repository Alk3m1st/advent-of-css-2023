import { Icon } from "./Icon";

export const indicatorStatuses = ["accepted", "maybe", "declined"];

interface IndicatorProps {
  status: (typeof indicatorStatuses)[number];
}

export const Indicator = ({ status }: IndicatorProps) => {
  return (
    <>
      {status === "accepted" && (
        <div className="indicator border-white bg-spanishGreen text-white">
          <Icon id="check" size={16} />
        </div>
      )}
      {status === "maybe" && (
        <div className="indicator border-white bg-supernova text-black">
          <Icon id="question" size={16} />
        </div>
      )}
      {status === "declined" && (
        <div className="indicator border-white bg-orangeRed text-white">
          <Icon id="minus" size={16} />
        </div>
      )}
    </>
  );
};
