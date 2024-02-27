# 20//02/2024
- Fixed our project element taking up the entire row
- Started drafting ideas for syncing group display with database and dynamically adding them to home page

# 21/02/2024
Landed on this pseudocode

```
// Array Structures

Array projects = [
  {id: 1, name: "Example Project 1", link: "/project"},
  {id: 2, name: "Example Project 2", link: "/project"},
  {id: 3, name: "Example Project 3", link: "/project"}
]

Array lives = [
  {id: 1, name: "Example Project 1", link: "/project"},
  {id: 2, name: "Example Project 2", link: "/project"},
  {id: 3, name: "Example Project 3", link: "/project"},
  {id: 4, name: "Example Project 4", link: "/project"}
]

// Dynamic Rendering of Rows

// Render Live Projects Row
FOR EACH live IN lives DO
  DISPLAY Link TO live.link WITH TEXT live.name
END FOR

// Render Projects Row
FOR EACH project IN projects DO
  notiAmountCons EQUALS projects.length
  DISPLAY Link TO project.link WITH TEXT project.name
END FOR

```
- Implemented the pseudocode and moved onto working on the help button

# 22/02/2024
- help button concept was simply a radial menu that displays different icons
- as this went on the help button turned more into a quick acces button, the current Icons for it are:
        - Github
        - Email
        - FAQ
        - Settings


# 23/02/2024
- Added a few animations to the buttons of the radial menu, minor tweaks to come in future.