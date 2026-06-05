import React from 'react';

const AWARDS = [
  {
    icon: '📄',
    title: 'HAKI Patent — LSTM Deep Learning with GWO Algorithm',
    org: 'Direktorat Jenderal Kekayaan Intelektual',
    date: 'May 2025',
    color: 'cyan',
  },
  {
    icon: '🏆',
    title: 'MVP Award & Best Final Project',
    org: 'Dibimbing.id — AI & Machine Learning Bootcamp',
    date: 'Mar 2026',
    color: 'gold',
  },
  {
    icon: '🎖️',
    title: 'Top 50 out of 644 Teams & Best Presenter',
    org: 'Bangkit Academy 2024 (Google × Tokopedia × Gojek)',
    date: 'Dec 2024',
    color: 'purple',
  },
  {
    icon: '🥇',
    title: 'Best Participant — Ranked 1st out of 25',
    org: 'Startup Campus — Data Science for AI (MSIB Batch 6)',
    date: 'Jun 2024',
    color: 'gold',
  },
  {
    icon: '🏅',
    title: 'Finalist — Visual Quest Competition (Dataquest 3.0)',
    org: 'Airlangga University — Airnology 3.0',
    date: 'Sep 2024',
    color: 'purple',
  },
  {
    icon: '🥈',
    title: 'Silver Medal — Mathematics Science Olympiad (ISSO 3)',
    org: 'Indonesian Mathematics Students Science Olympiad',
    date: 'Feb 2021',
    color: 'cyan',
  },
];

const colorMap = {
  gold:   { bg: 'rgba(251, 191, 36, 0.07)', border: 'rgba(251, 191, 36, 0.2)', dot: '#fbbf24' },
  purple: { bg: 'rgba(168, 85, 247, 0.07)', border: 'rgba(168, 85, 247, 0.2)', dot: '#a855f7' },
  cyan:   { bg: 'rgba(6, 182, 212, 0.07)',  border: 'rgba(6, 182, 212, 0.2)',  dot: '#06b6d4' },
};

const Awards = () => (
  <section id="awards" className="section">
    <div className="container">
      <div className="section-header fade-in-section">
        <h2 className="section-title">Honors &amp; Awards</h2>
      </div>
      <div className="awards-grid fade-in-section">
        {AWARDS.map((a, i) => {
          const c = colorMap[a.color];
          return (
            <div
              key={i}
              className="award-card"
              style={{ background: c.bg, borderColor: c.border }}
            >
              <div className="award-card-top">
                <span className="award-icon">{a.icon}</span>
                <span className="award-date" style={{ color: c.dot }}>{a.date}</span>
              </div>
              <h3 className="award-title">{a.title}</h3>
              <p className="award-org">{a.org}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Awards;
