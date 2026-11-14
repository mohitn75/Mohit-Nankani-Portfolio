import { useEffect, useState } from 'react'

const jobs = [
  { company:'Microsoft', role:'Software Engineer II · L62', dates:'Mar 2026 — Present', place:'Hyderabad, India', summary:'Working on security and abuse-prevention experiences across Microsoft collaboration products.', bullets:['Contributing to a SharePoint-authenticated file workflow as part of a security-focused engineering project.'], tags:['C#','Java','React','Distributed systems','Security'] },
  { company:'New Relic', role:'Software Engineer II', dates:'Aug 2024 — Feb 2026', place:'Hyderabad, India', summary:'Built distributed database, streaming, and search infrastructure for large-scale observability workloads.', bullets:['Improved service availability from 99.9% to 99.99%.','Designed disaster-recovery backup and restore workflows for approximately 2.5 TB of data in 45 minutes.','Worked on Kafka multi-region ingestion handling approximately 60 million records per minute.','Built CDC and intent processing at approximately 3.5 million requests per second into Apache Paimon using Debezium.','Contributed to vector and hybrid search systems processing approximately 1 million tokens per minute.'], tags:['Java','Spring Boot','Kafka','GraphQL','Debezium','Apache Paimon','AWS'] },
  { company:'Deutsche Bank', role:'Full-Stack Developer · Associate', dates:'Jul 2021 — Aug 2024', place:'Pune, India', summary:'Delivered enterprise risk-management and control-monitoring platforms used by teams around the world.', bullets:['Built an Operational Risk Management System processing approximately 2.5 million records per month.','Developed a Global Finding Management System used by approximately 11,000 users.','Built React and TypeScript dashboards and contributed to cloud-native delivery on GCP and Kubernetes.'], tags:['Java','Spring Boot','React','TypeScript','GCP','Kubernetes','PostgreSQL'] }
]
const projects = [
  {n:'01',kind:'SECURITY · PRODUCT ENGINEERING',title:'Authenticated file security workflow',desc:'A secure file-processing workflow built around SharePoint authentication, designed to support protection and analysis across collaboration experiences.',outcome:'Security engineering at product scale',stack:['SharePoint','Authentication','Backend services']},
  {n:'02',kind:'STREAMING · DATA INFRASTRUCTURE',title:'Multi-region streaming ingestion',desc:'Kafka-based ingestion and CDC pipelines with multi-region processing, concurrent data changes, and Apache Paimon as a lakehouse destination.',outcome:'~60M records / minute',stack:['Kafka','Debezium','Apache Paimon','Java']},
  {n:'03',kind:'SEARCH · AI INFRASTRUCTURE',title:'Hybrid semantic retrieval',desc:'A retrieval approach combining vector similarity and full-text search, with Reciprocal Rank Fusion to bring multiple relevance signals together.',outcome:'~1M tokens / minute',stack:['Vector search','PostgreSQL','RRF','Embeddings']},
  {n:'04',kind:'ENTERPRISE · FULL STACK',title:'Global risk & controls platform',desc:'Enterprise applications for operational risk profiling, reporting, analytics, and global control-finding workflows.',outcome:'~11K users · 2.5M records/month',stack:['Java','Spring Boot','React','PostgreSQL']}
]
const groups = [
  ['LANGUAGES',['Java','TypeScript','JavaScript','Python','C++']],
  ['BACKEND & APIs',['Spring Boot','GraphQL','REST','OAuth 2.0']],
  ['DATA & STREAMING',['YugabyteDB','PostgreSQL','Kafka','Redis','Elasticsearch','Debezium','Apache Paimon']],
  ['CLOUD & PLATFORM',['AWS','GCP','Kubernetes','Terraform','ArgoCD','Airflow']],
  ['FRONTEND',['React','HTML','CSS']]
] as const

