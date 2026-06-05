import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const PROJECTS = [
  {
    title: 'MeetRecall AI',
    category: 'AI / LLM',
    desc: 'End-to-end AI meeting intelligence system: FastAPI async processing, Whisper-small + Pyannote 3.1 transcription & diarization, FAISS semantic search, Qwen2-0.5B-Instruct RAG chatbot, HDBSCAN topic clustering, and CardiffNLP RoBERTa speaker sentiment.',
    tech: ['FastAPI', 'Whisper', 'Pyannote 3.1', 'FAISS', 'Qwen2', 'HDBSCAN', 'asyncio'],
    link: 'https://github.com/rilufiyy/MeetRecall-AI-Improvement',
  },
  {
    title: 'Intelligent Customer Assistant',
    category: 'AI / LLM',
    desc: 'High-performance chatbot backend using FastAPI and Groq LPU inference engine for ultra-low latency LLM responses. Orchestrates complex multi-turn dialogue flows via LangChain with RAG for grounded, hallucination-free answers.',
    tech: ['FastAPI', 'Groq LPU', 'LangChain', 'RAG', 'Vector DB', 'asyncio'],
    link: 'https://github.com/rilufiyy/Intelligent-Customer-Assistant',
  },
  {
    title: 'SmartSplit Bill AI',
    category: 'AI / LLM',
    desc: 'AI-powered receipt parsing & bill splitting web app using Donut (OCR-free Transformer), LayoutLMv3 (multimodal document model), and Gemini API. Containerized with Docker for reproducible deployment.',
    tech: ['Streamlit', 'Docker', 'Donut', 'LayoutLMv3', 'Gemini API'],
    link: 'https://github.com/rilufiyy/Smart-Split-Bill-Assistant',
  },
  {
    title: 'Personalized SmartShopper',
    category: 'AI / LLM',
    desc: 'Personalized e-commerce AI assistant leveraging RAG for context-aware product recommendations and conversational search with natural language understanding and semantic retrieval.',
    tech: ['LangChain', 'RAG', 'Vector DB', 'FastAPI', 'Python'],
    link: 'https://github.com/rilufiyy/Personalized-SmartShopper-Assistant',
  },
  {
    title: 'Clinical Research RAG Chatbot',
    category: 'AI / LLM',
    desc: 'Domain-specific RAG mini chatbot for clinical research literature using vector embeddings and semantic search to provide grounded, hallucination-free answers from medical documents.',
    tech: ['RAG', 'Embeddings', 'LangChain', 'FAISS', 'Python'],
    link: 'https://github.com/rilufiyy/Clinical-Research-RAG-Mini-Chatbot',
  },
  {
    title: 'MLOps Model Monitoring',
    category: 'MLOps',
    desc: 'Production ML monitoring pipeline with data drift detection, performance metrics dashboards, and automated alerting for real-time model health tracking in production environments.',
    tech: ['MLflow', 'Evidently', 'Docker', 'FastAPI', 'PostgreSQL'],
    link: 'https://github.com/rilufiyy/MLOps-Model-Monitoring',
  },
  {
    title: 'Indonesian NER with BERT',
    category: 'NLP',
    desc: 'Named Entity Recognition for Indonesian language using BERT fine-tuned on the IndoNLU benchmark dataset, achieving high F1-scores across person (PER), location (LOC), and organization (ORG) entity classes.',
    tech: ['BERT', 'HuggingFace', 'PyTorch', 'IndoNLU', 'Transformers'],
    link: 'https://github.com/rilufiyy/Indonesian-NER-BERT-IndoNLU',
  },
  {
    title: 'DNN-GWO Sentiment Analysis',
    category: 'NLP',
    desc: 'Indonesian sentiment analysis using Deep Neural Networks with Grey Wolf Optimizer (GWO) for hyperparameter optimization. Related to the registered HAKI Patent (May 2025) for LSTM-GWO modeling.',
    tech: ['PyTorch', 'DNN', 'GWO', 'NLP', 'Python'],
    link: 'https://github.com/rilufiyy/DNN-GWO-for-Indonesian-Sentiment-Analysis',
  },
  {
    title: 'Video Captioning with BLIP-2',
    category: 'Computer Vision',
    desc: 'Automatic video caption generation leveraging BLIP-2 multimodal transformer model from Hugging Face to generate rich, descriptive captions from video frame sequences.',
    tech: ['BLIP-2', 'HuggingFace', 'PyTorch', 'Transformers', 'Python'],
    link: 'https://github.com/rilufiyy/Video-Captioning-using-BLIP-2-Hugging-Face-Model',
  },
  {
    title: 'PlantPal ML',
    category: 'Computer Vision',
    desc: 'CNN-based plant disease detection mobile app achieving 95.6% training and 97.2% validation accuracy. Deployed via TensorFlow.js for real-time diagnosis on mobile devices. Bangkit Academy capstone — Top 50 / 644 teams.',
    tech: ['CNN', 'TensorFlow', 'Keras', 'TensorFlow.js', 'MobileNet'],
    link: 'https://github.com/rilufiyy/PlantPal-ML',
  },
  {
    title: 'LSTM-GWO Temperature Prediction',
    category: 'ML / DL',
    desc: 'Average temperature time-series prediction using LSTM neural networks optimized with Grey Wolf Optimizer (GWO) for weight tuning, reducing RMSE vs. standard training. HAKI Patent registered May 2025.',
    tech: ['LSTM', 'GWO', 'PyTorch', 'Time Series', 'Python'],
    link: 'https://github.com/rilufiyy/LSTM-GWO-for-Average-Temperature-Prediction',
  },
  {
    title: 'Decision Tree + Optuna & Lévy',
    category: 'ML / DL',
    desc: 'Hybrid hyperparameter optimization combining Optuna pruning-based search and Lévy Flight exploration for diabetes classification, improving convergence speed and model accuracy.',
    tech: ['Optuna', 'Lévy Flight', 'Decision Tree', 'Scikit-learn', 'Python'],
    link: 'https://github.com/rilufiyy/Decision-Tree-with-Combined-Optuna-and-Levy-Flight-for-Diabetes-Classification',
  },
  {
    title: 'Decision Tree + Optuna',
    category: 'ML / DL',
    desc: 'Decision tree hyperparameter optimization using Optuna framework with automated trial management, TPE sampler, and pruning for efficient search across large hyperparameter spaces.',
    tech: ['Optuna', 'Decision Tree', 'Scikit-learn', 'TPE', 'Python'],
    link: 'https://github.com/rilufiyy/Hyperparameter-Optimization-for-Decision-Trees-Using-Optuna',
  },
  {
    title: 'Decision Tree + HyperOpt',
    category: 'ML / DL',
    desc: 'Decision tree hyperparameter search using HyperOpt with Tree-structured Parzen Estimator (TPE) algorithm for Bayesian optimization with minimal function evaluations.',
    tech: ['HyperOpt', 'Decision Tree', 'TPE', 'Bayesian Opt.', 'Python'],
    link: 'https://github.com/rilufiyy/Hyperparameter-Optimization-of-Decision-Tree-using-HyperOpt',
  },
  {
    title: 'LRFMC Customer Segmentation',
    category: 'Data Science',
    desc: 'Customer value segmentation using the LRFMC model (Length, Recency, Frequency, Monetary, Cost) with K-Means clustering to identify high-value segments and drive targeted marketing strategies.',
    tech: ['K-Means', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Python'],
    link: 'https://github.com/rilufiyy/LRFMC-Customer-Segmentation-KMeans',
  },
  {
    title: 'K-Means RFM Segmentation',
    category: 'Data Science',
    desc: 'Customer segmentation using K-Means on RFM (Recency, Frequency, Monetary) model for a UK E-Commerce dataset to identify distinct customer groups for data-driven marketing decisions.',
    tech: ['K-Means', 'RFM Analysis', 'Pandas', 'Seaborn', 'Scikit-learn'],
    link: 'https://github.com/rilufiyy/Cluster-Analysis-Using-the-K-Means-Method-for-RFM-Customer-Segmentation-in-a-UK-E-Commerce-Case',
  },
];

const CATEGORIES = ['All', 'AI / LLM', 'NLP', 'ML / DL', 'Data Science', 'Computer Vision', 'MLOps'];

const Projects = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === active);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header fade-in-section" style={{ textAlign: 'center' }}>
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            {PROJECTS.length} projects spanning LLM agents, NLP, ML, computer vision, and data science.
          </p>
        </div>

        <div className="filter-tabs fade-in-section">
          {CATEGORIES.map(cat => {
            const count = cat === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.category === cat).length;
            return (
              <button
                key={cat}
                className={`f-tab${active === cat ? ' active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        <div className="projects-grid fade-in-section">
          {filtered.map((p, i) => (
            <div key={i} className="project-card">
              <div className="project-head">
                <span className="project-cat">{p.category}</span>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-gh"
                  aria-label={`GitHub: ${p.title}`}
                >
                  <FaGithub size={18} />
                </a>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">
                {p.tech.map((t, j) => (
                  <span key={j} className="tech-tag">{t}</span>
                ))}
              </div>
              <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                View on GitHub <FaExternalLinkAlt size={11} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
