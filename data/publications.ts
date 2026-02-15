export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'conference' | 'journal' | 'workshop' | 'poster';
  doi?: string;
  url?: string;
  abstract?: string;
  citationMetrics?: {
    citationCount: number;
    influentialCitationCount?: number;
    lastUpdated: string;
    source: 'semantic-scholar' | 'manual' | 'google-scholar';
  };
  publicationMetrics?: {
    journalImpactFactor?: number;
    venue?: string;
  };
}

export const publications: Publication[] = [
  {
    "id": "pub-1",
    "title": "Intelligent Health Monitoring in 6G Networks: Machine Learning-Enhanced VLC-Based Medical Body Sensor Networks",
    "authors": [
      "Bilal Antaki",
      "Ahmed Hany Dalloul",
      "Farshad Miramirkhani"
    ],
    "venue": "Sensors",
    "year": 2025,
    "type": "journal",
    "doi": "10.3390/s25113280",
    "url": "https://www.mdpi.com/1424-8220/25/11/3280",
    "abstract": "Recent advances in Artificial Intelligence (AI)-driven wireless communication are driving the adoption of Sixth Generation (6G) technologies in crucial environments such as hospitals. Visible Light Communication (VLC) leverages existing lighting infrastructure to deliver high data rates while mitigating electromagnetic interference (EMI); however, patient movement induces fluctuating signal strength and dynamic channel conditions. In this paper, we present a novel integration of site-specific ray tracing and machine learning (ML) for VLC-enabled Medical Body Sensor Networks (MBSNs) channel modeling in distinct hospital settings. First, we introduce a Q-learning-based adaptive modulation scheme that meets target symbol error rates (SERs) in real time without prior environmental information. Second, we develop a Long Short-Term Memory (LSTM)-based estimator for path loss and Root Mean Square (RMS) delay spread under dynamic hospital conditions. To our knowledge, this is the first study combining ray-traced channel impulse response modeling (CIR) with ML techniques in hospital scenarios. The simulation results demonstrate that the Q-learning method consistently achieves SERs with a spectral efficiency (SE) lower than optimal near the threshold. Furthermore, LSTM estimation shows that D1 has the highest Root Mean Square Error (RMSE) for path loss (1.6797 dB) and RMS delay spread (1.0567 ns) in the Intensive Care Unit (ICU) ward, whereas D3 exhibits the highest RMSE for path loss (1.0652 dB) and RMS delay spread (0.7657 ns) in the Family-Type Patient Rooms (FTPRs) scenario, demonstrating high estimation accuracy under realistic conditions.",
    "citationMetrics": {
      "citationCount": 4,
      "influentialCitationCount": 0,
      "lastUpdated": "2026-02-15",
      "source": "semantic-scholar"
    },
    "publicationMetrics": {
      "journalImpactFactor": 3.5,
      "venue": "Sensors (MDPI)"
    }
  }
];