export default function App(){
  const [dark,setDark]=useState(true)
  const [menu,setMenu]=useState(false)
  useEffect(()=>{document.documentElement.dataset.theme=dark?'dark':'light'},[dark])
  const links=['About','Experience','Projects','Skills','Recognition','Contact']
  const jump=(id:string)=>{setMenu(false);document.getElementById(id.toLowerCase())?.scrollIntoView({behavior:'smooth'})}
  return <div className="shell">
    <header className="topbar"><a className="brand" href="#about"><b>MN</b> MOHIT NANKANI</a>
      <nav className={menu?'nav open':'nav'}>{links.map(x=><button key={x} onClick={()=>jump(x)}>{x}</button>)}</nav>
      <div className="actions"><button className="theme" onClick={()=>setDark(!dark)} aria-label="Toggle theme">{dark?'☼':'☾'}</button><a className="talk" href="mailto:mohitnankani74@gmail.com">LET'S TALK ↗</a><button className="hamb" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">☰</button></div>
    </header>
    <main>
      <section className="hero wrap" id="about"><div className="hero-copy"><div className="eyebrow"><i/> SOFTWARE ENGINEER <span/> HYDERABAD, INDIA</div>
        <h1>Building systems<br/>that <em>scale & matter.</em></h1>
        <p className="lead">I'm Mohit — a software engineer focused on distributed systems, backend infrastructure, and full-stack product engineering.</p>
        <p className="sub">I enjoy turning complex engineering problems into reliable, measurable outcomes — from high-throughput data pipelines to products used around the globe.</p>
        <div className="hero-cta"><button className="primary" onClick={()=>jump('Projects')}>EXPLORE MY WORK ↗</button><a className="secondary" href="mailto:mohitnankani74@gmail.com">GET IN TOUCH ↗</a></div>
        <div className="social"><a href="https://github.com/mohitn75" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="mailto:mohitnankani74@gmail.com">EMAIL ↗</a><span>4+ YEARS BUILDING SOFTWARE</span></div>
      </div><div className="visual"><div className="orbit o1"/><div className="orbit o2"/><div className="profile"><div className="tiny">ENGINEERING / PROFILE <span>● OPEN TO CONNECT</span></div><div className="monogram">M<span>N</span><i>.</i></div><h2>Mohit Nankani</h2><p>Software Engineer · Distributed Systems</p><hr/><div className="stats"><div><b>60M</b><small>RECORDS / MIN</small></div><div><b>99.99%</b><small>AVAILABILITY</small></div><div><b>11K+</b><small>GLOBAL USERS</small></div></div><hr/><div className="tiny">JAVA · KAFKA · REACT · CLOUD <span>INDIA ↗</span></div></div><div className="float f1">⌘ &nbsp; <b>Distributed systems</b><small>Scale · Resilience · Data</small></div><div className="float f2">↗ &nbsp; <b>Impact-driven engineering</b><small>From design to production</small></div></div>
        <div className="scroll">— &nbsp; SCROLL TO EXPLORE</div>
      </section>
      <section className="metrics"><div><b>4<span>+</span></b><small>YEARS EXPERIENCE</small></div><div><b>60<span>M</span></b><small>RECORDS / MINUTE</small></div><div><b>99.99<span>%</span></b><small>SERVICE AVAILABILITY</small></div><div><b>11<span>K+</span></b><small>ENTERPRISE USERS</small></div></section>
      <section className="section wrap" id="experience"><div className="heading"><div><label>01 / CAREER JOURNEY</label><h2>Experience that<br/><i>moves the needle.</i></h2></div><p>Working across security, data infrastructure, and enterprise platforms — with a focus on scale, reliability, and outcomes.</p></div>
        <div className="timeline">{jobs.map((job,i)=><article className="job" key={job.company}><div className="rail"><i/></div><div className="jobbody"><div className="jobtop"><div><label>{job.company}</label><h3>{job.role}</h3><p>{job.summary}</p></div><aside>{job.dates}<small>{job.place}</small></aside></div><ul>{job.bullets.map((b,j)=><li key={j}>{b}</li>)}</ul><div className="tags">{job.tags.map(t=><span key={t}>{t}</span>)}</div></div></article>)}</div>
      </section>
      <section className="section wrap" id="projects"><div className="heading"><div><label>02 / SELECTED WORK</label><h2>Engineering in<br/><i>the real world.</i></h2></div><p>Selected problem spaces from my engineering work. Descriptions are intentionally high-level and avoid proprietary implementation details.</p></div><div className="projects">{projects.map(p=><article className="project" key={p.n}><div className="projecttop">{p.n} / 04 <b>↗</b></div><label>{p.kind}</label><h3>{p.title}</h3><p>{p.desc}</p><div className="outcome"><small>KEY SCALE / OUTCOME</small><b>{p.outcome}</b></div><div className="tags">{p.stack.map(t=><span key={t}>{t}</span>)}</div></article>)}</div></section>
      <section className="section wrap" id="skills"><div className="heading"><div><label>03 / TOOLKIT</label><h2>Tools of the<br/><i>trade.</i></h2></div><p>A practical toolkit spanning backend engineering, data systems, cloud infrastructure, and user-facing applications.</p></div><div className="skillbox">{groups.map(([name,items])=><div className="skillrow" key={name}><label>{name}</label><div>{items.map(s=><span key={s}>{s}</span>)}</div></div>)}</div></section>
      <section className="section wrap" id="recognition"><div className="heading"><div><label>04 / RECOGNITION</label><h2>Good work gets<br/><i>noticed.</i></h2></div><p>Recognition for engineering execution, collaboration, and contributions to the wider engineering community.</p></div><div className="awards"><article><b>✳</b><div><h3>Corporate Excellence Award</h3><p>Recognized in 2023 and 2024.</p></div></article><article><b>◎</b><div><h3>Global CXO Presentation</h3><p>Selected to present project work to global executives.</p></div></article><article><b>↗</b><div><h3>GCP Certification</h3><p>Certified as a Global Cloud Engineer.</p></div></article></div></section>
      <section className="contact" id="contact"><div className="wrap"><label>05 / WHAT'S NEXT?</label><h2>Have a good problem?<br/><em>Let's solve it.</em></h2><p>I'm always happy to connect with engineers, builders, and teams working on ambitious problems.</p><a className="primary linkbutton" href="mailto:mohitnankani74@gmail.com">START A CONVERSATION ↗</a><div className="contactlinks"><a href="mailto:mohitnankani74@gmail.com">MOHITNANKANI74@GMAIL.COM ↗</a><a href="https://github.com/mohitn75" target="_blank" rel="noreferrer">GITHUB PROFILE ↗</a></div></div></section>
    </main><footer className="footer wrap"><a className="brand" href="#about"><b>MN</b> MOHIT NANKANI</a><span>DESIGNED & BUILT WITH INTENTION.</span><span>© {new Date().getFullYear()} MOHIT NANKANI</span></footer>
  </div>
}