const PROJECTS = [
  { title: 'Playwright Agent', description: 'End-to-end browser automation agents built with Playwright and ADK for testing and automation.', tech:['Playwright','TypeScript','ADK'], github:'https://github.com/Dronanaik/google-adk/tree/main/PlaywrightAgent' , icon:'▶' },
  { title: 'Streamlit Code-Gen Agent', description: 'A Streamlit app that provides code generation agents backed by Google ADK.', tech:['Streamlit','Python','ADK'], github:'https://github.com/Dronanaik/google-adk/tree/main/Streamlit-Code-Gen-agent', icon:'🖥' },
  { title: 'Crawl4AI Agent', description: 'Web crawling agent to collect and prepare data for downstream AI tasks.', tech:['Python','Scrapy/Requests','ADK'], github:'https://github.com/Dronanaik/google-adk/tree/main/crawl4AI-agent', icon:'🔎' },
  { title: 'Financial MCP Agent', description: 'Agent designed for financial data workflows and connectors (MCP integrations).', tech:['Python','Finance','MCP'], github:'https://github.com/Dronanaik/google-adk/tree/main/financial-mcp-agent', icon:'💵' },
  { title: 'Job Search Agent', description: 'Agent to automate job discovery and candidate-job matching workflows.', tech:['Python','Scraping','NLP'], github:'https://github.com/Dronanaik/google-adk/tree/main/job_search_agent', icon:'💼' },
  { title: 'MCP Agent (ADK)', description: 'A collection of agents and adapters built on top of Google ADK for MCP scenarios.', tech:['TypeScript','ADK','MCP'], github:'https://github.com/Dronanaik/google-adk/tree/main/mcp-agent-adk', icon:'🤖' },
  { title: 'Streamlit App', description: 'Standalone Streamlit utilities and demos showcasing ML and data apps.', tech:['Streamlit','Python'], github:'https://github.com/Dronanaik/streamlit-app', icon:'🖥' },
  { title: 'Angular Projects', description: 'Angular demo apps and templates used during full-stack training.', tech:['Angular','TypeScript'], github:'https://github.com/Dronanaik/angular', icon:'🧩' },
  { title: 'ML Programs', description: 'Machine learning experiments, notebooks, and training scripts.', tech:['Python','scikit-learn','TensorFlow/PyTorch'], github:'https://github.com/Dronanaik/ml-programs', icon:'🧠' },
  { title: 'Digital Image Processing', description: 'Image processing algorithms and projects implemented for coursework and demos.', tech:['Python','OpenCV','NumPy'], github:'https://github.com/Dronanaik/digital-image-processing-programs', icon:'🖼' },
  { title: 'AI Programs', description: 'Various AI utilities, scripts, and toy projects exploring models and agents.', tech:['Python','AI'], github:'https://github.com/Dronanaik/ai_programs', icon:'⚙️' },
];

function createProjectCard(p){
  const card=document.createElement('div');card.className='card';
  const h3=document.createElement('h3');h3.textContent=p.title;card.appendChild(h3);
  const desc=document.createElement('p');desc.textContent=p.description;desc.style.marginTop='6px';card.appendChild(desc);
  const tags=document.createElement('div');tags.className='project-tags';
  p.tech.forEach(t=>{const s=document.createElement('span');s.className='tag';s.textContent=t;tags.appendChild(s)});
  card.appendChild(tags);
  const actions=document.createElement('div');actions.className='actions';
  const a=document.createElement('a');a.href=p.github;a.target='_blank';a.rel='noopener noreferrer';a.textContent='View on GitHub';
  actions.appendChild(a);card.appendChild(actions);
  return card;
}

function populateProjects(){
  const grid=document.getElementById('projects-grid');
  PROJECTS.forEach(p=>grid.appendChild(createProjectCard(p)));
}

// wire nav scrolling
function initScroll(){
  document.querySelectorAll('[data-scroll]').forEach(btn=>{
    btn.addEventListener('click',e=>{
      const hash=btn.getAttribute('data-scroll');
      const id=hash.replace('#','');
      const el=document.getElementById(id);
      if(el){el.scrollIntoView({behavior:'smooth',block:'start'}); history.replaceState(null,'',hash)}
    })
  })
}

// populate footer year
function initFooter(){document.getElementById('year').textContent=new Date().getFullYear();}

// init
document.addEventListener('DOMContentLoaded',()=>{populateProjects(); initScroll(); initFooter();});
