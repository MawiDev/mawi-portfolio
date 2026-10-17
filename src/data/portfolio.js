import osteopata from '../images/osteopata.png';
import ponga from '../images/paoloponga.png';
import macraman from '../images/macraman.png';
import asilo from '../images/asilo.png';
import hackmeeting from '../images/hackmeeting.png';
import futsukayoi from '../images/futsukayoi.png';
import tenkaichi from '../images/tenkaichi.png';
import contasiga from '../images/contasiga.png';

const stackAssets = import.meta.glob('../icons/stack/*.svg', { eager: true, query: '?url', import: 'default' });
const iconNames = {
  JavaScript: 'js', TypeScript: 'ts', React: 'react', 'Node.js': 'nodejs', Bun: 'bun',
  HTML: 'html', CSS: 'css', PHP: 'php', Laravel: 'laravel',
  Kotlin: 'kotlin', 'Android Studio': 'androidstudio', Git: 'git', 'VS Code': 'vscode',
  Linux: 'linux', Debian: 'debian', Ubuntu: 'ubuntu', Bash: 'bash', Nginx: 'nginx',
  Docker: 'docker', MySQL: 'mysql', PostgreSQL: 'postgres', Redis: 'redis',
  Cloudflare: 'cloudflare', IPFS: 'ipfs', Tor: 'tor', WireGuard: 'wireguard',
};

export const technologyIcons = Object.fromEntries(
  Object.entries(iconNames).map(([name, slug]) => [name, stackAssets[`../icons/stack/${slug}.svg`]]),
);

// Source: https://github.com/MawiDev/MawiDev — checked 2026-10-17.
// Keep this snapshot explicit: the page works without a GitHub API request.
export const profile = {
  handle: 'MawiDev',
  name: 'Riccardo Savio',
  location: 'Italy',
  role: 'Software developer',
  github: 'https://github.com/MawiDev',
  learning: 'Network architecture, backend & DevOps practices, PWA.',
  currentProject: {
    name: 'Tenkaichi Beerpong',
    url: 'https://tenkaichibeerpong.it/',
  },
};

// Education supplied by the portfolio owner.
export const education = {
  qualification: 'Diploma di perito informatico',
  institution: 'ITIS “Ettore Majorana”',
  location: 'Grugliasco (TO) · 10095',
  url: 'https://www.itismajo.it/',
};

export const socialLinks = [
  { name: 'GitHub', url: profile.github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/riccardo-savio-368205275/' },
  { name: 'Mastodon', url: 'https://mastodon.uno/@mawiDev', rel: 'me' },
  { name: 'npm', url: 'https://www.npmjs.com/~mawidev' },
];

export const stackGroups = [
  {
    title: 'Tech stack',
    technologies: [
      'JavaScript', 'TypeScript', 'React', 'Node.js', 'Bun', 'HTML', 'CSS',
      'PHP', 'Laravel', 'Kotlin', 'Android Studio', 'Git', 'VS Code',
    ],
    toolLabel: 'AI tools',
    tools: ['Claude Code', 'Codex'],
  },
  {
    title: 'Backend stack',
    technologies: [
      'Linux', 'Debian', 'Ubuntu', 'Bash', 'Nginx', 'Docker', 'MySQL',
      'PostgreSQL', 'Redis', 'Cloudflare', 'IPFS', 'Tor', 'WireGuard',
    ],
    toolLabel: 'Infrastructure',
    tools: ['VPS', 'Backend', 'Hardening', 'SSH', 'Fail2ban'],
  },
];

export const projects = [
  {
    name: profile.currentProject.name,
    description: 'The home of the Italian beer pong circuit: tournaments, events, game rules and community highlights.',
    image: tenkaichi,
    url: profile.currentProject.url,
    technologies: ['Laravel', 'Livewire'],
    category: 'Web platform',
    tone: 'sand',
    featured: true,
  },
  {
    name: 'Futsukayoi',
    description: 'A web app exploring alcohol estimates and elimination time.',
    image: futsukayoi,
    url: 'https://futsukayoi.vercel.app/',
    repository: 'https://github.com/MawiDev/Futsukayoi',
    technologies: ['React', 'Tailwind CSS'],
    category: 'Web app',
    tone: 'dark',
  },
  {
    name: 'Contasiga',
    description: 'A PWA for tracking cigarettes and daily habits, built with Astro and Anime.js.',
    image: contasiga,
    url: 'https://contasiga.502badgateway.xyz/',
    technologies: ['Astro', 'Anime.js'],
    category: 'PWA',
    tone: 'green',
  },
  {
    name: 'Osteopata Chiara Bertoldo',
    tone: 'green',
    description: 'A professional website for an osteopathy practice.',
    image: osteopata,
    url: 'https://www.osteopatachiarabertoldo.it/',
    technologies: ['React', 'Tailwind CSS'],
    category: 'Client website',
  },
  {
    name: 'Paolo Ponga',
    tone: 'blue',
    description: 'A personal website built with React and Tailwind CSS.',
    image: ponga,
    url: 'https://paoloponga.it/',
    technologies: ['React', 'Tailwind CSS'],
    category: 'Client website',
  },
  {
    name: 'Macraman',
    tone: 'rose',
    description: 'A website for a macramé project, built with Laravel.',
    image: macraman,
    url: 'https://www.macraman.it/',
    archived: true,
    technologies: ['Laravel', 'Tailwind CSS'],
    category: 'Archived website',
  },
  {
    name: 'Mini Casa dei Bimbi',
    tone: 'cyan',
    description: 'A nursery website presenting its spaces and activities.',
    image: asilo,
    url: 'https://www.asilonidominicasadeibimbi.it/',
    technologies: ['React', 'Tailwind CSS'],
    category: 'Client website',
  },
  {
    name: 'Hackmeeting 0x15',
    tone: 'dark',
    description: 'The website for the 2018 Hackmeeting event.',
    image: hackmeeting,
    url: 'https://www.hackmeeting.org/hackit18/',
    technologies: ['Bootstrap'],
    category: 'Community',
  },
];

export const openSource = [
  {
    name: 'mawi-react-app',
    description: 'My React template, shared as a starting point for web projects.',
    url: 'https://github.com/MawiDev/mawi-react-app',
    type: 'GitHub / JavaScript',
  },
  {
    name: 'laravel-watch-ftp',
    description: 'An npm package for a Laravel development workflow over FTP.',
    url: 'https://www.npmjs.com/package/laravel-watch-ftp',
    type: 'npm / Package',
  },
  {
    name: 'crystavel',
    description: 'An experiment in Crystal. Explore the source on GitHub.',
    url: 'https://github.com/MawiDev/crystavel',
    type: 'GitHub / Crystal',
  },
];
