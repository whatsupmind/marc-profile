import React, { useState } from 'react'

// =============================================================
// PLAYER PROFILE — Marc McGinley
// Rainbow & Unicorns theme
// =============================================================

const player = {
  name: '✨ MARC MCGINLEY ✨',
  title: '🦄 GAME DIRECTOR / TOKENOMICS',
  guild: '🌈 ANIMOCA BRANDS',
  level: 47,
  xp: 7210,
  xpMax: 10000,
  hp: 88,
  hpMax: 100,
  mp: 72,
  mpMax: 100,
  stats: { atk: 78, def: 64, spd: 82, lck: 91 },
}

const quests = [
  {
    title: '🌟 NOW PLAYING',
    role: 'GAME DIRECTOR / TOKENOMICS',
    guild: 'ANIMOCA BRANDS',
    period: '2022 → PRESENT',
    desc: 'Advises portfolio teams on gameplay, tokenomics and game economies for web3 titles.',
    tags: ['WEB3', 'TOKENOMICS', 'NFT', 'GAME DESIGN'],
    completed: false,
    icon: '▶',
  },
  {
    title: '🏆 COMPLETED',
    role: 'LEAD SYSTEMS DESIGNER',
    guild: 'QUANTIC DREAM — STAR WARS: ECLIPSE',
    period: 'PRIOR',
    desc: 'Led systems design on the highly anticipated Star Wars action-adventure.',
    tags: ['SYSTEMS DESIGN', 'AAA', 'ACTION-ADVENTURE'],
    completed: true,
    icon: '✓',
  },
  {
    title: '🏆 COMPLETED',
    role: 'SENIOR GAME DESIGNER',
    guild: 'UBISOFT',
    period: 'PRIOR',
    desc: 'Contributed to Far Cry 6 and Rainbow 6: Quarantine.',
    tags: ['AAA', 'FPS', 'OPEN WORLD'],
    completed: true,
    icon: '✓',
  },
]

const inventory = [
  { icon: '🎮', label: 'WEB3 GAMES' },
  { icon: '🪙', label: 'TOKENOMICS' },
  { icon: '🤖', label: 'AI AGENTS' },
  { icon: '🌌', label: 'VR' },
  { icon: '📱', label: 'MOBILE' },
  { icon: '🛡️', label: 'AAA' },
  { icon: '⚔️', label: 'F2P' },
  { icon: '🧩', label: 'SYSTEMS' },
]

const achievements = [
  { icon: '🎤', text: 'Consensus 2023 Speaker — "Crypto Games That Don\'t Suck"' },
  { icon: '🌍', text: '16+ years across mobile, F2P, VR & web3' },
  { icon: '🏆', text: 'Shipped Far Cry 6 + Rainbow 6: Quarantine at Ubisoft' },
  { icon: '⭐', text: 'Led systems on Star Wars: Eclipse at Quantic Dream' },
]

function HpBar({ value, max, cls = 'hp' }) {
  const pct = Math.min(100, Math.round((value / max) * 100))
  return (
    <div className="stat-bar pixel">
      <div className={`stat-fill ${cls}`} style={{ width: `${pct}%` }} />
    </div>
  )
}

function StatBar({ label, value, cls }) {
  return (
    <div className="stat-row">
      <span className="stat-label">{label}</span>
      <HpBar value={value} cls={cls} />
      <span className="stat-value">{value}/100</span>
    </div>
  )
}

