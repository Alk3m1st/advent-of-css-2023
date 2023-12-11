import { Icon } from "./Icon";

export const Avatar = () => {
  return (
    <div className="rounded-full bg-spanishGreen w-12 h-12 text-center border-4 border-white relative">
      <span className="text-white text-xl font-bold">A</span>
      <i className="absolute bottom-0 right-0 bg-spanishGreen rounded-full border-2 border-white">
        <Icon id="check" color="white" size={16} />
      </i>
    </div>
  );
};
