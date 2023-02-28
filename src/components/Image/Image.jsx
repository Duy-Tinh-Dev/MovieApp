import { useState } from "react";
import images from "~/assets/images";
import classNames from "classnames/bind";
import styles from "./image.module.scss";
const cx = classNames.bind(styles);
function Image({
  classNames,
  src,
  alt,
  fallback: customFallback = images.errorImage,
}) {
  const [fallback, setFallback] = useState("");
  const imageStyle = cx("wrapper", {
    [classNames]: classNames,
  });
  const handleFallBack = () => {
    setFallback(customFallback);
  };
  return (
    <img
      className={imageStyle}
      src={fallback || src || images.notFoundImage}
      alt={alt}
      onError={handleFallBack}
    />
  );
}

export default Image;
