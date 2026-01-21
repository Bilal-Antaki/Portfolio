'use client';

import { motion } from 'framer-motion';
import { publications } from '@/data/publications';
import { HiExternalLink, HiAcademicCap } from 'react-icons/hi';

export default function Publications() {
  return (
    <section id="publications" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Publications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Research contributions and academic publications
          </p>
        </motion.div>

        {publications.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <p className="text-neutral-500 text-lg">
              Publications coming soon. Add your publications in the data/publications.ts file.
            </p>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2 flex-wrap">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                        {pub.type}
                      </span>
                      <span className="text-sm text-neutral-500 font-medium">
                        {pub.year}
                      </span>
                      {pub.citationMetrics && pub.citationMetrics.citationCount >= 0 && (
                        <motion.span
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-full cursor-help hover:bg-emerald-100 transition-colors"
                          title={`${pub.citationMetrics.citationCount} citations from ${pub.citationMetrics.source}${pub.citationMetrics.influentialCitationCount ? ` (${pub.citationMetrics.influentialCitationCount} influential)` : ''}. Last updated: ${pub.citationMetrics.lastUpdated}`}
                        >
                          <HiAcademicCap className="w-3 h-3" />
                          <span>{pub.citationMetrics.citationCount} Citations</span>
                        </motion.span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {pub.title}
                    </h3>

                    <p className="text-neutral-600 mb-2">
                      {pub.authors.join(', ')}
                    </p>

                    <p className="text-neutral-500 italic mb-2">
                      {pub.venue}
                    </p>

                    {pub.publicationMetrics?.journalImpactFactor && (
                      <p className="text-neutral-600 text-sm mb-3">
                        <span>IF: {pub.publicationMetrics.journalImpactFactor}</span>
                      </p>
                    )}

                    {pub.abstract && (
                      <p className="text-neutral-600 text-sm mb-3">
                        {pub.abstract}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-3">
                      {pub.url && (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:text-primary-dark font-medium text-sm transition-colors"
                        >
                          View Publication
                          <HiExternalLink className="ml-1" />
                        </a>
                      )}
                      {pub.doi && (
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:text-primary-dark font-medium text-sm transition-colors"
                        >
                          DOI: {pub.doi}
                          <HiExternalLink className="ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
