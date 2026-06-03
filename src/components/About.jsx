import React from 'react';

const About = () => {
  return (
    <section id="about" className="section container">
      <h2 className="section-title">
        <span className="text-gradient">01.</span> About Me
      </h2>
      <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <p>
          I am an <strong>AI Engineer</strong> with a strong mathematical foundation (B.Sc. Mathematics, Undip, GPA 3.60) and over a year of production experience building and deploying large-scale AI systems for media intelligence.
        </p>
        <p>
          Recently, I have been focused on architecting end-to-end <strong>Agentic LLM pipelines</strong>, implementing Aspect-Based Sentiment Analysis (ABSA), and deploying asynchronous FastAPI backends with Apache Airflow orchestration on NVIDIA GPU infrastructure.
        </p>
        <p>
          My technical expertise spans across Deep Learning, NLP, Computer Vision, and MLOps. I thrive in environments where I can build intelligent systems from research all the way to production deployment.
        </p>
        
        <div>
          <h3 style={{ marginTop: '20px', marginBottom: '15px', fontSize: '1.2rem', color: 'var(--accent-color)' }}>Technical Skills</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <span className="badge">Python</span>
            <span className="badge">SQL</span>
            <span className="badge">Docker</span>
            <span className="badge">FastAPI</span>
            <span className="badge">PyTorch</span>
            <span className="badge">TensorFlow</span>
            <span className="badge">LangChain</span>
            <span className="badge">Retrieval-Augmented Generation (RAG)</span>
            <span className="badge">Agentic AI</span>
            <span className="badge">Elasticsearch</span>
            <span className="badge">PostgreSQL</span>
            <span className="badge">Apache Airflow</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
