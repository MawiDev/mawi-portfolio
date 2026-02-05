import reactIcon from "./icons/react.png";
import tailwindIcon from "./icons/tailwindcss.png";
import php from "./icons/php.png";
import osteopata from "./images/osteopata.png";
import ponga from "./images/paoloponga.png";
import macraman from "./images/macraman.png";
import asilo from "./images/asilo.png";
import npmIcon from "./icons/npm.png";
import bootstrap from "./icons/bootstrap.png";
import hackmeeting from "./images/hackmeeting.png";
import futsukayoi from "./images/futsukayoi.png";
import ipfs from "./icons/ipfs.svg";

import {
  LinkCard,
  LinkSlot,
  ProfileImg,
  github,
  linkedin,
  mastodon,
  npm,
} from "./components/ProfileCardComps";
import { IconTech } from "./components/StackCardComps";

function ExternalLinkIcon({ color = "#ffffff" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      viewBox="0 0 512 512"
    >
      <path
        fill={color}
        d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
      />
    </svg>
  );
}

function Card({ children, styles }) {
  return (
    <div className={`m-2 rounded-md shadow-md ${styles}`}>{children}</div>
  );
}

function TechBadge({ icon, name }) {
  return (
    <LinkCard
      icon={<img src={icon} width={20} alt={name} />}
      link={"#"}
      nameLink={name}
      styles={"flex justify-center items-center gap-2 text-gray-600 bg-white"}
    />
  );
}

function ProjectCard({ title, image, alt, url, techs, cardStyles, titleStyles, layoutStyles }) {
  return (
    <Card styles={`p-5 flex flex-col justify-start items-start gap-6 ${cardStyles}`}>
      <h3 className={`px-2 font-semibold uppercase lg:text-lg ${titleStyles}`}>
        {title}
      </h3>
      <img src={image} width={350} alt={alt} className="rounded-md" />
      <div className={`flex flex-col gap-4 justify-between px-2 w-full ${layoutStyles || "lg:gap-0 lg:flex-row"}`}>
        <a href={url} target="_blank" rel="noreferrer">
          <ExternalLinkIcon />
        </a>
        <div className="flex flex-wrap gap-4">
          {techs.map((tech) => (
            <TechBadge key={tech.name} icon={tech.icon} name={tech.name} />
          ))}
        </div>
      </div>
    </Card>
  );
}

