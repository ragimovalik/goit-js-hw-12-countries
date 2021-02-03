import { notice, error, defaults, Stack } from '@pnotify/core';
// import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';

defaults.styling = 'material';
defaults.icons = 'material';

export function myNotice() {
  notice({
    text: 'Too many matches found. Please, enter a more specific query',
  });
}

export function myError() {
  error({
    text: 'Country name not found. Please, try again.',
  });
}
