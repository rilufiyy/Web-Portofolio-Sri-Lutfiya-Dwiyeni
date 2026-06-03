import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "MeetRecall AI",
      category: "Intelligent Meeting Transcription & Analysis System",
      date: "Feb 2026",
      description: "Architected an end-to-end AI meeting intelligence system using FastAPI with asynchronous processing to handle multi-format audio/video ingestion, transcription, diarization, and analytics without blocking user interactions.",
      techStack: ["FastAPI", "Whisper-small", "Pyannote 3.1", "FAISS", "Qwen2-0.5B-Instruct", "HDBSCAN"],
      link: "#"
    },
    {
      title: "Intelligent Customer Assistant Chatbot",
      category: "AI and Machine Learning",
      date: "Jan 2026",
      description: "Engineered a high-performance chatbot backend using FastAPI and Groq's LPU inference engine to execute LLM queries with ultra-low latency. Orchestrated complex dialogue flows using LangChain and RAG for hallucination-free answers.",
      techStack: ["FastAPI", "Groq LPU", "LangChain", "RAG", "Vector Databases"],
      link: "#"
    },
    {
      title: "SmartSplit Bill AI",
      category: "Intelligent Receipt Parsing & Bill Splitting System",
      date: "Jan 2026",
      description: "Built a web-based bill splitting application using Streamlit. Implemented AI-powered document understanding pipelines leveraging Donut (OCR-free Transformer), LayoutLMv3, and Gemini API.",
      techStack: ["Streamlit", "Docker", "Donut", "LayoutLMv3", "Gemini API"],
      link: "#"
    },
    {
      title: "PlantPal App",
      category: "CNN Model For Plant Disease Detection",
      date: "Oct – Dec 2024",
      description: "Developed an AI-powered mobile application to identify plant diseases, provide tailored care plans, and offer expert tips. Built and trained a CNN model achieving 95.6% training accuracy.",
      techStack: ["Keras", "TensorFlow", "TensorFlow.js"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section container">
      <h2 className="section-title">
        <span className="text-gradient">03.</span> Featured Projects
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {projects.map((project, index) => (
          <div key={index} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '5px', color: '#fff' }}>{project.title}</h3>
            <span style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginBottom: '15px', fontWeight: 600 }}>{project.category}</span>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', flex: 1 }}>{project.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
              {project.techStack.map((tech, idx) => (
                <span key={idx} style={{ 
                  fontSize: '0.75rem', 
                  padding: '2px 8px', 
                  background: 'rgba(255,255,255,0.05)', 
                  borderRadius: '4px',
                  color: '#e2e8f0'
                }}>
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} className="btn-primary" style={{ textAlign: 'center', padding: '8px 16px', fontSize: '0.9rem' }}>
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
