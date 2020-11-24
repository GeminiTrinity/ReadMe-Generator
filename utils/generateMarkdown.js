// function to generate markdown for README
// Markdown assistance from: https://bit.ly/3l3BYl3
function generateMarkdown(data) {
  return `
# <center> ${data.title} 

## <center> **Table of Contents**
- [Description](#description)
- [Installation](#installation-steps)
- [How To Use](#how-to-use)
- [Credit](#additional-credit)
- [License](#license)
- [Contact](#contact-info)

---
<br>

## Description: 
${data.description}
> ${data.link}

---

## Installation Steps:
*(delete if none)*
1. ${data.installationOne}
2. ${data.installationTwo}
3. ${data.installationThree}
4. ${data.installationFour}
5. ${data.installationFive}

---

## How to Use:
${data.usage}

---

## Additional Credit
**Collaborators:**
*(delete if none)*
> ${data.collaborators}
**Third-Parties:**
*(delete if none)*
> ${data.thirdParty}
**Tutorials Used:**
*(delete if none)*
> ${data.tutorials}

---

## License:
### ${data.license}

---

## My Information:
**Github Link:**
> ${data.github}

**Email Address:**
> ${data.email}

**Phone Number:**
> ${data.phone}
`;
}

module.exports = generateMarkdown;
