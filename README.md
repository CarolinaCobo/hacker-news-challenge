- npm init at the root of the project

Gitignore file

npm

Prettier

ESlint

# Hacker News Challenge

Create and improved version of (Hacker News)[https://news.ycombinator.com/] using the resources from their (API)[https://github.com/HackerNews/API]

---

## Table of contents

1.[UX](#ux)

- [User Stories](#user-stories)
- [Styling](#styling)

  - [Colours](#colours)
  - [Fonts](#fonts)
  - [Favicon](#favicon)

    2.[Features](#features)

- [CRUD Operations](#CRUD-operations)
- [Database design](#database-design)
- [Site features](#site-features)
  - [Responsive Frontend design](#responsive-frontend-design)
  - [Backend design](#backend-design)
  - [Website topology](#website-topology)
  - [Structure](#Structure)
  - [Home Page](#Home-page)
  - [All Books Page](#all-books-page)
  - [Book Page](#book-page)
  - [Profile Page](#Profile-page)
  - [Add Book Page](#add-book-page)
  - [Edit Book Page](#edit-book-page)
  - [Manage genre Page](#manage-genre-page)
  - [Buttons and other elements used](#buttons-and-other-elements-used)
- [Future features](#future-features)

  3.[Technologies used](#technologies-used)

- [Languages](#languages)
- [Libraries](#libraries)
- [Programs and tools](#programs-and-tools)

  4.[Testing](#testing)

  5.[Deployment](#deployment)

- [Cloning](#cloning)
- [Deploying app to Heroku](#Deploying-app-to-Heroku)

  6.[Credits](#credits)

- [Content](#content)
- [Media](#media)

  7.[Acknowledgements](#acknowledgements)

<h1> 1. User Experience </h1>

## **User stories**

- As a user I would like to be able to find information easier.
- As a user I would like to have an easier experience.
- As a user I would like to be able to filter by top, new and best stories.

## **Styling**

For styling the page I followed the redesign made by (Alberto Costestabili)[https://dribbble.com/shots/3219317-Hacker-News-Redesign] with some changes.

I picked this design as it follows the original site but making the UI friendlier and easier to read.

### Colours

The colors and style follow the original version from Hacker News.

- ![#FF6600](https://via.placeholder.com/15/FF6600/000000?text=+) `#FF6600` - Navbar, selected buttons, points and comments numbers.
- ![#F6F6EF](https://via.placeholder.com/15/F6F6EF/000000?text=+) `#F6F6EF` - Sorting by navbar.
- ![#D6D5D6](https://via.placeholder.com/15/D6D5D6/000000?text=+) `#D6D5D6` - Buttons.

### Fonts

Verdana as it's the font used in the Hacker News page.

<h1> 2. Features </h1>

## Implemented

- Pagination.
- Sorting by top, new and best stories.
- Responsive design.
- Accesibility.

# Not implemented

I considered to add the earch option, but doing some research on the Hacker News API docs and the site I discovered they use a search engine calle "Algolia". As I didn't want to do so many calls to the API and the the time available I decided to implement the features listed above.

<h1> 3. Technologies Used </h1>

## Languages

- [HTML5](https://www.w3schools.com/html/) - to build the structure of this site.
- [CSS3](https://www.w3schools.com/css/) - to style the page, and fix media queries and the max width.
- [JavaScript](https://www.javascript.com/) - to add interactions with the page.

## Libraries

- [React](https://reactjs.org/) - to make an easier interactive UI.
- [TailwindCSS](https://tailwindcss.com/docs/box-shadow) - For inspiration on accesibility.

## Programs and Tools

- [VSCode](https://code.visualstudio.com/) - used as IDE for the project.
- [Git](https://git-scm.com/) - used for version control.
- [Github](https://github.com/) - used to host repository and to generate the live website.
- [Babel](https://babeljs.io/) - JS transcompiler to make the code compatible with older JS engines.
- [Prettier](https://prettier.io/) - Code formatter.
- [ESlint](https://eslint.org/) - JavaScript linter to analyze problematic patterns in JS code.
- [Parcel](https://parceljs.org/) - Web application bundler.
- [Google Fonts](https://fonts.google.com) - used for fonts on the site.
- [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools) - used to test and optimize the site.
