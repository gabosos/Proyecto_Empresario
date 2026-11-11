import React, { useEffect, useState } from "react";
import apiImage from "../Captura de pantalla 2026-10-19 a la(s) 5.01.54 p.m..png";
import databaseImage from "../database-illustration.svg";
import scrumImage from "../images (5).jpeg";
import middlewareImage from "../images.jpeg";
import frontendImage from "../frontend-technologies.webp";
import logsImage from "../images (1).jpeg";
import qualityImage from "../664e043a5c7004cca4cbf659_c-code.jpg";
import informationImage from "../imagen-informacion-clara.png";

const projects = [
  {
    title: "01 / Scrum",
    description: "Trabajo ágil, colaborativo y organizado en cada sprint.",
    image: scrumImage,
    alt: "Scrum y colaboración en el desarrollo de software",
    imagePosition: "center",
  },
  {
    title: "02 / APIS",
    description: "Integraciones y servicios backend pensados para crecer.",
    image: apiImage,
    alt: "Entorno de desarrollo con código y diagnósticos",
    imagePosition: "center",
  },
  {
    title: "03 / Base de datos",
    description: "Datos bien estructurados, seguros y fáciles de consultar.",
    image: databaseImage,
    alt: "Tabla de usuarios abierta en un visor de base de datos",
    imagePosition: "center 20%",
  },
  {
    title: "04 / INFORMACIÓN CLARA",
    description: "Soluciones explicadas con sencillez y sin tecnicismos.",
    image: informationImage,
    alt: "Gráfico de desarrollo web con Python y Flask",
    imagePosition: "center",
  },
  {
    title: "05 / Seguridad digital",
    description: "Una base robusta para proteger cada conexión y servicio.",
    image: middlewareImage,
    alt: "Ilustración de middleware conectando equipos y una base de datos",
    imagePosition: "center",
  },
  {
    title: "06 / Frontend",
    description: "Interfaces modernas, accesibles y adaptadas a cada pantalla.",
    image: frontendImage,
    alt: "Tecnologías HTML, CSS y JavaScript",
    imagePosition: "center",
  },
  {
    title: "07 / logs",
    description: "Seguimiento claro para entender lo que ocurre en cada sistema.",
    image: logsImage,
    alt: "Código fuente con resaltado de sintaxis",
    imagePosition: "center",
  },
  {
    title: "08 / Servicio de calidad (revision,tests y CI/CD)",
    description: "Revisión, pruebas y entregas confiables de principio a fin.",
    image: qualityImage,
    alt: "Código bajo revisión en una pantalla",
    imagePosition: "center",
  },
];

const palette = [
  { name: "Azul profundo", hex: "#132D47" },
  { name: "Turquesa", hex: "#087F85" },
  { name: "Gris claro", hex: "#F4F7F9" },
  { name: "Blanco", hex: "#FFFFFF" },
];

const backendServiceUrl =
  "https://es.fiverr.com/gabo_tech_hi/build-web-applications-using-python-and-flask-3114?utm_medium=shared&utm_source=copy_link&utm_campaign=base_gig_create_share&utm_term=d0eLv86&view=gig&gig_id=514871533";

function App() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (activeProject === null) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") setActiveProject(null);
      if (event.key === "ArrowRight") {
        setActiveProject((current) => (current + 1) % projects.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveProject(
          (current) => (current - 1 + projects.length) % projects.length,
        );
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("dialog-open");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("dialog-open");
    };
  }, [activeProject]);

  return (
    <main className="moodboard">
      <header className="page-header">
        <p className="eyebrow">DESARROLLO DE SOFTWARE&nbsp; / &nbsp;GABO_TECH</p>
        <h1>Empresa de software (Backend + apis + full stack pages)</h1>
        <p className="subtitle">
          Calidad técnica · Confianza · Facilidad de uso · Colaboración
        </p>
      </header>

      <section className="gallery" aria-label="Áreas de trabajo">
        {projects.map((project, index) => (
          <button
            className="project-card"
            key={project.title}
            onClick={() => setActiveProject(index)}
            type="button"
            aria-label={`Ver imagen: ${project.title}`}
          >
            <span className="image-wrap">
              <img
                src={project.image}
                alt={project.alt}
                style={{ objectPosition: project.imagePosition }}
              />
              <span className="image-overlay" aria-hidden="true">
                <span>Ver imagen <span className="overlay-arrow">↗</span></span>
              </span>
            </span>
            <span className="card-caption">{project.title}</span>
          </button>
        ))}
      </section>

      <footer className="reference-footer">
        <section className="palette-section" aria-labelledby="palette-title">
          <h2 className="eyebrow" id="palette-title">PALETA DE REFERENCIA</h2>
          <div className="swatches">
            {palette.map(({ name, hex }) => (
              <div className="swatch" key={name}>
                <span
                  className="swatch-color"
                  style={{ backgroundColor: hex }}
                  aria-hidden="true"
                />
                <p>{name} <span>{hex}</span></p>
              </div>
            ))}
          </div>
        </section>
        <section className="vision-section" aria-labelledby="vision-title">
          <h2 className="eyebrow" id="vision-title">UNA MISMA VISIÓN</h2>
          <p>Personas reales, y con vida</p>
        </section>
      </footer>

      <section className="service-cta" aria-labelledby="service-cta-title">
        <div className="cta-orb cta-orb-one" aria-hidden="true" />
        <div className="cta-orb cta-orb-two" aria-hidden="true" />
        <div className="cta-content">
          <p className="cta-kicker">
            <span className="cta-status-dot" />
            TU IDEA, LISTA PARA CRECER
          </p>
          <h2 id="service-cta-title">
            ¿Creamos algo <span>increíble?</span>
          </h2>
          <p className="cta-description">
            Backend y aplicaciones web a medida con Python y Flask. Cuéntame tu
            idea y la hacemos realidad.
          </p>
          <a
            className="service-button"
            href={backendServiceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="button-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>Hablemos de tu proyecto</span>
            <span className="button-arrow" aria-hidden="true">↗</span>
          </a>
          <p className="cta-note">Servicio disponible en Fiverr <span>·</span> Python + Flask</p>
        </div>
        <div className="cta-decoration" aria-hidden="true">
          <span className="decoration-bracket bracket-open">&lt;</span>
          <span className="decoration-slash">/</span>
          <span className="decoration-bracket bracket-close">&gt;</span>
          <span className="decoration-spark">✳</span>
        </div>
      </section>

      {activeProject !== null && (
        <div
          className="lightbox"
          role="presentation"
          onClick={() => setActiveProject(null)}
        >
          <section
            className="lightbox-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setActiveProject(null)}
              type="button"
              aria-label="Cerrar imagen"
            >
              ×
            </button>
            <button
              className="lightbox-arrow previous"
              onClick={() =>
                setActiveProject(
                  (activeProject - 1 + projects.length) % projects.length,
                )
              }
              type="button"
              aria-label="Imagen anterior"
            >
              ‹
            </button>
            <img
              className="lightbox-image"
              src={projects[activeProject].image}
              alt={projects[activeProject].alt}
            />
            <button
              className="lightbox-arrow next"
              onClick={() =>
                setActiveProject((activeProject + 1) % projects.length)
              }
              type="button"
              aria-label="Imagen siguiente"
            >
              ›
            </button>
            <div className="lightbox-caption">
              <h2 id="lightbox-title">{projects[activeProject].title}</h2>
              <p>{projects[activeProject].description}</p>
              <span>{String(activeProject + 1).padStart(2, "0")} / 08</span>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

export default App;
