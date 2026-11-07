import { usePage } from "@inertiajs/react"
import PageHead from "../components/PageHead"
import Reveal from "../components/Reveal"
import Cta from "../components/Cta"

export default function About() {
  const { brand } = usePage().props

  return (
    <>
      <PageHead
        title="À propos"
        description={`Qui est derrière ${brand.name} : un lavage auto mobile lancé à ${brand.city} par Olivier Ginenwald et Audric Nomentsoa.`}
      />

      <section className="page-header">
        <div className="container">
          <p className="section__eyebrow">À propos</p>
          <h1 className="page-header__title">Un carwash qui vient à vous</h1>
          <p className="page-header__intro">
            {brand.name} démarre à {brand.city} avec une idée simple : votre temps vaut plus qu'une
            file d'attente à la station. Un Kangoo aménagé, du matériel de lavage professionnel et
            deux associés qui tiennent à rendre chaque voiture impeccable.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="equipe-titre">
        <div className="container">
          <Reveal className="section__header">
            <h2 id="equipe-titre" className="section__title">
              L'équipe
            </h2>
          </Reveal>
          <ul className="team">
            {brand.team.map((member, index) => (
              <Reveal as="li" key={member.name} className="team__member" delay={index * 0.1}>
                <h3 className="team__name">{member.name}</h3>
                <p className="team__role">
                  {member.role}, {member.title.toLowerCase()}
                </p>
              </Reveal>
            ))}
          </ul>
          <Reveal className="section__more">
            <Cta href="/reserver">Réserver un lavage</Cta>
          </Reveal>
        </div>
      </section>
    </>
  )
}
