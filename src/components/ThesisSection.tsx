const ThesisSection = () => {
  return (
    <section id="thesis" className="section-divider">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-foreground mb-6">Ph.D. Thesis</h2>

        <div className="font-body text-foreground/85 leading-relaxed space-y-4">
          <p>
            In 2006 I defended my Ph.D. Thesis titled{" "}
            <a
              href="https://xavieranguera.com/phdthesis/PhD_Thesis.html"
              className="text-accent underline underline-offset-2 hover:text-primary transition-colors font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              "Robust Speaker Diarization for Meetings"
            </a>
            .
          </p>
          <p>
            The research for the thesis was done between UPC Barcelona (under
            supervision of{" "}
            <a
              href="https://www.linkedin.com/in/javier-hernando-1a7b976"
              className="text-accent underline underline-offset-2 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prof. Javier Hernando
            </a>
            ) and ICSI Berkeley (under supervision of{" "}
            <a
              href="https://www.linkedin.com/in/chuck-wooters"
              className="text-accent underline underline-offset-2 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dr. Chuck Wooters
            </a>
            ).
          </p>
          <p>
            I arrived at ICSI right when the Speaker Diarization and Speech
            Recognition communities started to shift focus from analyzing
            single-channel Broadcast News recordings to multi-channel meeting
            recordings.
          </p>
          <p>
            My first important contribution was to propose adding a signal
            preprocessing step to any speech analysis to obtain a single
            (enhanced) speech recording, obtained via the weighted combination of
            all available channels, with an acoustic beamforming algorithm. From
            this work I later released the open source tool{" "}
            <a
              href="https://github.com/xanguera/BeamformIt"
              className="text-accent underline underline-offset-2 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              BeamformIt
            </a>{" "}
            which is still currently considered a baseline in this and related areas.
          </p>
          <p>
            In addition, I worked on many algorithmic improvements to the
            Agglomerative Speaker Diarization system we used at ICSI, resulting
            in our system being the top performer during the NIST Speaker
            Diarization Campaigns of 2004 and 2005, when I led the ICSI
            submissions for Diarization.
          </p>
          <p>
            You can browse the document online (there might be some pdf→html
            conversion errors) or download{" "}
            <a
              href="https://xavieranguera.com/papers/PhD_Thesis.pdf"
              className="text-accent underline underline-offset-2 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              the pdf file
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThesisSection;
