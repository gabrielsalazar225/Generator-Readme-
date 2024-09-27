function renderLicenseBadge(license) {
  const licenseBadges = {
      'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
      'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]',
      'GPL 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]',
      'BSD 3': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]',
      'None': ''};
      return licenseBadges[license] || '';
}

function renderLicenseLink(license) {
  const LicenseLinks = {
      'MIT' : '[MIT] (https://opensource.org/license/mit)',
      'Apache 2.0' : '[Apache 2.0] (https://opensource.org/license/apache-2-0)',
      'GPL 3.0' : '[GPL 3.0] (https://www.gnu.org/licenses/gpl-3.0)',
      'BSD 3' : '[BSD 3] (https://opensource.org/license/bsd-3-clause)',
      'None' : 'hole'};
      return LicenseLinks[license] || '';
}
