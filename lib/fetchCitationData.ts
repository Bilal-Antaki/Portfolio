interface SemanticScholarPaper {
  paperId: string;
  title: string;
  citationCount: number;
  influentialCitationCount: number;
}

export interface CitationMetrics {
  citationCount: number;
  influentialCitationCount?: number;
  lastUpdated: string;
  source: 'semantic-scholar' | 'manual' | 'google-scholar';
}

export async function fetchCitationData(doi: string): Promise<CitationMetrics | null> {
  try {
    const response = await fetch(
      `https://api.semanticscholar.org/graph/v1/paper/DOI:${doi}?fields=citationCount,influentialCitationCount`,
      {
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      console.warn(`Failed to fetch citation data for DOI: ${doi}. Status: ${response.status}`);
      return null;
    }

    const data: SemanticScholarPaper = await response.json();

    return {
      citationCount: data.citationCount || 0,
      influentialCitationCount: data.influentialCitationCount || 0,
      lastUpdated: new Date().toISOString().split('T')[0],
      source: 'semantic-scholar',
    };
  } catch (error) {
    console.error(`Error fetching citation data for DOI ${doi}:`, error);
    return null;
  }
}
