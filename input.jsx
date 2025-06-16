export default function App() {
  return (
    <div>
      <h2>
        Happy {' '}
        {new Date().toLocaleDateString('en-US', {
          weekday: 'long'
        })}
        !
      </h2>
      <p>I hope you have a <em>great</em> day!</p>
    </div>
  )
}