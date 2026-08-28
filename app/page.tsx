"use client";

import { useState, useEffect } from "react";

const whatsappNumber = "212674145890";
const googleFormAction = "https://docs.google.com/forms/d/e/1FAIpQLSdDqnvH8D_VR9dx7nXJLI64r8rqNnLL3GRp1xDNQ9s8QxDmig/formResponse";

// Demo lead capture link (for visitors testing the fictional school)
const whatsappDemoHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Bonjour CasaLangue, je souhaite en savoir plus sur vos cours.",
)}`;

// Direct freelance contact link (for business prospects wishing to hire Hamza)
const whatsappFreelanceHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Bonjour Hamza, j’ai découvert votre démo CasaLangue et je souhaite échanger sur un projet web pour mon activité.",
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  function handleSubmit() {
    window.setTimeout(() => setSent(true), 400);
  }

  return (
    <main>
      {/* Interactive Top Prospect Banner */}
      <aside className="demo-bar" aria-label="Informations sur cette démonstration">
        <div className="demo-bar-left">
          <span className="demo-bar-badge">✦ Démo Interactive</span>
          <span className="demo-bar-credit">
            Conçue par <strong>Hamza Lazaar</strong>
          </span>
        </div>
        <div className="demo-bar-right">
          <span className="demo-bar-pitch">Besoin d’un site sur mesure & capture WhatsApp pour votre activité ?</span>
          <a className="demo-bar-cta" href="#createur">
            Discuter de votre projet <span aria-hidden="true">→</span>
          </a>
        </div>
      </aside>

      {/* Main Header */}
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CasaLangue — accueil">
          <span className="brand-mark">C</span>
          <span>CasaLangue</span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#programmes">Programmes</a>
          <a href="#methode">Notre méthode</a>
          <a href="#contact">Contact Démo</a>
          <a className="nav-highlight" href="#createur">✦ Votre projet web</a>
        </nav>
        <div className="header-actions">
          <a className="button button-small button-dark" href={whatsappDemoHref} title="Tester le WhatsApp de l’école">
            Tester WhatsApp <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-small button-primary" href="#createur">
            Créer votre site
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="top">
        <div className="hero-copy reveal">
          <div className="eyebrow"><span /> Centre de langues à Casablanca</div>
          <h1>L’anglais qui vous fait <em>avancer.</em></h1>
          <p className="hero-lead">Des cours en petits groupes, pensés pour parler avec aisance — au travail, en voyage et au quotidien.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappDemoHref}>Réserver un cours d’essai <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#programmes">Découvrir les programmes <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-proof" aria-label="Points forts">
            <div className="avatars" aria-hidden="true"><span>Y</span><span>N</span><span>M</span></div>
            <div><strong>4,9 / 5</strong><small>selon nos apprenants</small></div><div className="proof-divider" />
            <div><strong>8 max.</strong><small>par groupe</small></div>
          </div>
        </div>
        <div className="hero-visual reveal delay-1" aria-label="Aperçu des cours CasaLangue">
          <div className="sun-disc" />
          <div className="speech-card card-bonjour"><span className="language-label">FR</span><strong>Bonjour !</strong><small>/ bɔ̃.ʒuʁ /</small></div>
          <div className="speech-card card-hello"><span className="language-label">EN</span><strong>Hello!</strong><small>/ həˈloʊ /</small></div>
          <div className="conversation-line line-one" /><div className="conversation-line line-two" /><div className="conversation-dot dot-one" /><div className="conversation-dot dot-two" />
          <div className="next-session"><span>Prochaine session</span><strong>16 septembre</strong><small>Places limitées · Inscriptions ouvertes</small></div>
          <div className="hero-sticker">Parlez.<br />Pratiquez.<br /><strong>Progressez.</strong></div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="trust-strip reveal" aria-label="Atouts CasaLangue">
        <span>Cours en présentiel</span>
        <span>Professeurs expérimentés</span>
        <span>Petits groupes</span>
        <span>Test de niveau offert</span>
      </section>

      {/* Programs Section */}
      <section className="section programs" id="programmes">
        <div className="section-heading reveal">
          <div>
            <p className="kicker">Nos programmes</p>
            <h2>Un parcours pour<br />chaque objectif.</h2>
          </div>
          <p>Choisissez le rythme qui vous ressemble. Tous nos programmes privilégient la pratique et les situations réelles.</p>
        </div>
        <div className="course-grid">
          {courses.map((course, index) => (
            <article className={`course-card ${course.accent} reveal delay-${index + 1}`} key={course.title}>
              <div className="course-top">
                <span className="course-number">0{index + 1}</span>
                <span className="course-tag">{course.tag}</span>
              </div>
              <p className="course-level">{course.level}</p>
              <h3>{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <div className="course-meta">
                <span>{course.schedule}</span>
                <strong>{course.price}</strong>
              </div>
              <a href="#contact" aria-label={`S’inscrire au programme ${course.title}`}>
                Voir le programme <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Method Section */}
      <section className="method" id="methode">
        <div className="method-visual reveal">
          <div className="method-word">Speak</div>
          <div className="method-card">
            <span>Votre progression</span>
            <strong>+1 niveau</strong>
            <small>en moyenne par session*</small>
          </div>
          <div className="method-badge">
            100%<br />
            <span>pratique</span>
          </div>
        </div>
        <div className="method-copy reveal delay-1">
          <p className="kicker light">La méthode CasaLangue</p>
          <h2>Moins de théorie.<br /><em>Plus de conversation.</em></h2>
          <p className="method-intro">On n’apprend pas une langue en silence. Chaque séance vous met en situation pour comprendre, répondre et vous exprimer naturellement.</p>
          <ol>
            <li className="reveal delay-1">
              <span>01</span>
              <div>
                <strong>Évaluez votre niveau</strong>
                <p>Un échange de 20 minutes pour partir sur de bonnes bases.</p>
              </div>
            </li>
            <li className="reveal delay-2">
              <span>02</span>
              <div>
                <strong>Pratiquez en petit groupe</strong>
                <p>Des ateliers concrets avec un maximum de huit apprenants.</p>
              </div>
            </li>
            <li className="reveal delay-3">
              <span>03</span>
              <div>
                <strong>Mesurez vos progrès</strong>
                <p>Un suivi simple et des retours personnalisés tout au long du parcours.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials">
        <div className="section-heading compact reveal">
          <div>
            <p className="kicker">Ils prennent la parole</p>
            <h2>La confiance,<br />ça s’entend.</h2>
          </div>
          <span className="demo-label">Témoignages fictifs · Démo</span>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <figure className={`reveal delay-${index + 1}`} key={testimonial.name}>
              <div className="quote-mark">“</div>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>
                <span className="avatar">{testimonial.initials}</span>
                <span>
                  <strong>{testimonial.name}</strong>
                  <small>{testimonial.detail}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Demo Contact / Lead Capture Form */}
      <section className="contact" id="contact">
        <div className="contact-copy reveal">
          <p className="kicker light">Prêt·e à commencer ?</p>
          <h2>Votre premier cours<br />commence ici.</h2>
          <p>Laissez vos coordonnées pour tester le parcours apprenant. La demande sera enregistrée et prête pour un contact WhatsApp.</p>
          <div className="contact-details">
            <div>
              <span>Localisation démo</span>
              <strong>Maarif, Casablanca</strong>
            </div>
            <div>
              <span>WhatsApp Démo</span>
              <strong>+212 6 74 14 58 90</strong>
            </div>
          </div>
        </div>
        <div className="form-card reveal delay-1">
          <iframe className="form-target" name="google-form-submit" title="Envoi sécurisé du formulaire" />
          {sent ? (
            <div className="success-message" role="status">
              <span>✓</span>
              <h3>Demande enregistrée !</h3>
              <p>Merci. Votre demande de test a bien été reçue via Google Forms.</p>
              <button type="button" onClick={() => setSent(false)}>Envoyer une autre demande</button>
            </div>
          ) : (
            <form action={googleFormAction} method="POST" target="google-form-submit" onSubmit={handleSubmit}>
              <div className="form-heading">
                <span>Test de niveau offert</span>
                <strong>Démo interactif</strong>
              </div>
              <label>
                Votre nom
                <input name="entry.182335687" type="text" placeholder="Ex. Amine Alaoui" required />
              </label>
              <label>
                Votre numéro WhatsApp
                <input name="entry.1966472586" type="tel" placeholder="+212 6 00 00 00 00" required />
              </label>
              <label>
                Programme souhaité
                <select name="entry.2053561465" defaultValue="" required>
                  <option value="" disabled>Choisir un programme</option>
                  {courses.map((course) => (
                    <option key={course.title}>{course.title}</option>
                  ))}
                </select>
              </label>
              <label>
                Créneau préféré
                <select name="entry.482706801" defaultValue="" required>
                  <option value="" disabled>Choisir un créneau</option>
                  <option>Matin (9h–12h)</option>
                  <option>Après-midi (14h–17h)</option>
                  <option>Soir (18h–21h)</option>
                  <option>Samedi</option>
                </select>
              </label>
              <label>
                Votre objectif <span className="optional">Facultatif</span>
                <textarea name="entry.27189426" placeholder="Ex. Améliorer mon anglais pour le travail" rows={3} />
              </label>
              <button className="button button-primary form-submit" type="submit">
                Je réserve mon test gratuit <span aria-hidden="true">→</span>
              </button>
              <small className="form-note">
                Démonstration technique connectée à Google Forms. Les données envoyées servent de test.
              </small>
            </form>
          )}
        </div>
      </section>

      {/* Freelance Creator & Multi-Sector Solutions Section */}
      <section className="creator-section" id="createur" aria-labelledby="creator-title">
        <div className="creator-heading reveal">
          <p className="kicker">Conception sur mesure · Hamza Lazaar</p>
          <h2 id="creator-title">Une idée pour votre activité ?<br /><em>Construisons-la.</em></h2>
          <p className="creator-subhead">
            Cette démo illustre la qualité graphique, l’expérience mobile et la fluidité de conversion que je crée pour les entreprises de services : <strong>centres de formation, cabinets, cliniques, agences et PME</strong>.
          </p>
        </div>
        <div className="creator-content reveal delay-1">
          <p>
            Je conçois des solutions numériques rapides, modernes et orientées acquisition — du design sur mesure à l’intégration de vos tunnels WhatsApp.
          </p>
          <ul aria-label="Solutions proposées aux entreprises">
            <li className="reveal delay-1">
              <span>01</span>
              <div>
                <strong>Sites vitrines & Landing pages de haute conversion</strong>
                <p>Identité visuelle soignée, chargement ultra-rapide et expérience pensée pour transformer les visiteurs en clients.</p>
              </div>
            </li>
            <li className="reveal delay-2">
              <span>02</span>
              <div>
                <strong>Tunnels de capture & Intégrations WhatsApp directes</strong>
                <p>Formulaires qualifiés et messages pré-remplis pour recevoir instantanément vos leads directement sur WhatsApp.</p>
              </div>
            </li>
            <li className="reveal delay-3">
              <span>03</span>
              <div>
                <strong>Plateformes métier, Espaces clients & Réservations</strong>
                <p>Portails privés, dashboards de suivi, calendriers de rendez-vous et applications web adaptées à votre flux de travail.</p>
              </div>
            </li>
            <li className="reveal delay-4">
              <span>04</span>
              <div>
                <strong>Automatisations & Digitalisation de processus</strong>
                <p>Synchronisation vers Google Sheets/CRM, alertes automatiques et outils internes pour gagner des heures chaque semaine.</p>
              </div>
            </li>
          </ul>
          <div className="creator-actions">
            <a className="button button-primary" href={whatsappFreelanceHref} target="_blank" rel="noopener noreferrer">
              Discuter de votre projet sur WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-dark" href="mailto:lazaarhamza561@gmail.com?subject=Projet%20site%20web%20sur%20mesure">
              Envoyer un e-mail direct <span aria-hidden="true">✉</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">C</span>
          <span>CasaLangue</span>
        </a>
        <p>Projet de démonstration interactive · Conçu pour les entreprises de services</p>
        <span>
          Créé par <a className="footer-credit" href="#createur">Hamza Lazaar</a> · 2026
        </span>
      </footer>

      {/* Mobile Floating Action Dock (Optimized for Freelance Prospect Outreach) */}
      <div className="mobile-prospect-dock" aria-label="Actions rapides mobile">
        <a className="dock-btn dock-btn-ghost" href="#contact" title="Tester le formulaire">
          🧪 Tester démo
        </a>
        <a className="dock-btn dock-btn-primary" href={whatsappFreelanceHref} target="_blank" rel="noopener noreferrer">
          💬 Votre projet web <span aria-hidden="true">↗</span>
        </a>
      </div>
    </main>
  );
}


