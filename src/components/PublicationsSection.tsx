import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Publication {
  text: string;
  pdfUrl?: string;
}

interface Topic {
  title: string;
  pubs: Publication[];
}

const topics: Topic[] = [
  {
    title: "Language Learning",
    pubs: [
      { text: 'Anguera, X., Proença, J., Gulordava, K., Tarján, B., Parslow, N., Dobrovolskii, V., Valente, F. & Girard, R. (2023). "ELSA Speech Analyzer: English Communication Assessment of Spontaneous Speech", In Proc. 9th Workshop on Speech and Language Technology in Education (SLaTE) (pp. 95-96).' },
      { text: 'Proença, J., Raboshchuk, G., Costa, A., Lopez-Otero & P. Anguera, X. (2019). "Teaching American English pronunciation using a TTS service", In Proc. 8th Workshop on Speech and Language Technology in Education (SLaTE)' },
      { text: 'Anguera, X. & Van, V. (2016). "English Language Speech Assistant", Show and Tell session. Interspeech 2016, San Francisco, CA, USA' },
      { text: 'Anguera, X. (2015). "Multimodal Read-aloud eBooks for Language Learning", Show and Tell session. Interspeech 2015, Dresden, Germany' },
    ],
  },
  {
    title: "Speech Segmentation and Clustering",
    pubs: [
      { text: 'Gracia, C., Anguera, X., Luque, J. & Artzi, I. (2014). "Phoneme-Lattice to Phoneme-Sequence matching algorithm based on Dynamic Programming"', pdfUrl: "http://www.xavieranguera.com/papers/Iberspeech2014_2.pdf" },
      { text: 'Gracia, C., Anguera, X. & Binefa, X. (2013). "A Riemannian stopping criterion for unsupervised phonetic segmentation"', pdfUrl: "http://www.xavieranguera.com/papers/icmla1.pdf" },
      { text: 'Gracia, C., Anguera, X. & Binefa, X. (2013). "Two-level clustering towards unsupervised discovery of acoustic classes"', pdfUrl: "http://www.xavieranguera.com/papers/icmla2.pdf" },
    ],
  },
  {
    title: "Audio Fingerprinting",
    pubs: [
      { text: 'Tsai, TJ., Friedland, G. & Anguera, X. (2015). "An Information-Theoretic Metric of Fingerprint Effectiveness", in proc. ICASSP 2015' },
      { text: 'Ondel, L, Anguera, X. & Luque, J. (2015). "MASK+: Data-driven Regions Selection for Acoustic Fingerprinting", in proc. ICASSP 2015' },
      { text: 'Anguera, X., Garzon, A. & Adamek, T. (2012). "MASK: Robust Local Features for Audio Fingerprinting" (BEST PAPER AWARD ICME 2012)', pdfUrl: "http://www.xavieranguera.com/papers/xanguera_icme2012.pdf" },
    ],
  },
  {
    title: "Dynamic Time Warping and Applications",
    pubs: [
      { text: 'Ferrarons, M., Anguera, X. & Luque, J. (2014). "Flexible Stand-alone Keyword Recognition Application using Dynamic Time Warping"', pdfUrl: "http://www.xavieranguera.com/papers/Iberspeech2014_1.pdf" },
      { text: 'Anguera, X., Luque, J. & Gracia, C. (2014). "Audio-to-text Alignment for speech recognition with very limited resources"', pdfUrl: "http://www.xavieranguera.com/papers/IS2014_phonealignment.pdf" },
    ],
  },
  {
    title: "Zero-Resource Speech Processing",
    pubs: [
      { text: 'Dunbar, E., Cao, XN., Benjumea, J., et al. (2017). "The zero resource speech challenge 2017", IEEE ASRU' },
      { text: 'Szoke, I. & Anguera, X (2016). "Zero-Cost Speech Recognition Task at Mediaeval 2016"' },
      { text: 'Versteegh, M., et al. (2015). "The Zero Resource Speech Challenge 2015", Interspeech 2015' },
    ],
  },
  {
    title: "Query-by-Example Voice Search",
    pubs: [
      { text: 'Anguera, X., Rodriguez-Fuentes, L-J., et al. (2015). "QUESST2014: Evaluating Query-by-example Speech Search in a Zero-Resource Setting", ICASSP 2015' },
      { text: 'Metze, F., Anguera, X., et al. (2014). "Language independent search in MediaEval\'s Spoken Web Search task", Elsevier Journal', pdfUrl: "http://www.xavieranguera.com/papers/YCSLA638.pdf" },
      { text: 'Anguera, X. (2013). "Information Retrieval-based Dynamic Time Warping", Interspeech 2013', pdfUrl: "http://www.xavieranguera.com/papers/interspeech2013.pdf" },
      { text: 'Anguera, X. & Ferrarons, M. (2013). "Memory Efficient Subsequence DTW for Query-by-Example Spoken Term Detection", ICME 2013', pdfUrl: "http://www.xavieranguera.com/papers/sdtw_icme2013.pdf" },
      { text: 'Anguera, X. (2012). "Speaker Independent Discriminant Feature Extraction for Acoustic Pattern-Matching", ICASSP 2012', pdfUrl: "http://www.xavieranguera.com/papers/swsmodel.pdf" },
      { text: 'Anguera, X., Macrae, R. & Oliver, N. (2010). "Partial Sequence Matching Using an Unbounded Dynamic Time Warping Algorithm", ICASSP 2010', pdfUrl: "http://www.xavieranguera.com/papers/icassp2010.pdf" },
    ],
  },
  {
    title: "Sports Analytics",
    pubs: [
      { text: 'Duxans, H., Anguera, X. & Conejero, D. (2009). "Audio-Based Soccer Game Summarization", IEEE BMSB09', pdfUrl: "http://www.xavieranguera.com/papers/bmsb09.pdf" },
      { text: 'Gyarmati, L. & Anguera, X. (2015). "Automatic Extraction of the Passing Strategies of Soccer Teams", KDD 2015 Workshop' },
    ],
  },
  {
    title: "Voice Biometrics",
    pubs: [
      { text: 'Bonastre, J.-F., Anguera, X., et al. (2012). "Discriminant Binary Data Representation for Speaker Recognition", ICASSP 2011', pdfUrl: "http://www.xavieranguera.com/papers/icassp2011b.pdf" },
      { text: 'Anguera, X. & Bonastre, J.-F. (2010). "Novel binary key representation for biometric speaker recognition", Interspeech 2010', pdfUrl: "http://www.xavieranguera.com/papers/xanguera_interspeech2010.pdf" },
      { text: 'Anguera, X. (2009). "MiniVectors: an Improved GMM-SVM Approach for Speaker Verification", Interspeech 2009', pdfUrl: "http://www.xavieranguera.com/papers/interspeech09.pdf" },
    ],
  },
  {
    title: "Content-based Video-Copy Detection",
    pubs: [
      { text: 'Anguera, X. & Adamek, T. (2012). "Multimodal Video Copy Detection using local features", IEEE COMSOC MMTC E-Letter', pdfUrl: "http://www.xavieranguera.com/papers/VCD_letter.pdf" },
      { text: 'Anguera, X., Barrios, J.M., Adamek, T. & Oliver, N. (2012). "Multimodal fusion for video copy detection", ACM Multimedia 2011', pdfUrl: "http://www.xavieranguera.com/papers/msp159-anguera.pdf" },
    ],
  },
  {
    title: "Multimedia & Mobile Computing",
    pubs: [
      { text: 'Macrae, R., Anguera, X. & Oliver, N. (2010). "MuViSync: Realtime Music Video Alignment", ICME 2010', pdfUrl: "http://www.xavieranguera.com/papers/icme2010.pdf" },
      { text: 'Anguera, X., Cherubini, M. & Oliver, N. (2010). "Unrestricted Voice Annotations and Search of Personal Photographs in a Mobile Phone"', pdfUrl: "http://www.xavieranguera.com/papers/sq2010.pdf" },
      { text: 'Cherubini, M., Anguera, X., Oliver, N. & de Oliveira, R. (2009). "Text versus Speech: A Comparison of Tagging Input Modalities for Camera Phones" (best paper award nominee)', pdfUrl: "http://www.xavieranguera.com/papers/mobilehci09.pdf" },
      { text: 'Anguera, X. & Oliver, N. (2008). "MAMI: Multimodal Annotations on a Camera Phone", MobileHCI 2008', pdfUrl: "http://www.xavieranguera.com/papers/mhci_2008.pdf" },
    ],
  },
  {
    title: "Speaker Diarization — Multiple Channels",
    pubs: [
      { text: 'Pardo, J.M., Anguera, X. & Wooters, C. (2007). "Speaker Diarization For Multiple-Distant-Microphone Meetings", IEEE Trans. on Computers', pdfUrl: "http://www.xavieranguera.com/papers/Trans-on-computers_2007.pdf" },
      { text: 'Anguera, X., Wooters, C. & Hernando, J. (2007). "Acoustic beamforming for speaker diarization of meetings", IEEE Trans. ASLP', pdfUrl: "http://www.xavieranguera.com/papers/transactions_taslp_2007.pdf" },
      { text: 'Anguera, X., Wooters, C. & Pardo, J.M. (2006). "Robust Speaker Diarization for Meetings: ICSI RT06s evaluation system"', pdfUrl: "http://www.xavieranguera.com/papers/icslp_2006_diary.pdf" },
    ],
  },
  {
    title: "Speaker Diarization — Core Algorithms",
    pubs: [
      { text: 'Anguera, X., Bozonnet, S., Evans, N., et al. (2012). "Speaker Diarization: a review of recent research", Trans. ASLP', pdfUrl: "http://www.xavieranguera.com/papers/taslp2011a.pdf" },
      { text: 'Anguera, X. & Bonastre, J.-F. (2012). "Fast Speaker Diarization Based on Binary Keys", ICASSP 2011', pdfUrl: "http://www.xavieranguera.com/papers/icassp2011a.pdf" },
      { text: 'Anguera, X., Wooters, C. & Hernando, J. (2006). "Friends and Enemies: A Novel Initialization for Speaker Diarization"', pdfUrl: "http://www.xavieranguera.com/papers/icslp_2006_init.pdf" },
      { text: 'Anguera, X. & Hernando, J. (2004). "Evolutive Speaker Segmentation using a Repository System", Interspeech-ICSLP 2004', pdfUrl: "http://www.xavieranguera.com/papers/icslp2004.pdf" },
    ],
  },
  {
    title: "Speech Recognition",
    pubs: [
      { text: 'Stolcke, A., Anguera, X., et al. (2007). "The SRI-ICSI Spring 2007 Meeting and Lecture Recognition System"', pdfUrl: "http://www.xavieranguera.com/papers/rt07_icsi.pdf" },
      { text: 'Janin, A., Stolcke, A., Anguera, X., et al. (2006). "The ICSI-SRI Spring 2006 Meeting Recognition System"', pdfUrl: "http://www.xavieranguera.com/papers/rt06s_icsi.pdf" },
    ],
  },
  {
    title: "Miscellaneous",
    pubs: [
      { text: 'Llimona, Q., Luque, J., Anguera, X., et al. (2015). "Effect of gender and call duration on customer satisfaction in call center big data", Interspeech 2015' },
      { text: 'Costa Pereira, J., Luque, J. & Anguera, X. (2014). "Sentiment Retrieval on Web Reviews Using Spontaneous Natural Speech", ICASSP 2014', pdfUrl: "http://www.xavieranguera.com/papers/cross_text_cc.pdf" },
      { text: 'Gonzalez, S. & Anguera, X. (2013). "Perceptually Inspired Features for Speaker Likability Classification", ICASSP 2013', pdfUrl: "http://www.xavieranguera.com/papers/Likability.pdf" },
    ],
  },
];

const TopicGroup = ({ topic }: { topic: Topic }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/50 transition-colors"
      >
        <span className="font-display text-sm font-bold text-foreground">
          {topic.title}
          <span className="ml-2 text-xs font-body font-normal text-muted-foreground">
            ({topic.pubs.length})
          </span>
        </span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <ul className="px-5 pb-4 space-y-3">
          {topic.pubs.map((p, i) => (
            <li key={i} className="text-sm font-body text-foreground/80 leading-relaxed pl-4 border-l-2 border-primary/30">
              {p.text}
              {p.pdfUrl && (
                <>
                  {" "}
                  <a
                    href={p.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-primary underline underline-offset-2 transition-colors"
                  >
                    [pdf]
                  </a>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const PublicationsSection = () => {
  const totalPubs = topics.reduce((sum, t) => sum + t.pubs.length, 0);

  return (
    <section id="publications" className="section-divider">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-foreground mb-2">Publications</h2>
        <p className="text-sm text-muted-foreground mb-8 font-body">
          A selection of {totalPubs}+ papers, loosely ordered by topics. Click a topic to expand.
        </p>
        <div className="space-y-3">
          {topics.map((t) => (
            <TopicGroup key={t.title} topic={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
