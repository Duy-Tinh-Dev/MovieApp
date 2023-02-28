import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./image.module.scss";
import images from "~/assets/images";
const cx = classNames.bind(styles);
function Image({
  classNames,
  src,
  alt,
  fallback: customFallback = images.errorImage,
}) {
  const imageStyle = cx("wrapper", {
    [classNames]: classNames,
  });
  const [fallback, setFallback] = useState("");
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
