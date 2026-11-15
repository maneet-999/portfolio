import abAudit from '../assets/projects/ab-audit.svg';
import earnings from '../assets/projects/earnings.svg';
import searchIntent from '../assets/projects/search-intent.svg';
import dsAgent from '../assets/projects/ds-agent.svg';
import codebaseQa from '../assets/projects/codebase-qa.svg';

// liveUrl / repoUrl are optional. Cards only render the buttons that have a URL.
export const projectData = [
    {
        title: 'AB Audit',
        description: 'Statistical validity engine for A/B experiments: 8 validity checks, CUPED variance reduction, Monte Carlo peeking simulation and Bayesian Beta-Binomial analysis.',
        imageUrl: abAudit,
        repoUrl: 'https://github.com/maneet-999/ab-audit',
        tags: ['Python', 'SciPy', 'Streamlit', 'Statistics'],
    },
    {
        title: 'Earnings Call Deception Detector',
        description: 'Scrapes SEC EDGAR transcripts, builds 16 NLP features and scores deception risk with XGBoost + SHAP. PR-AUC 0.94 on 74 samples.',
        imageUrl: earnings,
        repoUrl: 'https://github.com/maneet-999/earnings-deception-detector',
        tags: ['XGBoost', 'SHAP', 'FinBERT', 'FastAPI', 'MLflow'],
    },
    {
        title: 'Search Query Intent & Opportunity Scoring',
        description: 'Embeddings + clustering on 8,000+ search queries, then an opportunity-scoring model that lifted Precision@50 from 0.24 to 0.72. FlyRank capstone.',
        imageUrl: searchIntent,
        repoUrl: 'https://github.com/maneet-999',
        tags: ['Embeddings', 'Clustering', 'scikit-learn'],
    },
    {
        title: 'DS Automation Agent',
        description: 'Upload a CSV and get statistical profiling, LLM-planned cleaning, EDA, ML recommendations and a PDF report.',
        imageUrl: dsAgent,
        repoUrl: 'https://github.com/maneet-999',
        tags: ['FastAPI', 'Streamlit', 'Groq', 'Pandas'],
    },
    {
        title: 'Codebase Q&A (RAG)',
        description: 'Ask questions about any repo: AST-aware chunking, hybrid BM25 + dense retrieval with RRF, cross-encoder reranking, self-correction and an eval harness.',
        imageUrl: codebaseQa,
        repoUrl: 'https://github.com/maneet-999',
        tags: ['ChromaDB', 'BM25', 'Sentence Transformers', 'Docker', 'MLflow'],
    },
];
