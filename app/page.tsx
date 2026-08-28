"use client";

import { FormEvent, useState } from "react";

const whatsappNumber = "212674145890";
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Bonjour CasaLangue, je souhaite en savoir plus sur vos cours.",
)}`;

const courses = [
  { tag: "Le plus demandé", level: "A1 → B2", title: "Anglais général", description: "Progressez à l’oral et gagnez en confiance dans les situations du quotidien.", schedule: "Lun. & Mer. · 18h30", price: "Dès 590 DH / mois", accent: "coral" },
  { tag: "Nouveau", level: "A2 → C1", title: "Anglais professionnel", description: "Réunions, entretiens et présentations : pratiquez l’anglais de votre carrière.", schedule: "Mar. & Jeu. · 19h00", price: "Dès 690 DH / mois", accent: "blue" },
  { tag: "10–16 ans", level: "Débutant → Avancé", title: "English for Teens", description: "Des cours vivants en petit groupe pour apprendre, participer et s’exprimer.", schedule: "Samedi · 10h00", price: "Dès 490 DH / mois", accent: "yellow" },
];

const testimonials = [
  { quote: "Après deux mois, je prends enfin la parole pendant mes réunions sans préparer chaque phrase.", name: "Sara E.", detail: "Anglais professionnel", initials: "SE" },
  { quote: "Les groupes sont petits et l’ambiance pousse vraiment à parler. Ma fille adore son cours du samedi.", name: "Mehdi A.", detail: "Parent d’élève", initials: "MA" },
  { quote: "Un programme clair, des professeurs attentifs et surtout beaucoup de pratique dès le premier cours.", name: "Lina B.", detail: "Anglais général", initials: "LB" },
];

export default function Home() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const phone = String(form.get("phone") ?? "");
    const program = String(form.get("program") ?? "");
    const message = [
      "Bonjour CasaLangue, je souhaite réserver mon test de niveau gratuit.",
      "",
      `Nom : ${name}`,
      `Téléphone : ${phone}`,
      `Programme : ${program}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  }

  return (
    <main>
      <aside className="demo-bar" aria-label="Informations sur cette démonstration">
        <span>Site de démonstration</span>
        <span className="demo-bar-credit">
          Conçu par <strong>Hamza Lazaar</strong>
          <a href="mailto:lazaarhamza561@gmail.com">lazaarhamza561@gmail.com</a>
        </span>
      </aside>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CasaLangue — accueil"><span className="brand-mark">C</span><span>CasaLangue</span></a>
        <nav aria-label="Navigation principale"><a href="#programmes">Programmes</a><a href="#methode">Notre méthode</a><a href="#contact">Contact</a></nav>
        <a className="button button-small button-dark" href={whatsappHref}>WhatsApp <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Centre de langues à Casablanca</div>
          <h1>L’anglais qui vous fait <em>avancer.</em></h1>
          <p className="hero-lead">Des cours en petits groupes, pensés pour parler avec aisance — au travail, en voyage et au quotidien.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappHref}>Réserver un cours d’essai <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#programmes">Découvrir les programmes <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-proof" aria-label="Points forts">
            <div className="avatars" aria-hidden="true"><span>Y</span><span>N</span><span>M</span></div>
            <div><strong>4,9 / 5</strong><small>selon nos apprenants</small></div><div className="proof-divider" />
            <div><strong>8 max.</strong><small>par groupe</small></div>
          </div>
        </div>
        <div className="hero-visual" aria-label="Aperçu des cours CasaLangue">
          <div className="sun-disc" />
          <div className="speech-card card-bonjour"><span className="language-label">FR</span><strong>Bonjour !</strong><small>/ bɔ̃.ʒuʁ /</small></div>
          <div className="speech-card card-hello"><span className="language-label">EN</span><strong>Hello!</strong><small>/ həˈloʊ /</small></div>
          <div className="conversation-line line-one" /><div className="conversation-line line-two" /><div className="conversation-dot dot-one" /><div className="conversation-dot dot-two" />
          <div className="next-session"><span>Prochaine session</span><strong>16 septembre</strong><small>Places limitées · Inscriptions ouvertes</small></div>
          <div className="hero-sticker">Parlez.<br />Pratiquez.<br /><strong>Progressez.</strong></div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Atouts CasaLangue"><span>Cours en présentiel</span><span>Professeurs expérimentés</span><span>Petits groupes</span><span>Test de niveau offert</span></section>

      <section className="section programs" id="programmes">
        <div className="section-heading"><div><p className="kicker">Nos programmes</p><h2>Un parcours pour<br />chaque objectif.</h2></div><p>Choisissez le rythme qui vous ressemble. Tous nos programmes privilégient la pratique et les situations réelles.</p></div>
        <div className="course-grid">
          {courses.map((course, index) => (
            <article className={`course-card ${course.accent}`} key={course.title}>
              <div className="course-top"><span className="course-number">0{index + 1}</span><span className="course-tag">{course.tag}</span></div>
              <p className="course-level">{course.level}</p><h3>{course.title}</h3><p className="course-description">{course.description}</p>
              <div className="course-meta"><span>{course.schedule}</span><strong>{course.price}</strong></div>
              <a href="#contact" aria-label={`S’inscrire au programme ${course.title}`}>Voir le programme <span aria-hidden="true">→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="method" id="methode">
        <div className="method-visual"><div className="method-word">Speak</div><div className="method-card"><span>Votre progression</span><strong>+1 niveau</strong><small>en moyenne par session*</small></div><div className="method-badge">100%<br /><span>pratique</span></div></div>
        <div className="method-copy">
          <p className="kicker light">La méthode CasaLangue</p><h2>Moins de théorie.<br /><em>Plus de conversation.</em></h2>
          <p className="method-intro">On n’apprend pas une langue en silence. Chaque séance vous met en situation pour comprendre, répondre et vous exprimer naturellement.</p>
          <ol><li><span>01</span><div><strong>Évaluez votre niveau</strong><p>Un échange de 20 minutes pour partir sur de bonnes bases.</p></div></li><li><span>02</span><div><strong>Pratiquez en petit groupe</strong><p>Des ateliers concrets avec un maximum de huit apprenants.</p></div></li><li><span>03</span><div><strong>Mesurez vos progrès</strong><p>Un suivi simple et des retours personnalisés tout au long du parcours.</p></div></li></ol>
        </div>
      </section>

      <section className="section testimonials">
        <div className="section-heading compact"><div><p className="kicker">Ils prennent la parole</p><h2>La confiance,<br />ça s’entend.</h2></div><span className="demo-label">Témoignages fictifs · Démo</span></div>
        <div className="testimonial-grid">{testimonials.map((testimonial) => <figure key={testimonial.name}><div className="quote-mark">“</div><blockquote>{testimonial.quote}</blockquote><figcaption><span className="avatar">{testimonial.initials}</span><span><strong>{testimonial.name}</strong><small>{testimonial.detail}</small></span></figcaption></figure>)}</div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-copy"><p className="kicker light">Prêt·e à commencer ?</p><h2>Votre premier cours<br />commence ici.</h2><p>Laissez-nous vos coordonnées. Votre demande sera préparée et envoyée directement sur WhatsApp.</p><div className="contact-details"><div><span>Nous trouver</span><strong>Maarif, Casablanca</strong></div><div><span>Nous appeler</span><strong>+212 6 74 14 58 90</strong></div></div></div>
        <div className="form-card">
          {sent ? <div className="success-message" role="status"><span>✓</span><h3>Votre message est prêt !</h3><p>WhatsApp s’est ouvert avec votre demande. Il ne reste plus qu’à appuyer sur « Envoyer ».</p><button type="button" onClick={() => setSent(false)}>Préparer une autre demande</button></div> :
          <form onSubmit={handleSubmit}><div className="form-heading"><span>Test de niveau offert</span><strong>2 minutes</strong></div><label>Votre nom<input name="name" type="text" placeholder="Ex. Amine Alaoui" required /></label><label>Votre numéro WhatsApp<input name="phone" type="tel" placeholder="+212 6 00 00 00 00" required /></label><label>Programme souhaité<select name="program" defaultValue=""><option value="" disabled>Choisir un programme</option>{courses.map((course) => <option key={course.title}>{course.title}</option>)}</select></label><button className="button button-primary form-submit" type="submit">Je réserve mon test gratuit <span aria-hidden="true">→</span></button><small className="form-note">En envoyant ce formulaire, vous acceptez d’être contacté·e par CasaLangue.</small></form>}
        </div>
      </section>

      <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">C</span><span>CasaLangue</span></a><p>Une langue en plus. Des possibilités en plus.</p><span>Démo par <a className="footer-credit" href="mailto:lazaarhamza561@gmail.com">Hamza Lazaar</a> · 2026</span></footer>
      <a className="mobile-whatsapp" href={whatsappHref} aria-label="Nous écrire sur WhatsApp">WhatsApp <span aria-hidden="true">↗</span></a>
    </main>
  );
}