function App() {
  return (
    <div className="container">
      {/* === Top rainbow banner === */}
      <div className="banner" role="status">
        <span>🦄 PLAYER ONLINE</span>
        <span className="blink">✨ PRESS [START] TO BEGIN ✨</span>
        <span>v1.0.0 🌈</span>
      </div>

      <div className="screen">
        <h1 className="header">🦄 CHARACTER FILE 🌈</h1>

        {/* === Hero / Player Card === */}
        <section className="hero" aria-label="Player card">
          <div className="avatar-wrap">
            <span className="spark s1">✨</span>
            <span className="spark s2">💖</span>
            <span className="spark s3">⭐</span>
            <span className="spark s4">🌟</span>
            <span className="spark s5">💫</span>
            <div className="avatar-inner">
              <img
                className="avatar"
                src="/marc.jpg"
                alt="Portrait of Marc McGinley"
                width="132"
                height="132"
              />
            </div>
          </div>

          <div className="player-info">
            <h2 className="name">{player.name}</h2>
            <p className="class-line">{player.title}</p>
            <p className="role-line">⚔ GUILD: {player.guild} &nbsp; 📍 IRELAND</p>

            {/* === Level & XP === */}
            <div className="stat-row" style={{ marginTop: 8 }}>
              <span className="stat-label">LVL {player.level}</span>
              <div className="stat-bar pixel">
                <div
                  className="stat-fill xp"
                  style={{ width: `${(player.xp / player.xpMax) * 100}%` }}
                />
              </div>
              <span className="stat-value">
                {player.xp}/{player.xpMax}
              </span>
            </div>

            {/* === HP / MP === */}
            <div className="stats">
              <div className="stat-row">
                <span className="stat-label">HP</span>
                <HpBar value={player.hp} max={player.hpMax} cls="hp" />
                <span className="stat-value">
                  {player.hp}/{player.hpMax}
                </span>
              </div>
              <div className="stat-row">
                <span className="stat-label">MP</span>
                <HpBar value={player.mp} max={player.mpMax} cls="mp" />
                <span className="stat-value">
                  {player.mp}/{player.mpMax}
                </span>
              </div>
              <StatBar label="ATK" value={player.stats.atk} cls="atk" />
              <StatBar label="DEF" value={player.stats.def} cls="def" />
              <StatBar label="SPD" value={player.stats.spd} cls="spd" />
              <StatBar label="LCK" value={player.stats.lck} cls="lck" />
            </div>
          </div>
        </section>

        {/* === Bio === */}
        <section className="section">
          <span className="section-title">🌸 BIOGRAPHY</span>
          <p style={{ marginTop: 14 }}>
            <em>Marc</em> has spent 16+ years at the cutting edge of the game industry —
            from mobile and free-to-play, to VR, to web3. Today he designs token systems and
            gameplay loops that give players true ownership of their progression. 💖
          </p>
        </section>

        {/* === Quest log === */}
        <section className="section">
          <span className="section-title">⚔ QUEST LOG</span>
          <div style={{ marginTop: 14 }}>
            {quests.map((q) => (
              <article key={q.title + q.guild} className="quest">
                <div className={`quest-icon ${q.completed ? 'quest-completed' : ''}`}>
                  {q.icon}
                </div>
                <div>
                  <p className="quest-title">{q.title}</p>
                  <p className="quest-meta">
                    {q.role} — {q.guild}
                  </p>
                  <p className="quest-desc">{q.desc}</p>
                  <div className="quest-tags">
                    {q.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                    <span className="tag period">{q.period}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* === Inventory === */}
        <section className="section">
          <span className="section-title">🎁 INVENTORY</span>
          <p style={{ marginTop: 12 }}>Equipped skills &amp; domains. Hover a slot! ✨</p>
          <div className="inventory">
            {inventory.map((item) => (
              <div key={item.label} className="inv-slot" title={item.label}>
                <span className="inv-icon">{item.icon}</span>
                <span className="inv-label">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* === Achievements === */}
        <section className="section">
          <span className="section-title">🏆 ACHIEVEMENTS</span>
          <div className="achievements" style={{ marginTop: 14 }}>
            {achievements.map((a) => (
              <div key={a.text} className="achievement">
                <span className="badge">{a.icon}</span>
                <span>{a.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* === Action buttons === */}
        <section className="section">
          <span className="section-title">💌 CONNECT</span>
          <div className="actions">
            <a className="btn" href="https://x.com/marcmcg" target="_blank" rel="noreferrer">
              🐦 X / TWITTER <span className="key">A</span>
            </a>
            <a
              className="btn"
              href="https://www.linkedin.com/in/marcmcginley"
              target="_blank"
              rel="noreferrer"
            >
              💼 LINKEDIN <span className="key">B</span>
            </a>
            <a
              className="btn"
              href="https://www.animocabrands.com"
              target="_blank"
              rel="noreferrer"
            >
              🌐 ANIMOCA <span className="key">C</span>
            </a>
          </div>
        </section>

        {/* === Save point === */}
        <div className="save-point">
          <span className="blink">⭐</span> PROFILE SAVED AT {new Date().toISOString().slice(0, 10)}{' '}
          <span className="blink">⭐</span>
        </div>
      </div>

      <p className="footer">
        © {new Date().getFullYear()} —{' '}
        <span>MADE WITH 🦄 MAGIC &amp; 🌈 PIXELS</span> — NOT AN OFFICIAL ANIMOCA BRANDS PAGE
      </p>
    </div>
  )
}

export default App
