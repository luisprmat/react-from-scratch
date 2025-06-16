# React from Scratch

This repo contains the source code for each lesson of the React from Scratch Laracasts series with intemediate steps to view commit changes.

## Some differences between HTML and JSX syntax

- We must return a single node element (multiple nodes throws errors). Use fragments instead.
```jsx
return (
  <React.Fragment>
    { /* multiple nodes */ }
  </React.Fragment>
)
```

or simpler

```jsx
return (
  <>
    { /* multiple nodes */ }
  </>
)
```
- Use `className` instead of `class`, because `class` is a reserved word in *javascript*.
- Use `htmlFor` instead of `for` in form labels, because `for` is a reserved word in *javascript* to iterations.
- All tags must end with a closing tag including *html void elements* as `input`, `img`, `meta`, etc. Closing tags is required in JSX
- Node elements (from native html) must be in *lowercase*, for example `<h1>`. If we use `<H1>` is understood as a *javascript function* or a *React component*.
- `style` tag is different to *html*, we use an object with map properties like
```jsx
 <h1 style={{ color: 'red', fontStyle: 'italic' }}>React & Vite</h1>
```
instead of
```html
<h1 style="color: red; font-style: italic">React & Vite</h1>
```