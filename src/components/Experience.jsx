import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Data Scientist",
      company: "NoLimit Indonesia",
      date: "Mar 2024 – Present",
      location: "Bandung, On-Site",
      points: [
        "Architected a production-grade 4-agent LLM pipeline for automated media intelligence reporting, processing 100,000+ daily social media posts via async FastAPI backend.",
        "Developed and deployed LLM-powered RAG chatbot systems for enterprise clients.",
        "Integrated dual-LLM inference (GPT-4o-mini + local Qwen 2.5-3B-Instruct) for parallel topic labeling and sentiment reclassification, cutting manual report compilation time from ~3 hours to under 30 minutes.",
        "Engineered Elasticsearch async ETL pipeline with BERTopic semantic clustering and GPU-accelerated ONNX embeddings.",
        "Deployed on NVIDIA L40S GPU cluster with Apache Airflow DAG orchestration."
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "Badan Pusat Statistik (BPS)",
      date: "Jan 2024 – Feb 2024",
      location: "Cirebon, On-Site",
      points: [
        "Produced 12 published infographics for the organization's website.",
        "Supported accurate payroll and asset reporting for 24 employees and 35 fixed assets using Excel.",
        "Performed comprehensive data analysis, reporting, and visualization on real-world government datasets."
      ]
    }
  ];

  return (
    <section id="experience" className="section container">
      <h2 className="section-title">
        <span className="text-gradient">02.</span> Working Experience
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {experiences.map((exp, index) => (
          <div key={index} className="glass-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '15px' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{exp.role}</h3>
                <h4 style={{ color: 'var(--accent-color)', fontSize: '1.2rem', fontWeight: 600 }}>{exp.company}</h4>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ color: 'var(--text-secondary)', display: 'block' }}>{exp.date}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{exp.location}</span>
              </div>
            </div>
            <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
