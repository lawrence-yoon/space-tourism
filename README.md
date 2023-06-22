This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./screenshots/Screenshot from 2023-06-22 08-51-21.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Vercel Deployment](https://space-tourism-three-rouge.vercel.app/)

## My process

I started out building with mobile first in mind. I took this design idealogy and ran with it, not considering how the layouts would change with the changing media breakouts. This ended up biting me in the rear later on when designing the tablet and desktop breakouts.
I was also hung up about how to implement a swipeable carousel, and this caused me to procrastinate this project due to the mental friction. I ended up just adding the react swipeable library to get the ball rolling.
In the future, if I continue styling with imported styles from stylesheets, I need to plan more. After this experience, I think I will return to tailwindcss.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [React Swipeable](https://www.npmjs.com/package/react-swipeable) - For swipeable

### What I learned

This project was well designed to utilize several core website building concepts, from flexbox vs grid, carousels, hover and active states, and more.

## Flexbox vs grid

When you are deciding when to use flexbox or grid and how many divs to consider using, you need to look at the layouts for all media breakouts. It will make your life easier if you plan ahead.
I found that for quick and dirty solutions, you can implement flex boxes, and flex boxes nested in flex boxes. Rule of thumb is, that if you want to organize things in one dimensional space, easy solution is to use a flex box. So if you nest them, that's two dimensional. However, this can become a nightmare if there is a lot of variations between the different breakouts.
I've learned from this project, try to use the least amount of these 'container' div's, and utilize grid if necessary. Do not just try to employ flexbox for everything, grid specializes in 2D, and makes it easier if you take the time to properly implement it. Also, there are times when we mix in both flexbox within grid, such as the navigation or button containers. Some breakouts call for changing orientations from horizontal to vertical, and vice versa.

## Carousels

So I don't think I necessarily needed to add a carousel, it was not specified in the design documents, but I added one because the crew route buttons looked like carousel indicator dots. While they are meant to be clicked, I added the ability to swipe so that mobile users don't have to worry about fat fingering it. I applied a quick and dirty solution to the carousel, and I feel like it would need a redo if I wanted to make it accessible, however I have read that carousels are infamously not accessible.

## hover and active states

I applied a solution that involves utilizing an empty div underneath the navbar links to underline the active link. see below code with the div.linkIndexBarHover

```
<Link
    key="0"
    className={classes.link}
    onClick={() => setLinkIndex(0)}
    onMouseOver={() => setLinkIndexHover(0)}
    onMouseOut={() => setLinkIndexHover(null)}
    href="/"
>
    <span className={classes.linkIndex}>00</span> HOME
    {0 == linkIndex ? (
    <div className={classes.linkIndexBar}></div>
    ) : null}
    {linkIndexHover == 0 ? (
    <div className={classes.linkIndexBarHover}></div>
    ) : null}
</Link>
```

and

```
  .linkIndexBar {
    width: 100%;
    height: 3px;
    background-color: #ffffff;
    position: absolute;
    top: 3.375rem;
    left: 0;
    z-index: 1;
  }
```

## images

in order to render out different images based on viewport of device, I added a second image component but with a different classname, and within the css, show or hide image using display

```
@media (1440px <= width) {
    .image {
        display: hidden
    }
    .image2 {
        display: block
    }
}
```

### Continued development

Now that I got the hang of styling from a figma file, I would like to focus on accessibility. I think that I should have focused on accessibility first, because what's the point in having an amazingly designed website or web app if it is not accessible. Everyone should be able to access and navigate and obtain information from the website, regardless of certain barriers. I am going to look into different libraries for accessible components.

## Author

- Website - [lawrence yoon](https://larr.dev)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/lawrence-yoon)
