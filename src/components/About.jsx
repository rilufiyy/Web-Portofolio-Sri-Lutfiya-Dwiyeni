import React from 'react';

const SKILL_GROUPS = [
  {
    title: 'LLM & Agentic AI',
    tags: ['LangChain', 'RAG', 'ABSA', 'Groq LPU', 'Multi-Agent Systems', 'Prompt Engineering', 'Sentence Transformers', 'Apache Airflow'],
  },
  {
    title: 'ML & Deep Learning',
    tags: ['PyTorch', 'TensorFlow / Keras', 'LSTM', 'GRU', 'CNN', 'BERTopic', 'UMAP', 'HDBSCAN', 'Scikit-learn', 'ONNX Runtime (GPU)'],
  },
  {
    title: 'Backend & Infrastructure',
    tags: ['FastAPI', 'Docker', 'asyncio', 'MinIO (S3)', 'Redis', 'SendGrid', 'APScheduler'],
  },
  {
    title: 'Databases',
    tags: ['PostgreSQL', 'MongoDB', 'Elasticsearch', 'FAISS', 'Vector Databases'],
  },
  {
    title: 'Speech & Multimodal',
    tags: ['Whisper', 'Pyannote', 'LayoutLMv3', 'Donut', 'BLIP-2', 'Gemini API'],
  },
  {
    title: 'Programming',
    tags: ['Python', 'SQL', 'MATLAB', 'Git', 'Streamlit', 'Jupyter'],
  },
];


const About = () => (
  <section id="about" className="section">
    <div className="container">
      <div className="section-header fade-in-section">
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about-wrap fade-in-section">
        <div className="about-body">
          <p>
            I am an <strong>AI Engineer</strong> with 1+ year of hands-on AI/ML experience,
            currently building and deploying large-scale AI systems for media intelligence at{' '}
            <span className="about-hl">NoLimit Indonesia</span>.
          </p>
          <p>
            I designed and shipped a <strong>4-agent LLM pipeline</strong>{' '}
            (Analyst → Insight → Auditor → PPT Service) processing{' '}
            <strong>100,000+ daily posts</strong> across 7 social media platforms using BERTopic
            semantic clustering (UMAP + HDBSCAN), dual-LLM inference (GPT-4o-mini + Qwen
            2.5-3B-Instruct), Elasticsearch async ETL, and Apache Airflow orchestration on{' '}
            <strong>NVIDIA L40S GPU infrastructure</strong>.
          </p>
          <p>
            Strong mathematical foundation —{' '}
            <span className="about-hl">S1 Matematika, Undip, GPA 3.60</span>. Hands-on expertise
            in Deep Learning (LSTM, GRU, CNN), NLP (ABSA, RAG, LangChain), and end-to-end
            deployment (FastAPI, Docker, MinIO, PostgreSQL). Author of a{' '}
            <strong>HAKI-registered patent</strong> on LSTM-GWO modeling (May 2025).
          </p>
        </div>

        <div className="skills-col">
          {SKILL_GROUPS.map((g, i) => (
            <div key={i} className="skill-group">
              <p className="sg-title">{g.title}</p>
              <div className="sg-tags">
                {g.tags.map((t, j) => (
                  <span key={j} className="sg-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
