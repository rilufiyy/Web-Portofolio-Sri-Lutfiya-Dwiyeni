import React, { useState } from 'react';

const WORK = [
  {
    role: 'Data Scientist Staff',
    org: 'NoLimit Indonesia',
    date: 'Mar 2024 – Present',
    location: 'Bandung, On-Site · Contract',
    type: 'work',
    points: [
      'Architected a production-grade 4-agent LLM pipeline (Analyst → Insight → Auditor → PPT Service) processing 100K+ daily social media posts across 7 platforms via async FastAPI backend.',
      'Integrated dual-LLM inference (GPT-4o-mini + local Qwen 2.5-3B-Instruct) for parallel topic labeling, sentiment reclassification, and contradiction narrative generation — cutting report time from ~3 hrs to under 30 min.',
      'Engineered Elasticsearch async ETL with BERTopic semantic clustering (UMAP + HDBSCAN) and GPU-accelerated ONNX embeddings. Deployed on NVIDIA L40S with Apache Airflow DAG orchestration.',
      'Shipped multi-format reports (PowerPoint, PDF) with automated daily delivery via SendGrid + APScheduler. Integrated Redis TTLCache & MinIO for artifact persistence and reduced redundant inference cost.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    org: 'Badan Pusat Statistik (BPS)',
    date: 'Jan – Feb 2024',
    location: 'Cirebon, On-Site',
    type: 'work',
    points: [
      'Produced 12 published infographics for the organization\'s website.',
      'Supported accurate payroll and asset reporting for 24 employees and 35 fixed assets using Excel.',
      'Performed comprehensive data analysis, reporting, and visualization on real-world government datasets.',
    ],
  },
];

const EDUCATION = [
  {
    role: 'AI & Machine Learning Bootcamp',
    org: 'Dibimbing.id',
    date: 'Sep 2025 – Mar 2026',
    location: 'Remote from Bandung',
    type: 'edu',
    points: [
      'Completed a 6-month intensive bootcamp covering ML, Deep Learning, NLP, Computer Vision, RAG systems, and MLOps with hands-on industry projects.',
      'Built conversational AI and RAG systems using LangChain, Vector Databases, LSTM, GRU, and HuggingFace Transformers.',
      'Built production-oriented MLOps pipelines with MLflow, FastAPI, Docker, PostgreSQL, and MongoDB.',
    ],
    awards: ['MVP Award', 'Best Final Project Award'],
  },
  {
    role: 'Machine Learning Cohort — MSIB Batch 7',
    org: 'Bangkit Academy (Google × Tokopedia × Gojek)',
    date: 'Sep – Dec 2024',
    location: 'Remote from Semarang',
    type: 'edu',
    points: [
      'Selected from 45,841 applicants; completed 4-month intensive curriculum in Python, Deep Learning, CNNs, NLP, Time Series, and Generative AI with four sessions per week.',
      'Capstone project: PlantPal — CNN-based plant disease detection app with TensorFlow, achieving 95.6% training and 97.2% validation accuracy.',
    ],
    awards: ['Top 50 / 644 Teams', 'Best Presenter Award'],
  },
  {
    role: 'Data Science for AI — MSIB Batch 6',
    org: 'Startup Campus',
    date: 'Feb – Jun 2024',
    location: 'Remote from Semarang',
    type: 'edu',
    points: [
      'Selected from 8,600+ applicants for an intensive Data Science for AI program.',
      'Studied SQL, NLP, ML (Supervised & Unsupervised), Time Series Forecasting, and Data Visualization using Looker Studio and Tableau.',
    ],
    awards: ['Best Participant', '1st out of 25 in study group'],
  },
  {
    role: 'Bachelor of Mathematics',
    org: 'Diponegoro University (Undip)',
    date: 'Aug 2021 – Apr 2025',
    location: 'Semarang, Central Java',
    type: 'edu',
    gpa: 'GPA 3.60 / 4.00',
    points: [
      'Published research paper in JOMTA (West Sulawesi University) on "Valorant Haven Strategy Using BIP and Weighted Graph".',
      'Finalist at Visual Quest Competition, Airlangga University — applied mathematics and data analysis.',
    ],
  },
];

const Experience = () => {
  const [tab, setTab] = useState('work');
  const items = tab === 'work' ? WORK : EDUCATION;

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header fade-in-section">
          <span className="section-label">Journey</span>
          <h2 className="section-title">Experience & Education</h2>
        </div>

        <div className="timeline-tabs fade-in-section">
          <button
            className={`t-tab${tab === 'work' ? ' active' : ''}`}
            onClick={() => setTab('work')}
          >
            Work Experience
          </button>
          <button
            className={`t-tab${tab === 'edu' ? ' active' : ''}`}
            onClick={() => setTab('edu')}
          >
            Education
          </button>
        </div>

        <div className="timeline fade-in-section">
          {items.map((item, i) => (
            <div key={i} className="tl-item">
              <div className={`tl-dot${item.type === 'edu' ? ' edu' : ''}`} />
              <div className="tl-card">
                <div className="tl-header">
                  <div>
                    <div className="tl-role">{item.role}</div>
                    <div className={`tl-org${item.type === 'edu' ? ' edu-color' : ''}`}>
                      {item.org}
                    </div>
                    {item.gpa && <span className="tl-gpa">{item.gpa}</span>}
                  </div>
                  <div className="tl-meta">
                    <span className="tl-date">{item.date}</span>
                    <span className="tl-location">{item.location}</span>
                  </div>
                </div>
                <ul className="tl-points">
                  {item.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
                {item.awards && (
                  <div className="tl-awards">
                    {item.awards.map((a, j) => (
                      <span key={j} className="tl-award">🏆 {a}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
