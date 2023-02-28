import Tippy from "@tippyjs/react/headless";
import Popper from "../Popper";

function Popover({ children, text, arrow = false, placement = "bottom-end" }) {
  return (
    <div>
      <Tippy
        interactive={true}
        arrow={arrow}
        placement={placement}
        offset={[0, 16]}
        render={() => {
          return <Popper>{text}</Popper>;
        }}
      >
        {children}
      </Tippy>
    </div>
  );
}

export default Popover;
