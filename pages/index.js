export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Components</h1>
      <h2 className="text-2xl font-bold">Buttons</h2>
      <div className="mb-2">
        <button className="btn btn-primary mr-2">Primary</button>
        <button className="btn btn-primary-outlined">Primary Outlined</button>
      </div>
      <div className="mb-2">
        <button className="btn btn-secondary mr-2">Secondary</button>
        <button className="btn btn-secondary-outlined">Secondary Outlined</button>
      </div>
      <div className="mb-2">
        <button className="btn btn-tertiary mr-2">Tertiary</button> {' '}
        <button className="btn btn-tertiary-outlined">Tertiary Outlined</button> {' '}
      </div>
    </div>
  )
}