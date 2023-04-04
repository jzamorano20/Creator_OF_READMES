// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
  if(license === 'Apache license 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  };

  if(license === 'GNU General Public License v3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  };
  if (license === 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  };
  if (license === 'BSD 2-Clause "Simplified" license') {
    return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
  };
  if (license === 'BSD 3-CLause "new" or "Revised" License') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  };
  if (license === 'Boost Software License 1.0') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  };

  if (license === 'Creative Commons Zero v1.0 Unviersal') {
    return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
  };

  if (license === 'Eclipse Public License 1.0') {
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  };

  if (license === 'GNU Affero General Public License v3.0') {
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
  };

  if (license === 'GNU Gerneral Public License v2.0') {
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)' 
  };

  if (license === 'GNU Lesser General Public License v3') {
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0' 
  };

  if (license === 'Mozilla Public License 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)' 
  };
  if (license === 'The Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)' 
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license === 'Apache license 2.0') {
  return 'https://opensource.org/licenses/Apache-2.0';
} else if (License === 'GNU General Public License v3.0'){
  return 'https://www.gnu.org/licenses/gpl-3.0';
} else if (License === 'MIT License'){
  return 'https://opensource.org/licenses/MIT';
}else if (License === 'BSD 2-Clause "Simplified" license') {
  return 'https://opensource.org/licenses/BSD-2-Clause';
} else if (License === 'BSD 3-CLause "new" or "Revised" License') {
  return 'https://opensource.org/licenses/BSD-3-Clause'
} else if (License === 'Boost Software License 1.0') {
  return 'https://www.boost.org/LICENSE_1_0.txt'
} else if (License === 'Creative Commons Zero v1.0 Unviersal') {
  return 'http://creativecommons.org/publicdomain/zero/1.0/'
} else if (License === 'Eclipse Public License 1.0' ) {
  return 'https://opensource.org/licenses/EPL-1.0'
} else if (License ==='GNU Affero General Public License v3.0' ) {
  return 'https://www.gnu.org/licenses/agpl-3.0'
} else if (License === 'GNU Gerneral Public License v2.0') {
  return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
} else if (License ==='GNU Lesser General Public License v3' ) {
  return 'https://www.gnu.org/licenses/agpl-3.0'
} else if (License ===  'Mozilla Public License 2.0') {
  return 'https://opensource.org/licenses/MPL-2.0'
} else if (License === 'The Unlicense'){
  return 'http://unlicense.org/'
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ## ${data.Description}
  ${renderLicenseBadge(data.License)}
  ##Questions
  ## ${data.Installation}
  ## ${data.Motavtion}
  GitHub Repo: ${data.Github}
  Email: ${data.Email}
  ##${data.Resources}
`;
};


module.exports = generateMarkdown;
