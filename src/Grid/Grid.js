import styled from "styled-components";
import mediaQuery from "styled-media-responsive";

const defaultGutter = 20;
const defaultFontSize = 16;

const getDebug = ({ debug }) =>
  debug &&
  `
    background-color: rgba(192,192,192,${Math.random()});
  `;

const getGridHorizontalRules = ({ center }) => center && " text-align: center;";

const getGridVerticalRules = ({ middle, bottom }) => {
  if (middle) {
    return "> * { vertical-align: middle; }";
  }
  if (bottom) {
    return "> * { vertical-align: bottom; }";
  }
  return null;
};

const getGridGutterRules = ({ gutter = defaultGutter, full }) => {
  if (full) {
    return `
    margin-left: 0px;
    > * {
      padding-left: 0px;
    }
  `;
  }

  return `
  margin-left: ${gutter * -1}px;
  > * {
    padding-left: ${gutter}px;
  }
`;
};

const getDirectionRules = ({ rev }) =>
  rev &&
  `
    direction: rtl;
    text-align: left;
    > * {
      direction: ltr;
      text-align: left;
    }
  `;
/* istanbul ignore next */
const getGridItemMediaRules = ({ media, theme }) => {
  const rules = [];
  const mq = mediaQuery(theme.breakpoints);
  if (media) {
    Object.keys(media).forEach(breakpoint => {
      if (mq[breakpoint]) {
        const columns = media[breakpoint];
        const percent = columns * 100;
        rules.push(
          mq[breakpoint]`
        width: ${percent}%;
      `.join(""),
        );
      } else {
        console.log(`breakpoint "${breakpoint}" doesn't exist or it hasn't been defined on your theme`);
      }
    });
  }
  return rules.join(" ");
};

const getGridItemWidthRules = ({ col }) => {
  const percent = col * 100;
  return `width: ${percent}%;`;
};

export const Grid = styled.div`
  font-size: 0;
  > * {
    font-size: ${defaultFontSize}px;
    display: inline-block;
    vertical-align: top;
    width: 100%;
  }
  ${props => getGridGutterRules(props)};
  ${props => getGridHorizontalRules(props)};
  ${props => getGridVerticalRules(props)};
  ${props => getDirectionRules(props)};
`;

export const GridItem = styled.div`
  ${props => getDebug(props)};
  ${props => getGridItemWidthRules(props)};
  ${props => getGridItemMediaRules(props)};
`;
