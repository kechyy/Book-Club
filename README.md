# Project Title

Front-end Engineer Technical Test

## Description

Dashboard view for the Fictional Korapay Book Club web application

## Getting Started

### INSTRUCTIONS TO FIND AND RUN ENTRY-POINT FILE

- Pull down the project repository(SFE-MLE-OGB) from Gitlab
- Locate the index.html file on the project root folder or repo(SFE-MLE-OGB) to find the index.html file.
- Install local http server by runing npm install
- Run npm start to start the server and run the entry-point file .

### ASSUMPTIONS

- Since no front-end framework is required to implement this assessment, I assumed that using Web components which also can be used by any JavaScript framework, including Angular, React and Vue, which are great tools to deliver high-quality user experiences and that don’t run the risk of becoming obsolete will be good.

- With Web components, you could build sophisticated, stylized apps with custom behavior because, they are encapsulated, the stylings and data are not affected by external stylings, nor are their stylings applied externally.

### REQUIREDMENTS UNCOVERED

- Requirement to implement a filter search box, so that searching for “Built
  to Last” replaces the entire content of the book section, leaving just the “Built to Last” book (maintaining its details overlay) has not been fully implemented because, I still need to do some level of code refactoring to factor that in.
- Sidebar Menu event toggling not responding as expected at some point.

### INSTRUCTIONS TO CONFIGURE AND PREPARE THE SOURCE CODE TO BUILD AND RUN

- Pull down the project repository(SFE-MLE-OGB) from Gitlab.
- Run npm install to download dependencies.
- Run npm start to start the server and run the entry-point file .

### ISSUES ENCOUNTERED

- Using a web component base technologies for this project and also being a bit new to it, I encountered couple of issues

* I ran into Isolated or seperated shadow DOM component event communication issues. Example, Having the header component seperate from the sidebar menu component, I struggled with the event handling communications, such that sidebar menu not able to hear the header component.
* I also struggled styling and changing the default browser styles of the datalist search dropdown.

### CONSTRUCTIVE FEEDBACK

- Total code refactoring on quality, structuring and maintainability
- Elminating duplications in styling.
- Responsively target most common devices of a certain media type (screen)
