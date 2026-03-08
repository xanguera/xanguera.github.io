const CVSection = () => {
  return (
    <section id="cv" className="section-divider">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-foreground mb-6">CV</h2>

        <div className="font-body text-foreground/85 leading-relaxed space-y-4">
          <p>
            You can find my CV in pdf version{" "}
            <a
              href="https://xavieranguera.com/docs/Resume_xavier_Anguera_012024.pdf"
              className="text-accent underline underline-offset-2 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            . In there you will find a complete list of PhD and Msc. student
            theses I co-directed, as well as more information on my duties in
            each of my positions across the years.
          </p>
          <p>
            I have been very fortunate to having worked in academia, academic and
            corporate research and in a startup environment.
          </p>
          <p>
            You can also visit my{" "}
            <a
              href="https://www.linkedin.com/in/xanguera"
              className="text-accent underline underline-offset-2 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn profile
            </a>{" "}
            for a summarized version of my professional path and to get updated
            with what I am up to. I do not publish a lot, but I like to post
            there from time to time.
          </p>
          <p>
            I am always eager to learn and experience new things. Do you have a
            new project idea or need advice on your idea? Get in touch!
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>[name_initial]+[last_name] @ gmail+[dot]+com</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
