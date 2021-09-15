# Hacker News Challenge

Build a cleaner, easier more accessible version of [Hacker News](https://news.ycombinator.com/) using the resources from their [API](https://github.com/HackerNews/API).

Deployed site can be found [here](https://hacker-news-challenge.vercel.app/)

## Table of contents

[User Experience](#user-experience)

- [User Stories](#user-stories)
- [Styling](#styling)
  - [Colours](#colours)
  - [Fonts](#fonts)

[Features](#features)

- [Implemented](#implemented)

[Technologies used](#technologies-used)

- [Languages](#languages)
- [Libraries](#libraries)
- [Programs and tools](#programs-and-tools)
- [JS Tools Installed](#js-tools-installed)

  - [npm](#npm)
  - [Prettier](#pretier)
  - [ESLint](#eslint)
  - [Git](#git)
  - [Parcel](#parcel)
  - [Babel](#babel)
  - [React](#react)

- [Structure](#structure)
  - [Components](#components)
  - [Css](#css)

[Testing](#testing)

[How to run the project](#how-to-run-the-project)

[Deployment](#deployment)

[Future improvements](#future-improvements)

---

## User Experience

### User stories

- As a user I would like to be able to find information easier.
- As a user I would like to have an easier experience.
- As a user I would like to be able to filter by top, new and best stories.

### Styling

For styling the page I got inspiration from the redesign made by [Alberto Costestabili](https://dribbble.com/shots/3219317-Hacker-News-Redesign) in Dribbble.

The style I was looking for the design was sompething simple, easy to use and interactive.

To make it more user friendly I've used bigger buttons and used flexbox with the elements so all of the stack on the same way and move from row to column when the user is using a smaller device.

Also, I wanted to depending on in which section the user is the buttons would be orange following the color pattern.

To style different elements I've used the properties in [Tailwind box shadow styling](https://tailwindcss.com/docs/box-shadow)

#### **Colours**

The colors and style follow the original version from Hacker News.

![#FF6600](https://via.placeholder.com/15/FF6600/000000?text=+) `#FF6600` - Navbar, selected buttons, points and comments numbers.

For the background color of the sorting navbar and the buttons I've used: _rgba(0, 0, 0, 0.08)_

#### **Fonts**

Verdana as it's the font used in the Hacker News page.

## Features

### Implemented

- Pagination.
- Sorting by top, new and best stories.
- Responsive design.
- Accesibility.

## Technologies Used

### Languages

- [HTML5](https://www.w3schools.com/html/) - to build the structure of this site.
- [CSS3](https://www.w3schools.com/css/) - to style the page, and fix media queries and the max width.
- [JavaScript](https://www.javascript.com/) - to add interactions with the page.

### Libraries

- [React](https://reactjs.org/) - to make an easier interactive UI.

### Programs and Tools

- [VSCode](https://code.visualstudio.com/) - used as IDE for the project.
- [Git](https://git-scm.com/) - used for version control.
- [Github](https://github.com/) - used to host repository and to generate the live website.
- [Babel](https://babeljs.io/) - JS transcompiler to make the code compatible with older JS engines.
- [Prettier](https://prettier.io/) - Code formatter.
- [ESlint](https://eslint.org/) - JavaScript linter to analyze problematic patterns in JS code.
- [Parcel](https://parceljs.org/) - Web application bundler.
- [Google Fonts](https://fonts.google.com) - used for fonts on the site.
- [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools) - used to test and optimize the site.

### JS Tools Installed

#### **npm**

At the root of your project

```
npm init
```

#### **Prettier**

Available only in development.

```
npm install -D prettier
```

Create the .prettierrc file.

#### **ESLint**

```
npm install -D eslint eslint-config-prettier
```

All the configuration can be found in the .eslintrc.json. file

#### **Git**

```
git init
```

Create the .gitinore file.

#### **Parcel**

```
npm install -D parcel@1.12.3.
```

Update the package.json

```
"scripts" {
  "dev": "parcel src/index.html"
}
```

#### **Babel**

```
npm install -D @babel/core@7.12.16 @babel/preset-react@7.12.13

```

Create a file called .babelrc and add:

```
{
  "presets": [
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ]
}
```

#### **React**

```
npm install react@17.0.1 react-dom@17.0.1
```

## Structure

### Components

As some pieces of code were reused in different parts of the application I've created a folder that contains all the different components of the application:

- App - as the application is a single page App component contains:

  - Return statement with the information displayed in the app.
  - Fetch  from the API.
  - Buttons for Top, New and Best stories.
  - Cards with the different stories.
  - Number of current and total pages.
  - Buttons for previous and next.

- Button component: Styles and properties for the buttons.

- LinkButton: as the "Read More" buttons in the cards are anchor tags I decided to create another component to style it as I couldn't reuse the Button component.

- Posts: Style and get the cards containing the points and the tittle.

- WidthContainer: to style all different elements on the page with the same width and also using it for the Navigation bar, as it's only an element I decided to reuse the component in other parts of the site.

### CSS

To avoid inconsistencies due to styles applied by the browser I've used [Reset CSS](https://meyerweb.com/eric/tools/css/reset/)

Across all the CSS files I've followed [BEM naming convention](https://sparkbox.com/foundry/bem_by_example) for more consistency.

## Testing

For# testing I've used [Jest](https://testing-.com/), to install it:

```
npm install -D jest@26.6.3 @testing-/@11.2.5
```

The testing files can be found on the folders of the components that are being tested:

- App
- Button
- Posts

To run the entire test suite run:

```
npm run test
```

## How to run the project

To initialise the dependencies run

```
npm install
```

To start the application

```
run npm start
```

Also I created the sytleMock.js file to give an empty array.

## Deployment

To deploy the app I've used [Vercel](https://vercel.com/dashboard).

## Future improvements

As I wanted to keep the challenge in the 8 hours mark I had to left some functionalities out.

- In the future improvements I'd like to do a better error handling if there's any errors fetching the  from the API.
- When the stories are linked to an internal link in Hacker News the "Read More" button is not working, so fixing this would be one of the first improvements I would make.
- Add a preview when hovering over the "Read More" button.
- Calculate the maximum number of pages so when the user gets to the final one it fades like previous does.
- As this is my first time doing testing, I didn't have the scope to add more test cases.
- Adding a Search option, after doing some research on the Hacker News API docs and the site I discovered they use a search engine calle "Algolia". As I didn't want to do so many calls to the API and the the time available didn't allow me to do more research I would do it in the future.
