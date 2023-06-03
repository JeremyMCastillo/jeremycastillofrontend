import { getStrapiMedia } from "../lib/media";
import { useContext } from "react";
import NextImage from "next/image";
import { GlobalContext } from "../pages/_app";

const Image = ({ image, className }) => {
  const { defaultImage } = useContext(GlobalContext);
  const { alternativeText, width, height } = image ? image.data.attributes : {alternativeText: "", width: 200, height: 200};

  return (
    <NextImage
      className={className}
      width={width}
      height={height}
      src={getStrapiMedia(image || defaultImage)}
      alt={alternativeText || ""}
    />
  );
};

export default Image;