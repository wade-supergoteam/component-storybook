import styled from "styled-components";

import themeProp from "../utils/theme";

import { borderRadius } from "../utils/border-radius";
import { boxShadow } from "../utils/box-shadow";

import {
  dropdownMinWidth,
  dropdownPaddingY,
  dropdownSpacer,
  fontSizeBase,
  bodyColor,
  dropdownBg,
  dropdownBorderWidth,
  dropdownBorderColor,
  dropdownBorderRadius,
  dropdownBoxShadow,
  zIndexDropdown,
} from "./default-theme";

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  z-index: ${themeProp("zIndexDropdown", zIndexDropdown)};
  display: none;
  float: left;
  min-width: ${themeProp("dropdownMinWidth", dropdownMinWidth)};
  padding: ${themeProp("dropdownPaddingY", dropdownPaddingY)} 0;
  margin: ${themeProp("dropdownSpacer", dropdownSpacer)} 0 0;
  font-size: ${themeProp("fontSizeBase", fontSizeBase)};
  color: ${themeProp("bodyColor", bodyColor)};
  text-align: left;
  list-style: none;
  background-color: ${themeProp("dropdownBg", dropdownBg)};
  background-clip: padding-box;
  border: ${themeProp("dropdownBorderWidth", dropdownBorderWidth)} solid ${themeProp("dropdownBorderColor", dropdownBorderColor)};
  ${borderRadius(themeProp("dropdownBorderRadius", dropdownBorderRadius))};
  ${boxShadow(themeProp("dropdownBoxShadow", dropdownBoxShadow))};
`;

DropdownMenu.defaultProps = {};

export default DropdownMenu;
