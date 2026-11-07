import Reveal from "./Reveal"

export const steps = [
  {
    title: "Je réserve",
    text: "Vous choisissez une formule, une adresse et un moment. On vous rappelle pour confirmer le créneau.",
  },
  {
    title: "On vient",
    text: "Le Kangoo arrive chez vous ou sur votre parking avec tout le matériel. Vous nous laissez l'accès au véhicule.",
  },
  {
    title: "La voiture est propre",
    text: "Prélavage, carrosserie, jantes, intérieur selon la formule. Vous récupérez une voiture nette, sans avoir bougé.",
  },
]

export default function Steps() {
  return (
    <ol className="steps">
      {steps.map((step, index) => (
        <Reveal as="li" key={step.title} className="steps__item" delay={index * 0.1}>
          <span className="steps__number" aria-hidden="true">
            {index + 1}
          </span>
          <h3 className="steps__title">{step.title}</h3>
          <p className="steps__text">{step.text}</p>
        </Reveal>
      ))}
    </ol>
  )
}
