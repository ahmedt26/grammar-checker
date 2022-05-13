# Project Plan &ndash; Grammar Checker for classic Jupyter / JupyterLab (Group 01)

> Authors: Ritesh Patel, Sunny Bhatt, Tahseen Ahmed

## 0. Table of Contents

- [Project Plan &ndash; Grammar Checker for classic Jupyter / JupyterLab (Group 01)](#project-plan--adding-sequences-to-p0-group-10)
  - [0. Table of Contents](#0-table-of-contents)
  - [1. Project Description](#1-project-description)
    - [1.1. General Project Overview](#11-general-project-overview)
    - [1.2. Proposed Features](#12-proposed-features)
    - [1.3. Implementation, Testing and Documentation](#13-implementation-testing-and-documentation)
  - [2. Resources](#2-resources)
    - [2.1. Juptyer Extension Documentation](#21-juptyer-extension-documentation)
    - [2.2. Open Source Grammar Checkers](#22-open-source-grammar-checkers)
  - [3. Division of Work](#3-division-of-work)
    - [3.1. Ritesh Patel](#31-ritesh-patel)
    - [3.2. Sunny Bhatt](#32-sunny-bhatt)
    - [3.3. Tahseen Ahmed](#33-tahseen-ahmed)
  - [4. Weekly Schedule](#4-weekly-schedule)
    - [4.1. Week 1](#41-week-1)
    - [4.2. Week 2](#42-week-2)
    - [4.3. Week 3](#43-week-3)
    - [4.4. Week 4](#44-week-4)
    - [4.5. Week 5](#45-week-5)
    - [4.6. Week 6](#46-week-6)

## 1. Project Description

### 1.1. General Project Overview

The purpose of this project is to create a grammar checker for classic Jupyter and JupyterLab by developing an extension that connects to an open-source grammar checker to check markdown cells, if there are no immediate open source options the back up plan would be to make Jupyter notebooks more accessible to users.

### 1.2. Proposed Features

This feature should be enabled on all markdown cells and check the content on which it should be able to highlight incorrect grammar and provide an alternative, grammatically correct sentence structure. The feature will be similar to that of Jupyter's spell checking extension.

### 1.3. Implementation, Testing and Documentation

Implementation and testing will be done using Jupyter notebooks by enabling the extension and giving it incorrect sentences as input to see if it catches the mistakes and corrects them. Documentation will be written using markdown format and published to the same repository as the source code.

## 2. Resources

### 2.1. Juptyer Extension Documentation

1. Jupyter extension documentation <https://jupyterlab.readthedocs.io/en/stable/user/extensions.html>
2. Creating Jupyter extension by Aneesha Bakharia <https://aneesha.medium.com/creating-a-jupyter-notebook-extension-part-1-31c72032cad>
3. Extending the Jupyter notebook <https://jupyter-notebook.readthedocs.io/en/stable/extending/index.html>

### 2.2. Open Source Grammar Checkers

4. Gingerit <https://github.com/Azd325/gingerit>
5. Grammarbot <https://www.grammarbot.io/>
6. Language tool <https://github.com/languagetool-org/languagetool>
7. Quillbot <https://quillbot.com/grammar-check>
8. Grammarly <https://developer.grammarly.com/>

## 3. Division of Work

Based on the project description and researched materials given above, expected division of work per group member will be as outlined in the subsections below.

### 3.1. Ritesh Patel

- Research open source grammar checking software to be used by the extension
- Aid in implementation of Juptyer extension
- Contribute toward the documentation and presentation materials

### 3.2. Sunny Bhatt

- Research Jupyter Extensions and how to connect them to markdown cells
- Create extension with previous research knowledge and aid in the design making process
- Contribute toward documentation and presentation materials

### 3.3. Tahseen Ahmed

- Design usability test cases in order to test the correctness of the implementation
- Test the product using developed test cases and record results.
- Model out design decisions of other Jupyter Extensions and use that to aid in our own design of the extension
- Contribute toward documentation and presentation materials

## 4. Weekly Schedule

The tentative weekly schedule for this project is broken down in the following subsections and will remain flexible to changes over the remainder of the term.

### 4.1. Week 1

> Dates: March 7 - March 13

Priorities and action items:

- Complete project plan (this document) as outlined on Avenue
- Preliminary research into project topic, gathering resources
- Expand on general topic to develop complete problem statement
- Distribute work based on research findings and project requirements

Expected progress/completion:

- Project plan submitted for review

### 4.2. Week 2

> Dates: March 14 - March 20

Priorities and action items:

- Set up codebase and organize into modular project structure
- Develop a high-level understanding of the topic at hand
- Start the development of the Jupyter Extension

Expected progress/completion:

- Have a Jupyter Extension that does not have our desired features but is ready to be developed on

### 4.3. Week 3

> Dates: March 21 - March 27

Priorities and action items:

- Integrate open-source grammar checker to our extension and connect that to markdown cells
- Write out our documentation for our current progress

Expected progress/completion:

- Be able to choose the correct open-source grammar checker and have it implemented into our extension

### 4.4. Week 4

> Dates: March 28 - April 3

Priorities and action items:

- Start the testing of the application and planning for the release of it
- Record test cases and outcomes as artifacts (perhaps documentation)

Expected progress/completion:

- Mostly working on usability testing, tests will be ran and changes will be made based on tests
- Seeing the process of downloading and enabling our extension from start to finish on the user side

### 4.5. Week 5

> Dates: April 4 - April 10

Priorities and action items:

- Final testing and bug fixes with all functionality implemented
- Complete user instructions and documentation for all modules
- Work on presentation slides and poster to near completion

Expected progress/completion:

- Near-final version of project/presentation materials completed

### 4.6. Week 6

> Dates: April 11 - April 17

Priorities and action items:

- Finalize project submission, ensure project is accessible by TAs
- Prepare and rehearse presentation with required materials

Expected progress/completion:

- Complete project submitted and published by April 12
- Presentation delivered during tentative dates, materials submitted
