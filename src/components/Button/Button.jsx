import React from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const Button = React.forwardRef(
  (
    {
      href,
      to,
      children,
      className,
      outline,
      primary,
      text,
      round,
      onClick,
      leftIcon,
      rightIcon,
      disable,
      ...passProps
    },
    ref
  ) => {
    let btnClass = cx("wrapper", {
      [className]: className,
      outline,
      primary,
      disable,
      text,
      round,
    });

    let props = {
      onClick,
      ...passProps,
    };
    let Comp = "button";
    if (disable) {
      Object.keys(props).forEach((key) => {
        if (key.startsWith("on") && typeof props[key] === "function") {
          delete props[key];
        }
      });
    }
    if (to) {
      Comp = Link;
      props.to = to;
    } else if (href) {
      Comp = "a";
      props.href = href;
    }
    return (
      <Comp className={btnClass} {...props} ref={ref}>
        {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
        <span className={cx("text-content")}>{children}</span>
        {rightIcon && <span className={cx("icon")}>{leftIcon}</span>}
      </Comp>
    );
  }
);
export default Button;
