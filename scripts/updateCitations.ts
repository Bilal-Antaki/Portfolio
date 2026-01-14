import { publications, Publication } from '../data/publications';
import { fetchCitationData } from '../lib/fetchCitationData';
import * as fs from 'fs';
import * as path from 'path';

// Delay function to respect rate limits (1 RPS)
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function updateCitationMetrics() {
  console.log('Starting citation metrics update...\n');

  const updatedPubs: Publication[] = [];

  for (const pub of publications) {
    if (!pub.doi) {
      console.log(`Skipping "${pub.title}" - no DOI available`);
      updatedPubs.push(pub);
      continue;
    }

    console.log(`Fetching citation data for: ${pub.title}`);
    console.log(`DOI: ${pub.doi}`);

    const metrics = await fetchCitationData(pub.doi);

    if (metrics) {
      console.log(`✓ Found ${metrics.citationCount} citations (${metrics.influentialCitationCount} influential)\n`);
      updatedPubs.push({
        ...pub,
        citationMetrics: metrics,
      });
    } else {
      console.log(`✗ No citation data found, keeping existing data\n`);
      updatedPubs.push(pub);
    }

    // Respect rate limit (1 RPS) - wait 1 second between requests
    await delay(1000);
  }

  // Generate the updated publications file content
  const fileContent = `export interface Publication {
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

export const publications: Publication[] = ${JSON.stringify(updatedPubs, null, 2)};
`;

  // Write the updated data back to publications.ts
  const filePath = path.join(process.cwd(), 'data', 'publications.ts');
  fs.writeFileSync(filePath, fileContent, 'utf-8');

  console.log('✓ Successfully updated publications.ts');
  console.log(`Updated ${updatedPubs.filter(p => p.citationMetrics).length} publications with citation data`);
}

updateCitationMetrics().catch(error => {
  console.error('Error updating citation metrics:', error);
  process.exit(1);
});
