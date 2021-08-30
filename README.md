# Hacker News Challenge

Build a cleaner, easier more accessible version of (Hacker News)[https://news.ycombinator.com/] using the resources from their (API)[https://github.com/HackerNews/API]

## Table of contents

1.[UX](#ux)

- [User Stories](#user-stories)
- [Styling](#styling)

  - [Colours](#colours)
  - [Fonts](#fonts)
  - [Favicon](#favicon)

    2.[Features](#features)

- [Site features](#site-features)

  - [Responsive Frontend design](#responsive-frontend-design)

- [Future features](#future-features)

  3.[Technologies used](#technologies-used)

- [Languages](#languages)
- [Libraries](#libraries)
- [Programs and tools](#programs-and-tools)

  4.[Testing](#testing)

  5.[Deployment](#deployment)

- [Cloning](#cloning)

  6.[Credits](#credits)

- [Content](#content)

  7.[Acknowledgements](#acknowledgements)

<h1> 1. User Experience </h1>

## **User stories**

- As a user I would like to be able to find information easier.
- As a user I would like to have an easier experience.
- As a user I would like to be able to filter by top, new and best stories.

## **Styling**

For styling the page I followed the redesign made by (Alberto Costestabili)[https://dribbble.com/shots/3219317-Hacker-News-Redesign] with some changes.

I picked this design as it follows the original site but with a much more friendlier UI.

To style different elements I've (box shadow styling)[https://tailwindcss.com/docs/box-shadow]

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

## Structure

### Components

As some pieces of code were reused in different parts of the application I've created a folder that contains all the different components of the application:

- App - as the application is a single page App component contains:

  - Return statement with the information displayed in the app.
  - Fetch data from the API.
  - Buttons for Top, New and Best stories.
  - Cards with the different stories.
  - Number of current and total pages.
  - Buttons for previous and next.

- Button component: Styles and properties for the buttons.

- LinkButton: as the "Read More" buttons in the cards are anchor tags I decided to create another component to style it as I couldn't reuse the Button component.

- Posts: Style and get the cards containing the points and the tittle.

- WidthContainer: to style all different elements on the page with the same width and also using it for the Navigation bar, as it's only an element I decided to reuse the component in other parts of the site.

### CSS

To avoid inconsistencies due to styles applied by the browser I've used (Reset CSS)[https://meyerweb.com/eric/tools/css/reset/]

Across all the CSS files I've followed (BEM naming convention)[https://sparkbox.com/foundry/bem_by_example] for more consistency.

<h1> 4. Testing </h1>

The test performed can be found at the [testing.md](testing.md) file.

JEST
npm install -D jest@26.6.3 @testing-library/react@11.2.5

Create folder **tests**

---

<h1> 5. How to run the project </h1>

## JS Tools

### npm

At the root of your project

```
npm init
```

### Prettier

Available only in development.

```
npm install -D prettier
```

Create the .prettierrc file.

### ESLint

```
npm install -D eslint eslint-config-prettier
```

All the configuration can be found in the .eslintrc.json. file

### Git

```
git init
```

Create the .gitinore file.

### Parcel

```
npm install -D parcel@1.12.3.
```

Update the package.json

```
"scripts" {
  "dev": "parcel src/index.html"
}
```

### Babel

```
npm install -D @babel/core@7.12.16 @babel/preset-react@7.12.13

```

### React

```
npm install react@17.0.1 react-dom@17.0.1
```

IMPROVEMENTS

commits > improve
