import headshot from "@/assets/headshot.png";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="shrink-0">
            <img
              src={headshot}
              alt="Xavier Anguera, Ph.D."
              className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover shadow-xl ring-4 ring-primary/20"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Xavier Anguera<span className="text-primary">,</span> Ph.D.
            </h1>
            <p className="mt-3 text-lg text-muted-foreground font-body leading-relaxed">
              Co-founder &amp; CTO of{" "}
              <span className="text-accent font-semibold">ELSA</span> ·
              Speech &amp; AI Researcher · Entrepreneur
            </p>
            <p className="mt-2 text-sm text-muted-foreground font-body">
              Lisbon, Portugal
            </p>
            <div className="mt-5 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#about"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                About Me
              </a>
              <a
                href="https://www.linkedin.com/in/xanguera"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 rounded-full border border-border text-foreground text-sm font-semibold hover:bg-muted transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
