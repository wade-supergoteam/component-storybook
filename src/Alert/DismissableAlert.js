import React, { cloneElement, isValidElement } from "react";
import PropTypes from "prop-types";
import omit from "lodash.omit";
import styled, { css } from "styled-components";
import themeProp from "../utils/theme";
import { hoverFocus } from "../utils/hover";

import Alert from "./Alert";
import CloseIcon from "../CloseIcon";

import { alertPaddingY, alertPaddingX } from "./default-theme";

const closeIconStyles = css`
  position: absolute;
  top: 0;
  right: 0;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  padding: ${themeProp("alertPaddingY", alertPaddingY)} ${themeProp("alertPaddingX", alertPaddingX)};
  color: ${props => !props.theme.closeColor && "inherit"};
  ${closeIconStyles};
`;

const CloseString = styled.button`
  ${closeIconStyles};
  padding: ${themeProp("alertPaddingY", alertPaddingY)} ${themeProp("alertPaddingX", alertPaddingX)};
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
  opacity: 0.5;

  ${hoverFocus(`
    color: #000;
    text-decoration: none;
    opacity: .75;
  `)};
`;

const DismissableAlert = props => {
  const filteredProps = omit(props, ["onClose", "closeIcon"]);
  return (
    <Alert {...filteredProps}>
      {props.children}

      {props.closeIcon && isValidElement(props.closeIcon) ? (
        cloneElement(props.closeIcon, { onClick: props.onClose })
      ) : (
        <CloseString onClick={props.onClose}>{props.closeIcon}</CloseString>
      )}

      {!props.closeIcon && <StyledCloseIcon onClick={props.onClose} />}
    </Alert>
  );
};

DismissableAlert.propTypes = {
  closeIcon: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
};

DismissableAlert.defaultProps = {
  closeIcon: null,
};

export default DismissableAlert;
