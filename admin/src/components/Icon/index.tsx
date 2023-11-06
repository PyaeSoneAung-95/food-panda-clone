import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

type IconProps = {
  name: string;
  className?: string;
};

export default function Icon({ name, className = "" }: IconProps) {
  switch (name) {
    case "eyeClose":
      return <AiOutlineEyeInvisible className={className} />;
    case "eye":
      return <AiOutlineEye className={className} />;
    default:
      return null;
  }
}
