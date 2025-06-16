function H1({ children }) {
  return <h1>{children}</h1>
}

export default function App() {
  return (
    <>
      <H1>Hello</H1>
      <ul className="my-cool-list">
        <li>Hello</li>
        <li>world</li>
      </ul>
      <form action="">
        <label htmlFor="first_name">First Name</label>
        <input id="first_name" type="text" />
        <button>Submit</button>
      </form>
    </>
  )
}