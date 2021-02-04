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
    delay: 2500,

    stack: new Stack({
      dir1: 'down',
      dir2: 'right',
      firstpos1: 80,
      firstpos2: 10,
      maxOpen: 2,
      modal: false,
      maxStrategy: 'close',
      maxClosureCausesWait: false,
    }),
  });
}

export function myError() {
  error({
    text: 'Country name not found. Please, try again.',
    delay: 2500,

    stack: new Stack({
      dir1: 'down',
      dir2: 'right',
      firstpos1: 80,
      firstpos2: 10,
      maxOpen: 2,
      modal: false,
      maxStrategy: 'close',
      maxClosureCausesWait: false,
    }),
  });
}

export function fetchError() {
  error({
    text: 'Error! Some problems on url or connection',
    delay: 2500,

    stack: new Stack({
      dir1: 'down',
      dir2: 'right',
      firstpos1: 80,
      firstpos2: 10,
      maxOpen: 2,
      modal: false,
      maxStrategy: 'close',
      maxClosureCausesWait: false,
    }),
  });
}
