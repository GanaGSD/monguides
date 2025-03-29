import './NarrativeSection.css'

export default function NarrativeSection(props) {
  return (
    <section className="narrative-section">
      <div className="narrative-background">
      </div>
      <div className="container">
        <div className="narrative-content">
          <h2 className="narrative-title">
            {props.text}
          </h2>
        </div>
      </div>
    </section>
  )
}