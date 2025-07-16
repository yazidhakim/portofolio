const app = document.getElementById("app");

const header = `
  <header class="flex justify-between items-center p-6 bg-[#121212] shadow-lg">
    <h1 class="text-2xl font-bold">Yazid Hakim</h1>
    <nav class="space-x-4">
      <a href="#about" class="hover:text-purple-400">About</a>
      <a href="#skills" class="hover:text-purple-400">Skills</a>
      <a href="#education" class="hover:text-purple-400">Education</a>
      <a href="#projects" class="hover:text-purple-400">Projects</a>
      <a href="https://github.com/yazidhakim" target="_blank" class="px-4 py-1 border rounded-full hover:bg-purple-600">GitHub</a>
      <a href="https://linkedin.com/in/yazidhakim" target="_blank" class="px-4 py-1 border rounded-full hover:bg-purple-600">LinkedIn</a>
    </nav>
  </header>
`;

const about = `
  <section id="about" class="text-center py-20">
    <h2 class="text-4xl font-bold mb-4">About Me</h2>
    <img src="assets/images/self porto.jpg" alt="Yazid Hakim" class="mx-auto w-40 h-40 rounded-full object-cover border-4 border-purple-600 mb-6">
    <p class="max-w-xl mx-auto text-gray-300">
      I am an undergraduate student of Data Science at Telkom University with a deep passion for data analytics, data visualization, and developing impactful data-driven projects. I enjoy turning complex data into actionable insights through compelling visuals and analytical thinking.
    </p>
  </section>
`;

const skills = `
  <section id="skills" class="text-center py-20">
    <h2 class="text-4xl font-bold mb-6">Skills</h2>
    <div class="flex justify-center gap-4 flex-wrap">
      <span class="bg-purple-700 text-white px-4 py-1 rounded-full">Python</span>
      <span class="bg-purple-700 text-white px-4 py-1 rounded-full">Java</span>
      <span class="bg-purple-700 text-white px-4 py-1 rounded-full">C++</span>
      <span class="bg-purple-700 text-white px-4 py-1 rounded-full">HTML</span>
      <span class="bg-purple-700 text-white px-4 py-1 rounded-full">CSS</span>
      <span class="bg-purple-700 text-white px-4 py-1 rounded-full">JavaScript</span>
      <span class="bg-purple-700 text-white px-4 py-1 rounded-full">MySQL</span>
      <span class="bg-purple-700 text-white px-4 py-1 rounded-full">Tableau</span>
      <span class="bg-purple-700 text-white px-4 py-1 rounded-full">Google Looker</span>
    </div>
  </section>
`;

const education = `
  <section id="education" class="text-center py-20 bg-[#161616]">
    <h2 class="text-4xl font-bold mb-6">Education</h2>
    <div class="max-w-xl mx-auto text-gray-300">
      <h3 class="text-xl font-semibold">Telkom University</h3>
      <p>Undergraduate Student of Data Science</p>
      <p>2022 – Present</p>
    </div>
  </section>
`;

const projects = [{
        title: "BussGo Web",
        image: "assets/images/BussGo porto.jpg",
        tech: ["Java", "HTML", "JavaScript", "CSS"],
        description: "A bus scheduling simulation project using Java GUI combined with frontend technologies.",
        link: "https://github.com/yazidhakim/aplikasi_bus",
        linkText: "View on GitHub"
    },
    {
        title: "Napoleon's March - Tableau Viz",
        image: "assets/images/Visualisasi Data (II).jpg",
        tech: ["Tableau", "Data Visualization", "Historical Map"],
        description: "Interactive data visualization of Napoleon's ill-fated march to Moscow during the 1812 war. Built using Tableau to display troop movements, city paths, and temperature drops."
    },
    {
        title: "Sales Performance Dashboard (Looker Studio)",
        image: "assets/images/Visualisasi Segment Dashboard.png",
        tech: ["Looker Studio", "Data Visualization", "Google Sheets"],
        description: "A dashboard built using Google Looker Studio to visualize sales performance, customer segments, and regional distribution. The full interactive version is available on Google Drive.",
        link: "https://drive.google.com/drive/folders/1fIYEHq_2xzcGvNp1Co-83qx-M4grbHLF?usp=sharing",
        linkText: "View Dashboard"
    }
];


const projectCards = projects.map(project => {
    const tags = project.tech.map(tag =>
        `<span class="bg-purple-700 text-white px-2 py-1 rounded-full">${tag}</span>`
    ).join(" ");

    const linkButton = project.link && project.linkText ?
        `<div class="mt-4"><a href="${project.link}" target="_blank" class="text-purple-400 hover:underline">${project.linkText}</a></div>` :
        "";

    return `
    <div class="flex flex-col h-full bg-[#1f1f1f] rounded-lg shadow-xl p-6 hover:shadow-purple-500 transition">
      <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover rounded-md mb-4">
      <div class="flex flex-wrap gap-2 text-sm mb-2">${tags}</div>
      <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
      <p class="text-gray-400 text-sm line-clamp-3">${project.description}</p>
      ${linkButton}
    </div>
  `;
}).join("");

const projectSection = `
  <section id="projects" class="py-20">
    <h2 class="text-4xl font-bold text-center mb-10">Projects</h2>
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
      ${projectCards}
    </div>
  </section>
`;

const footer = `
  <footer class="text-center py-6 text-gray-500">
    © ${new Date().getFullYear()} Yazid Hakim
  </footer>
`;

app.innerHTML = header + about + skills + education + projectSection + footer;