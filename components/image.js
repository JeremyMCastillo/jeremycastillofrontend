import { getStrapiMedia } from "../lib/media";
import { useContext } from "react";
import NextImage from "next/image";
import { GlobalContext } from "../pages/_app";

const Image = ({ image, className }) => {
  const defaultSquareSize = 450;
  const globalContext = useContext(GlobalContext);
  const defaultImage = globalContext?.defaultImage || "";
  const { alternativeText, width, height } = image?.url
    ? image
    : {
        alternativeText: "",
        width: defaultSquareSize,
        height: defaultSquareSize,
      };

  return (
    <NextImage
      className={className}
      width={width}
      height={height}
      src={getStrapiMedia(image?.url ? image : defaultImage)}
      alt={alternativeText || ""}
    />
  );
};

export default Image;
