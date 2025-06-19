# React from Scratch

This repo contains the source code for each lesson of the React from Scratch Laracasts series with intemediate steps to view commit changes.

## Some differences between HTML and JSX syntax

- We must return a single node element (multiple nodes throws errors). Use fragments instead.

```jsx
return <React.Fragment>{/* multiple nodes */}</React.Fragment>
```

or simpler

```jsx
return <>{/* multiple nodes */}</>
```

- Use `className` instead of `class`, because `class` is a reserved word in _javascript_.
- Use `htmlFor` instead of `for` in form labels, because `for` is a reserved word in _javascript_ to iterations.
- All tags must end with a closing tag including _html void elements_ as `input`, `img`, `meta`, etc. Closing tags is required in JSX
- Node elements (from native html) must be in _lowercase_, for example `<h1>`. If we use `<H1>` is understood as a _javascript function_ or a _React component_.
- `style` tag is different to _html_, we use an object with map properties like

```jsx
<h1 style={{ color: "red", fontStyle: "italic" }}>React & Vite</h1>
```

instead of

```html
<h1 style="color: red; font-style: italic">React & Vite</h1>
```

If you need transform syntax from _html_ or _css_ to _jsx_, we can use an online tool as [**transform.tools**](https://transform.tools).

## Set up project

- Clone this project https://github.com/luisprmat/react-from-scratch.git
- Clone template design project [https://github.com/luisprmat/luisprmat-react-from-scratch-template](https://github.com/luisprmat/react-from-scratch.git) and copy folder `public/images` in this project in `public/images`. This project doesn't contain images to avoid duplication (save space in github)
- Install dependecies: `npm install`
- Run vite dev server: `npm run dev`

## Connect to API

From lesson 21, we need to connect to API built in Laravel framework, this allow us fetch _Puppies_, create new _Puppy_ and save _likes_ in data base. To connect to API we must clone repo [https://github.com/luisprmat/react-from-scratch-api](https://github.com/luisprmat/react-from-scratch-api.git), follow instructions to setup app.
