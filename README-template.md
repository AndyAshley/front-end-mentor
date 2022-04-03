# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.
[![Netlify Status](https://api.netlify.com/api/v1/badges/2f03b456-424e-4912-b1d5-0e601b00363c/deploy-status)](https://app.netlify.com/sites/sunnyside-landing-gs29hts/deploys)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This is my 20th challenge from [Front-end-mentor.io](https://www.frontendmentor.io/). It was to code and style a landing page for Sunnyside agency based on the design assets provided. (static **JPG** images).

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](/public/sunnyside-desktop.png)
![](/public/sunnyside-mobile.png)

### Links

- Solution URL: [GitHub](https://github.com/AndyAshley/front-end-mentor/tree/sunnyside-landing-page)
- Live Site URL: [Netlify Site](https://sunnyside-landing-gs29hts.netlify.app/)

## My process

I took a component based approach with React and Nextjs. The components I made are:

##### TopNav.js

The top navigation bar

##### SiteHeader.js

The site header with the H1 title, the TopNav gets fixed over it

##### TramsformSection.js

The first section of the page, also calls in the `LearnButton.js` , and the `SideImage.js` components.

##### StandoutSection.js

Second section of the page, same as above for imports.

###### LearnButton.js

The "Learn More" button with a prop to change the underline color depending on the section its placed in (props.underline).
also calls in the `HoverScale.js` component for hover animation.

```
 <LearnButton underline="var(--Yellow)" />
```

###### SideImage.js

A component which takes two props for switching between desktop and mobile background images. (props.desktop, props.mobile)

```
<SideImage desktop="url(/Desktop/image-transform.jpg)" mobile="url(/Mobile/image-transform.jpg)" />
```

###### HoverScale.js

A component made with [React Spring](https://react-spring.io/) for hover animations.

##### BackgroundSection.js

The third section of the page which has the image backgrounds for each columns entire area.

##### Testimonials.js

Fourth section for displaying the site testimonials. It maps the `cardData` aray of objects using the `TestimonialCard.js` component to display any amount of testimonials that would be added to the page simply by updating the `cardData` array.

```
          {cardData.map((item, key) => {
            return (
              <Col lg={{ span: 4 }} className="my-4 py-2" key={`id-${key}`} id={`testimonial-${key}`}>
                <TestimonialCard image={item.image} text={item.text} name={item.name} title={item.title} />
              </Col>
            );
          })}
```

###### TestimonialCard.js

The component used for creating the testimonial cards, takes in 4 props tied to the `cardData` const array(props.image, props.text, props.name, props.title).

```
export default function TestimonialCard(props) {
  return (
    <Container className={classNames(styles.TestimonialCard, "px-0 d-flex flex-column align-items-center")}>
      <img src={props.image} alt="profile image" />
      <br />
      <p>{props.text}</p>
      <strong>{props.name}</strong>
      <small>{props.title}</small>
    </Container>
  );
}
```

##### Gallery.js

Simple 4 image display above the footer.

##### Footer.js

Site footer with nav links and social linked icons.

##### GoToTop.js

A component that displays a fixed icon when the user scrolls 500px from the top of the page. When the icon is clicked the page will auto scroll back to the top.

```
function Application({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoToTop />
    </>
  );
}

export default Application;

```

### Built with

- Semantic HTML5 markup
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Netlify](https://www.netlify.com/)
- CSS custom properties
- Mobile-first workflow

### Useful resources

- [React Spring](https://react-spring.io/) - react-spring is a spring-physics based animation library that should cover most of your UI related animation needs. It gives you tools flexible enough to confidently cast your ideas into moving interfaces.

## Author

- Frontend Mentor - [@Andy](https://www.frontendmentor.io/profile/AndyAshley)

## Acknowledgments

My work brother from another state, Cam, for getting me started with react a year ago.
