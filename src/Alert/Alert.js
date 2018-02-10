// @flow

import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'lodash/get';
import themeProp from '../utils/src/theme';

import { borderRadius } from '../utils/src/border-radius';
import { themeColorLevel } from '../utils/src/color-functions';

import { alertVariant } from './utils/alert-variant';

import {
  alertPaddingY,
  alertPaddingX,
  alertMarginBottom,
  alertBorderWidth,
  alertLinkFontWeight,
  alertBorderRadius,
  alertBgLevel,
  alertBorderLevel,
  alertColorLevel
} from './default-theme';

const Alert = styled.div`
  position: relative;
  padding: ${themeProp('alertPaddingY', alertPaddingY)}
    ${themeProp('alertPaddingX,', alertPaddingX)};

  margin-bottom: ${themeProp('alertMarginBottom', alertMarginBottom)};

  border: ${themeProp('alertBorderWidth', alertBorderWidth)} solid transparent;

  a {
    font-weight: ${themeProp('alertLinkFontWeight', alertLinkFontWeight)};
  }

  ${borderRadius(themeProp('alertBorderRadius', alertBorderRadius))};

  ${({ type, theme }) =>
    alertVariant(
      themeColorLevel(type, get(theme, 'alertBgLevel', alertBgLevel)),
      themeColorLevel(type, get(theme, 'alertBorderLevel', alertBorderLevel)),
      themeColorLevel(type, get(theme, 'alertColorLevel', alertColorLevel))
    )}};
`;

Alert.defaultProps = {
  type: 'primary'
};

Alert.propTypes = {
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ])
};

export default Alert;
