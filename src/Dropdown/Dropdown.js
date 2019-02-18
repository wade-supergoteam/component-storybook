import styled, { css } from "styled-components";

import DropdownHeader from "./DropdownHeader";
import DropdownItem from "./DropdownItem";
import DropdownMenu from "./DropdownMenu";
import DropdownDivider from "./DropdownDivider";

const Dropdown = styled.div`
  position: relative;

  ${props =>
    props.isOpen &&
    css`
      ${DropdownMenu} {
        display: block;
        ${props.align === "right" ? "right: 0;" : "left: 0;"};
      }
    `};
`;

Dropdown.Header = DropdownHeader;
Dropdown.Item = DropdownItem;
Dropdown.Menu = DropdownMenu;
Dropdown.Divider = DropdownDivider;

Dropdown.defaultProps = {
  align: "left",
};

export default Dropdown;