function App() {
  return (
    <div className="flex flex-col justify-center items-center p-6 cursor-default bg-neutral-100 xl:py-24 md:flex-wrap">
      <Card styles="bg-[#454545] lg:absolute text-white px-6 flex items-center gap-4 py-2 top-8 left-16">
        <a
          href="https://bafybeiguqj63bvdtxpo56lpoe4uyrm7wdlcnnpjrvkpmrpmhgx4etoxwae.ipfs.dweb.link/"
          target="_blank"
          rel="noreferrer"
          className="bg-[#454545]"
        >
          <img src={ipfs} alt="IPFS distributed web" width={75} />
        </a>
      </Card>
      <div className="flex flex-wrap justify-center">
        {/* PROFILE */}
        <Card styles="p-6 bg-[#454545] text-white flex flex-col justify-center items-center gap-6 sm:w-full md:w-[330px]">
          <div className="flex gap-6 justify-center items-center">
            <ProfileImg styles="rounded-full border-2 border-white" />
            <div>
              <h1 className="text-4xl font-semibold">Ri.Sa</h1>
              <h4 className="text-lg font-light">Web Developer</h4>
            </div>
          </div>

          <LinkSlot>
            <LinkCard
              icon={linkedin}
              link="https://www.linkedin.com/in/riccardo-savio-368205275/"
              nameLink="LinkedIn"
              styles="flex justify-center items-center gap-2 text-blue-600 bg-blue-200"
            />
            <LinkCard
              icon={mastodon}
              link="https://mastodon.uno/@mawiDev"
              nameLink="Mastodon"
              styles="flex justify-center items-center gap-2 text-purple-600 bg-purple-200"
            />
            <LinkCard
              icon={github}
              link="https://github.com/MawiDev"
              nameLink="GitHub"
              styles="flex justify-center items-center gap-2 text-gray-600 bg-gray-200"
            />
            <LinkCard
              icon={npm}
              link="https://www.npmjs.com/~mawidev"
              nameLink="npmjs"
              styles="flex justify-center items-center gap-2 text-red-600 bg-red-200"
            />
          </LinkSlot>
        </Card>
        {/* STACK */}
        <Card styles="p-6 bg-white text-white flex flex-col justify-center items-center gap-6 sm:w-full md:w-[300px]">
          <h1 className="text-2xl font-semibold text-[#454545]">Stack</h1>
          <div className="flex flex-wrap gap-y-6 gap-x-12 justify-center items-center">
            <IconTech icon={reactIcon} />
            <IconTech icon={tailwindIcon} />
            <IconTech icon={php} />
            <IconTech
              icon="https://blade-ui-kit.com/images/icon.svg"
              iconSize={30}
            />
            <IconTech
              icon="https://laravel.com/img/logomark.min.svg"
              iconSize={36}
            />
          </div>
        </Card>
        {/* PRESENTAZIONE */}
        <Card styles="p-6 bg-neutral-500 text-white flex flex-col justify-center items-center gap-6 sm:w-full md:w-[300px] hover:bg-neutral-700">
          <p className="text-lg">
            Hi, I'm <strong>Riccardo Savio</strong> born in '95. <br /> I've
            been working as a waiter and in the last year I'm moving into web
            development. <br /> I'm learning react and laravel and making
            websites as a freelancer.
          </p>
        </Card>
        {/* FUSTUKAYOI */}
        <ProjectCard
          title="FUSTUKAYOI"
          image={futsukayoi}
          alt="Fustukayoi project preview"
          url="https://futsukayoi.vercel.app/"
          cardStyles="bg-[#454545]"
          titleStyles="text-yellow-400"
          layoutStyles=""
          techs={[
            { icon: reactIcon, name: "React" },
            { icon: tailwindIcon, name: "Tailwind" },
          ]}
        />
        {/* OSTEOPATA */}
        <ProjectCard
          title="Osteopata Chiara Bertoldo"
          image={osteopata}
          alt="Osteopata Chiara Bertoldo project preview"
          url="https://www.osteopatachiarabertoldo.it/"
          cardStyles="bg-green-200 hover:bg-green-300"
          titleStyles="text-green-800"
          techs={[
            { icon: reactIcon, name: "React" },
            { icon: tailwindIcon, name: "Tailwind" },
          ]}
        />
        {/* PAOLO PONGA */}
        <ProjectCard
          title="Paolo Ponga"
          image={ponga}
          alt="Paolo Ponga project preview"
          url="https://paoloponga.it/"
          cardStyles="bg-blue-200 hover:bg-blue-300"
          titleStyles="text-blue-800"
          techs={[
            { icon: "https://laravel.com/img/logomark.min.svg", name: "Laravel" },
            { icon: tailwindIcon, name: "Tailwind" },
          ]}
        />
        {/* MACRAMAN */}
        <ProjectCard
          title="Macraman"
          image={macraman}
          alt="Macraman project preview"
          url="https://www.macraman.it/"
          cardStyles="bg-red-200 hover:bg-red-300"
          titleStyles="text-red-800"
          techs={[
            { icon: "https://laravel.com/img/logomark.min.svg", name: "Laravel" },
            { icon: tailwindIcon, name: "Tailwind" },
          ]}
        />
        {/* ASILO MINI CASA */}
        <ProjectCard
          title="Asilo nido Mini Casa dei Bimbi"
          image={asilo}
          alt="Asilo Nido Mini Casa dei Bimbi project preview"
          url="https://www.asilonidominicasadeibimbi.it/"
          cardStyles="bg-cyan-200 hover:bg-cyan-300"
          titleStyles="text-cyan-800"
          techs={[
            { icon: reactIcon, name: "React" },
            { icon: tailwindIcon, name: "Tailwind" },
          ]}
        />
        {/* NPM PACK*/}
        <Card styles="px-6 pb-6 bg-white flex flex-col justify-center items-center gap-6 w-full md:w-[300px]">
          <img src={npmIcon} alt="npm packages" width={80} />
          <a
            href="https://www.npmjs.com/package/laravel-watch-ftp"
            target="_blank"
            rel="noreferrer"
            className="flex justify-around items-center w-full"
          >
            <ExternalLinkIcon color="#000000" />
            <h4 className="text-xl hover:underline">laravel-watch-ftp</h4>
          </a>
          <a
            href="https://www.npmjs.com/package/mawi-react-app"
            target="_blank"
            rel="noreferrer"
            className="flex justify-around items-center w-full"
          >
            <ExternalLinkIcon color="#000000" />
            <h4 className="text-xl hover:underline">mawi-react-app</h4>
          </a>
        </Card>
        {/* HACKMEETING */}
        <ProjectCard
          title="Hackmeeting 0x15"
          image={hackmeeting}
          alt="Hackmeeting 0x15 project preview"
          url="https://www.hackmeeting.org/hackit18/"
          cardStyles="bg-[#454545] hover:bg-gray-400"
          titleStyles="text-white"
          layoutStyles="flex-row justify-between"
          techs={[{ icon: bootstrap, name: "Bootstrap" }]}
        />
      </div>
    </div>
  );
}

export default App;
