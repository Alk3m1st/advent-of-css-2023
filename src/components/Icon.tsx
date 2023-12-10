import spriteIcons from "../assets/sprite.svg";

export const iconIds = [
  "calendar",
  "check",
  "chevron",
  "close",
  "eyeClosed",
  "eyeOpened",
  "logout",
  "minus",
  "plus",
  "question",
  "thumbsDown",
  "thumbsUp",
  "upload",
  "user",
];

interface IconProps {
  id: (typeof iconIds)[number];
  color?: string;
  size?: number;
}

export const Icon = (props: IconProps) => {
  const { id, color, size } = props;

  return (
    <svg width={size ?? 24} height={size ?? 24} fill={color ?? "black"}>
      <use href={`${spriteIcons}#${id}`} />
    </svg>
  );
};
