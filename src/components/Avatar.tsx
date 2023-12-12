// import AvatarImage01 from "../assets/avatars/avatar-01.png";
// import AvatarImage02 from "../assets/avatars/avatar-02.png";
import SantaImage from "../assets/avatars/santa-hat.png";
import { Icon, iconIds } from "./Icon";
import { Indicator, indicatorStatuses } from "./Indicator";

interface AvatarProps {
  avatar?: string;
  alt?: string;
  letter?: string;
  icon?: (typeof iconIds)[number];
  isSantaHatShowing?: boolean;
  indicator?: (typeof indicatorStatuses)[number];
}

export const Avatar = ({
  avatar,
  alt,
  icon,
  isSantaHatShowing,
  indicator,
  letter,
}: AvatarProps) => {
  return (
    <div className="relative inline-block">
      {avatar && (
        <img
          src={avatar}
          alt={alt}
          className="h-18 w-18 rounded-full object-cover border-white border-avatar"
        />
      )}

      {letter && !avatar && !icon && (
        <div className="center h-18 w-18 rounded-full border-white border-avatar bg-spanishGreen text-2xl font-bold uppercase text-white">
          {letter}
        </div>
      )}

      {icon && !avatar && !letter && (
        <div className="center h-18 w-18 rounded-full border-vistaBlue border-avatar bg-spanishGreen text-2xl font-bold uppercase text-white">
          <Icon id={icon} color="white" size={32} />
        </div>
      )}

      {isSantaHatShowing && (
        <img
          src={SantaImage}
          alt="Santa Hat image"
          className="absolute -right-[15px] -top-[19px]"
        />
      )}

      {indicator && (
        <div className="absolute bottom-0 right-0">
          <Indicator status={indicator} />
        </div>
      )}
    </div>
  );
};
