import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";



const portalRoot = document.getElementById("portal");

const SubMenu: React.FC<SubMenuProps> = ({ component, options, children }) => {
  const [targetElement, setTargetElement] = useState(null);
  const [menuElement, setMenuElement] = useState(null);
  const placement = options?.placement ?? "bottom";
  const offset = options?.offset ?? [0, 10];
  const padding = options?.padding ?? { left: 16, right: 16 };

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = ({ target }: Event) => {
      if (target instanceof Node) {
        if (
          menuElement !== null &&
          targetElement !== null &&
          !menuElement.contains(target) &&
          !targetElement.contains(target)
        ) {
          setIsOpen(false);
        }
      }
    };
    if (menuElement !== null) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuElement, targetElement]);



  const menu = (
    <div ref={setMenuElement}>
      {children}
    </div>
  );

  const renderMenu = portalRoot ? createPortal(menu, portalRoot) : menu;

  return (
    <>
      <div ref={setTargetElement} onClick={toggle}>
        {component}
      </div>
      {isOpen && renderMenu}
    </>
  );
};

export default SubMenu;
