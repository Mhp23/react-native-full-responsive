'use strict';

module.exports = {
  '*.{js,jsx,ts,tsx,md,json}': 'prettier --write --ignore-unknown',
  'src/**/*.+(js|ts|tsx)': ['eslint'],
};
