"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const whatsappNumber = "212674145890";
const googleFormAction = "https://docs.google.com/forms/d/e/1FAIpQLSdDqnvH8D_VR9dx7nXJLI64r8rqNnLL3GRp1xDNQ9s8QxDmig/formResponse";

// Demo lead capture link (for visitors testing the fictional school)
const whatsappDemoHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Bonjour, je teste la démonstration fictive CasaLangue et son parcours WhatsApp.",
)}`;

// Direct freelance contact link (for business prospects wishing to hire Hamza)
const whatsappFreelanceHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Bonjour, j’ai découvert la démo CasaLangue et je souhaite échanger sur une solution sur mesure pour mon activité.",
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
  const [formState, setFormState] = useState<"idle" | "submitting" | "sent">("idle");
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);
  const submissionPendingRef = useRef(false);

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

  const closeDemoModal = useCallback((restoreFocus = true) => {
    setIsDemoModalOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => lastTriggerRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    if (!isDemoModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusableSelector = 'a[href], button:not([disabled])';
    const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(focusableSelector);
    focusableElements?.[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeDemoModal();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) return;
      const focusable = Array.from(modalRef.current.querySelectorAll<HTMLElement>(focusableSelector));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeDemoModal, isDemoModalOpen]);

  function openDemoModal(trigger: HTMLElement) {
    lastTriggerRef.current = trigger;
    setIsDemoModalOpen(true);
  }

  function handleSubmit() {
    submissionPendingRef.current = true;
    setFormState("submitting");
  }

  function handleFormResponse() {
    if (!submissionPendingRef.current) return;
    submissionPendingRef.current = false;
    setFormState("sent");
  }

  return (
    <main>
      {/* Interactive Top Prospect Banner */}
      <aside className="demo-bar" aria-label="Informations sur cette démonstration">
        <div className="demo-bar-left">
          <span className="demo-bar-badge">✦ Démo fictive : CasaLangue</span>
        </div>
        <div className="demo-bar-right">
          <span className="demo-bar-pitch">Un exemple concret de solution conçue pour une activité.</span>
          <a className="demo-bar-cta" href="#solution-sur-mesure">
            Solution sur mesure <span aria-hidden="true">→</span>
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
          <button className="nav-button" type="button" onClick={(event) => openDemoModal(event.currentTarget)}>Tester l’inscription</button>
          <a className="nav-highlight" href="#solution-sur-mesure">✦ Solution sur mesure</a>
        </nav>
        <div className="header-actions">
          <button className="button button-small button-dark" type="button" onClick={(event) => openDemoModal(event.currentTarget)} title="Tester le parcours WhatsApp fictif">
            Tester WhatsApp <span aria-hidden="true">↗</span>
          </button>
          <a className="button button-small button-primary" href="#solution-sur-mesure">
            Solution sur mesure
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
            <button className="button button-primary" type="button" onClick={(event) => openDemoModal(event.currentTarget)}>Tester la réservation WhatsApp <span aria-hidden="true">↗</span></button>
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
              <button className="course-demo-action" type="button" onClick={(event) => openDemoModal(event.currentTarget)} aria-label={`Tester l’inscription au programme ${course.title}`}>
                Tester l’inscription <span aria-hidden="true">→</span>
              </button>
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

      <div className="demo-end" role="separator" aria-label="Fin de la démonstration CasaLangue">
        <span>Fin de la démonstration CasaLangue</span>
        <small>La section suivante vous permet de parler de votre propre besoin.</small>
      </div>

      {/* Real prospect area */}
      <section className="solution-section" id="solution-sur-mesure" aria-labelledby="solution-title">
        <div className="solution-intro reveal">
          <p className="kicker">Solution sur mesure</p>
          <h2 id="solution-title">Une idée pour votre activité ?<br /><em>Construisons-la.</em></h2>
          <p>
            Cette démo montre le niveau de finition, l’expérience mobile et les parcours de conversion qui peuvent être adaptés à votre activité.
          </p>
          <ul aria-label="Exemples de solutions sur mesure">
            <li><strong>Sites et expériences web</strong><span>Vitrines, landing pages et espaces clients.</span></li>
            <li><strong>Plateformes métier</strong><span>Réservations, tableaux de bord et portails privés.</span></li>
            <li><strong>Forums et communautés</strong><span>Espaces d’échange conçus autour de vos membres.</span></li>
            <li><strong>Applications de gestion</strong><span>Outils web ou desktop adaptés à vos opérations.</span></li>
            <li><strong>Automatisations</strong><span>Connexions, alertes et processus internes simplifiés.</span></li>
          </ul>
          <div className="creator-actions">
            <a className="button button-primary" href={whatsappFreelanceHref} target="_blank" rel="noopener noreferrer">
              Discuter sur WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-dark" href="mailto:lazaarhamza561@gmail.com?subject=Demande%20de%20solution%20sur%20mesure">
              Envoyer un e-mail <span aria-hidden="true">✉</span>
            </a>
          </div>
        </div>

        <div className="form-card prospect-form-card reveal delay-1">
          <iframe className="form-target" name="google-form-submit" title="Réponse du formulaire de contact" onLoad={handleFormResponse} />
          {formState === "sent" ? (
            <div className="success-message" role="status">
              <span>✓</span>
              <h3>Demande transmise</h3>
              <p>Merci. Votre besoin a bien été envoyé au créateur de cette démonstration.</p>
              <button type="button" onClick={() => setFormState("idle")}>Envoyer une autre demande</button>
            </div>
          ) : (
            <form action={googleFormAction} method="POST" target="google-form-submit" onSubmit={handleSubmit}>
              <div className="form-heading">
                <span>Parlez-moi de votre besoin</span>
                <strong>Contact réel</strong>
              </div>
              <label>
                Nom ou activité
                <input name="entry.182335687" type="text" placeholder="Ex. Cabinet Atlas" autoComplete="organization" required />
              </label>
              <label>
                Numéro WhatsApp
                <input name="entry.1966472586" type="tel" placeholder="+212 6 00 00 00 00" autoComplete="tel" required />
              </label>
              <label>
                Description du besoin
                <textarea name="entry.2053561465" placeholder="Décrivez simplement l’outil ou le problème à résoudre." rows={5} required />
              </label>
              <button className="button button-primary form-submit" type="submit" disabled={formState === "submitting"}>
                {formState === "submitting" ? "Envoi en cours…" : "Envoyer ma demande"} <span aria-hidden="true">→</span>
              </button>
              <small className="form-note">
                Contact réel : ces informations sont transmises à Hamza Lazaar pour répondre à votre demande.
              </small>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">C</span>
          <span>CasaLangue</span>
        </a>
        <p>Démo fictive · Exemple de solution conçue sur mesure</p>
        <span>2026</span>
      </footer>

      {/* Mobile Floating Action Dock (Optimized for Freelance Prospect Outreach) */}
      <div className="mobile-prospect-dock" aria-label="Actions rapides mobile">
        <button className="dock-btn dock-btn-ghost" type="button" onClick={(event) => openDemoModal(event.currentTarget)} title="Tester le parcours fictif">
          🧪 Tester démo
        </button>
        <a className="dock-btn dock-btn-primary" href={whatsappFreelanceHref} target="_blank" rel="noopener noreferrer">
          💬 Solution sur mesure <span aria-hidden="true">↗</span>
        </a>
      </div>

      {isDemoModalOpen && (
        <div className="demo-modal-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) closeDemoModal();
        }}>
          <div className="demo-modal" ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="demo-modal-title" aria-describedby="demo-modal-description">
            <button className="demo-modal-close" type="button" onClick={() => closeDemoModal()} aria-label="Fermer la fenêtre">×</button>
            <span className="demo-modal-label">Démo fictive</span>
            <h2 id="demo-modal-title">CasaLangue n’est pas un véritable centre.</h2>
            <p id="demo-modal-description">
              Cette interaction montre comment un parcours WhatsApp peut fonctionner. Aucun cours ni inscription CasaLangue ne sera créé.
            </p>
            <div className="demo-modal-actions">
              <a className="button button-dark" href={whatsappDemoHref} target="_blank" rel="noopener noreferrer" onClick={() => closeDemoModal(false)}>
                Continuer vers WhatsApp <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-primary" href="#solution-sur-mesure" onClick={() => closeDemoModal(false)}>
                Découvrir une solution sur mesure <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
