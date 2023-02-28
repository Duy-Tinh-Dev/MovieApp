import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from "./menuItem.module.scss";
const cx = classNames.bind(styles);

function MenuItem({ children, item, className, onClick, ...passProps }) {
  const menuItemClass = cx("wrapper", {
    [className]: className,
  });
  return (
    <Button
      link={item.link}
      onClick={onClick}
      className={menuItemClass}
      leftIcon={item.icon}
      {...passProps}
    >
      {children}
    </Button>
  );
}

export default MenuItem;
