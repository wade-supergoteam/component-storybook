import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';

import React from 'react';
import { ThemeProvider } from 'styled-components';

// import defaultTheme from '../src/utils/default-theme';

// addDecorator(story => (
//   <ThemeProvider theme={defaultTheme}>{story()}</ThemeProvider>
// ));


setOptions({
  name: 'styled-bootstrap',
  url: 'https://github.com/xDae/styled-bootstrap'
});

const req = require.context('../src/', true, /.story.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
