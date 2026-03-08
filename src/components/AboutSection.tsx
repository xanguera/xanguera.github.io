import { useState } from "react";

const tabs = [
  {
    id: "professional",
    label: "Professional",
    content: (
      <>
        <p>
          I am the co-founder and CTO of ELSA, an AI-powered application to help
          language students improve their English communication skills.
        </p>
        <p>
          At ELSA I built the engineering and research teams and currently I
          focus my time on developing our AI technology.
        </p>
        <p>
          Prior to ELSA, I created an edtech startup called Sinkronigo that
          published speech-enabled ebooks for language learning.
        </p>
        <p>
          Earlier on I was one of the founding researchers in the multimedia
          research group at Telefonica R&amp;D, in Barcelona, where I pursued
          research in speech and multimedia processing.
        </p>
        <p>
          I hold a Ph.D. in speech processing and I am the coauthor of over 125
          research publications. I am also the co-inventor in multiple patents
          and an active contributor to the open source community (if you worked
          in the area of multi-microphone speech processing you probably heard
          about the{" "}
          <a
            href="https://github.com/xanguera/BeamformIt"
            className="text-accent underline underline-offset-2 hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            BeamformIt software
          </a>
          ).
        </p>
      </>
    ),
  },
  {
    id: "personal",
    label: "Personal",
    content: (
      <>
        <p>
          I am an Electrical engineer, turned speech and multimedia researcher,
          turned entrepreneur.
        </p>
        <p>
          I was born in Tarragona, an ancient Roman Empire Capital in the
          Mediterranean coast of Spain.
        </p>
        <p>
          I am the single child of a family of farmers that moved to Tarragona
          right before I was born and established a family business selling and
          repairing home appliances.
        </p>
        <p>
          I was thus raised in between TVs under test, and got to master
          soldering at an early age.
        </p>
        <p>
          Currently I live in Lisbon, Portugal, with my wife and 2 kids, I enjoy
          Portuguese good coffee and "pasteis de nata" and how welcoming
          Portuguese people are always with me.
        </p>
      </>
    ),
  },
];

const AboutSection = () => {
  const [active, setActive] = useState("professional");

  return (
    <section id="about" className="section-divider">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-foreground mb-8">About</h2>

        <div className="flex gap-4 mb-6">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                active === t.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="prose prose-slate max-w-none font-body text-foreground/85 leading-relaxed space-y-4">
          {tabs.find((t) => t.id === active)?.content}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
