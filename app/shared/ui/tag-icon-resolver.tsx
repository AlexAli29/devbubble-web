import { SVGProps } from "react";
import {
  CIcon,
  CPlusIcon,
  CSharpIcon,
  DevopsIcon,
  GoIcon,
  JSIcon,
  KotlinIcon,
  PythonIcon,
  TSIcon,
} from "./icons";
import { TagIcon } from "../types/tag";

export const TagIconResolver = ({
  tagIcon,
  ...props
}: SVGProps<SVGSVGElement> & { tagIcon: TagIcon }) => {
  switch (tagIcon) {
    case "c":
      return <CIcon />;
    case "c#":
      return <CSharpIcon {...props} />;
    case "c++":
      return <CPlusIcon {...props} />;
    case "devops":
      return <DevopsIcon {...props} />;
    case "go":
      return <GoIcon {...props} />;
    case "js":
      return <JSIcon {...props} />;
    case "ts":
      return <TSIcon {...props} />;
    case "kotlin":
      return <KotlinIcon {...props} />;
    case "python":
      return <PythonIcon {...props} />;

    default:
      return null;
  }
};
