// @flow

// $FlowIssue
import get from "lodash.get";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import themeProp from "../utils/theme";
import {
  customSelectBg,
  customSelectBgSize,
  customSelectBorderColor,
  customSelectBorderRadius,
  customSelectBorderWidth,
  customSelectColor,
  customSelectDisabledBg,
  customSelectDisabledColor,
  customSelectFocusBorderColor,
  customSelectFocusBoxShadow,
  customSelectFontSizeLg,
  customSelectFontSizeSm,
  customSelectHeight,
  customSelectHeightLg,
  customSelectHeightSm,
  customSelectIndicator,
  customSelectLineHeight,
  customSelectPaddingX,
  customSelectPaddingY,
  inputBg,
  inputColor,
} from "./default-theme";

const CustomSelect = styled.select`
  display: inline-block;
  width: 100%;
  padding: ${themeProp("customSelectPaddingY", customSelectPaddingY)} 1.75rem
    ${themeProp("customSelectPaddingY", customSelectPaddingY)} ${themeProp("customSelectPaddingX", customSelectPaddingX)};
  line-height: ${themeProp("customSelectLineHeight", customSelectLineHeight)};
  color: ${themeProp("customSelectColor", customSelectColor)};
  vertical-align: middle;
  background: ${themeProp("customSelectBg", customSelectBg)} ${themeProp("customSelectIndicator", customSelectIndicator)}
    no-repeat right ${themeProp("customSelectPaddingX", customSelectPaddingX)} center;
  background-size: ${themeProp("customSelectBgSize", customSelectBgSize)};
  border: ${themeProp("customSelectBorderWidth", customSelectBorderWidth)} solid
    ${themeProp("customSelectBorderColor", customSelectBorderColor)};

  ${({ theme }) =>
    typeof theme.enableRounded === "undefined" || theme.enableRounded
      ? `border-radius: ${get(theme, "customSelectBorderRadius", customSelectBorderRadius)};`
      : "border-radius: 0;"};

  appearance: none;

  &:focus {
    border-color: ${themeProp("customSelectFocusBorderColor", customSelectFocusBorderColor)};
    outline: 0;
    box-shadow: ${themeProp("customSelectFocusBoxShadow", customSelectFocusBoxShadow)};

    &::-ms-value {
      color: ${themeProp("inputColor", inputColor)};
      background-color: ${themeProp("inputBg", inputBg)};
    }
  }

  &[multiple],
  &[size]:not([size="1"]) {
    height: auto;
    padding-right: ${themeProp("customSelectPaddingX", customSelectPaddingX)};
    background-image: none;
  }

  &:disabled {
    color: ${themeProp("customSelectDisabledColor", customSelectDisabledColor)};
    background-color: ${themeProp("customSelectDisabledBg", customSelectDisabledBg)};
  }

  // Hides the default caret in IE11
  &::-ms-expand {
    opacity: 0;
  }

  ${({ size, theme }) => {
    switch (size) {
      case "small":
        return css`
          height: ${get(theme, "customSelectHeightSm", customSelectHeightSm)};
          font-size: ${get(theme, "customSelectFontSizeSm", customSelectFontSizeSm)};
        `;
      case "large":
        return css`
          height: ${get(theme, "customSelectHeightLg", customSelectHeightLg)};
          font-size: ${get(theme, "customSelectFontSizeLg", customSelectFontSizeLg)};
        `;
      default:
        return css`
          height: ${get(theme, "customSelectHeight", customSelectHeight)};
        `;
    }
  }};
`;

CustomSelect.defaultProps = {
  size: "normal",
};

CustomSelect.defaultProps = {
  size: PropTypes.oneOf(["normal", "small", "large"]),
};

export default CustomSelect;
