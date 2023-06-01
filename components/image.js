import { getStrapiMedia } from "../lib/media";
import { useContext } from "react";
import NextImage from "next/image";
import { GlobalContext } from "../pages/_app";

const Image = ({ image }) => {
  const { defaultSeo } = useContext(GlobalContext);
  const { alternativeText, width, height } = image ? image.data.attributes : {alternativeText: "", width: 100, height: 100};

  return (
    <NextImage
      width={width}
      height={height}
      src={getStrapiMedia(image || defaultSeo.shareImage)}
      alt={alternativeText || ""}
    />
  );
};

export default Image;