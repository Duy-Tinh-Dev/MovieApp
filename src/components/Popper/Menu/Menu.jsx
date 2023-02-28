import { useState, useEffect } from "react";
import Tippy from "@tippyjs/react/headless";
import Header from "./Header";
import MenuItem from "../MenuItem";
import Popper from "../../Popper";
import styles from "./menu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Menu({ children, menuList, className }) {
  const [currentMenu, setCurrentMenu] = useState({ heading: "", data: [] });
  const [historyMenu, setHistoryMenu] = useState(menuList);

  useEffect(() => {
    if (historyMenu.length > 0)
      setCurrentMenu(historyMenu[historyMenu.length - 1]);
  }, [historyMenu]);

  const menuStyle = cx("wrapper", {
    [className]: className,
  });

  const handleRollBack = () => {
    if (historyMenu.length > 1) setHistoryMenu((pre) => pre.slice(0, -1));
  };

  const handleRenderMenuItem = () => {
    return (
      <>
        {currentMenu.data.map((item) => (
          <MenuItem
            key={item.key}
            item={item}
            onClick={() => {
              if (item.children) {
                setHistoryMenu((pre) => [...pre, item.children[0]]);
              }
            }}
          >
            {item.title}
          </MenuItem>
        ))}
      </>
    );
  };
  return (
    <div>
      <Tippy
        interactive
        placement="bottom-end"
        offset={[0, 11]}
        render={() => {
          return (
            <Popper className={menuStyle}>
              {currentMenu.heading && (
                <Header onClick={handleRollBack}>{currentMenu.heading}</Header>
              )}
              {handleRenderMenuItem()}
            </Popper>
          );
        }}
      >
        {children}
      </Tippy>
    </div>
  );
}

export default Menu;
