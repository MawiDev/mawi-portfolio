import react from "./icons/react.png";
import tailwind from "./icons/tailwindcss.png";
import php from "./icons/php.png";
import osteopata from "./images/osteopata.png";
import ponga from "./images/paoloponga.png";
import macraman from "./images/macraman.png";
import asilo from "./images/asilo.png";
import npmIcon from "./icons/npm.png";
import bootstrap from "./icons/bootstrap.png";
import hackmeeting from "./images/hackmeeting.png";

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
import EmailForm from "./components/EmailForm";

const externalLInkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    width="24"
    viewBox="0 0 512 512"
  >
    <path
      fill="#ffffff"
      d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
    />
  </svg>
);

const externalLInkIconDark = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    width="24"
    viewBox="0 0 512 512"
  >
    <path
      fill="#000000"
      d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
    />
  </svg>
);

function Card({ children, styles }) {
  return <div className={`m-2 rounded-md shadow-md ${styles}`}>{children}</div>;
}

function App() {
  return (
    <div className="bg-neutral-100 p-6 flex justify-center items-center 2xl:h-[100vh] cursor-default">
      <div className="flex flex-wrap justify-center">
        {/* PROFILE */}
        <Card
          styles={
            "p-6 bg-[#454545] text-white flex flex-col justify-center items-center gap-6 sm:w-full md:w-[330px]"
          }
        >
          <div className="flex gap-6 justify-center items-center">
            <ProfileImg styles={"rounded-full border-2 border-white"} />
            <div>
              <h1 className="text-4xl font-semibold">Riccardo Savio</h1>
              <h4 className="text-lg font-light">Web Developer</h4>
            </div>
          </div>

          <LinkSlot>
            <LinkCard
              icon={linkedin}
              link={"https://www.linkedin.com/in/riccardo-savio-368205275/"}
              nameLink={"Linkedim"}
              styles={
                "flex justify-center items-center  gap-2 text-blue-600 bg-blue-200"
              }
            />
            <LinkCard
              icon={mastodon}
              link={"https://mastodon.uno/@mawiDev"}
              nameLink={"Mastodon"}
              styles={
                "flex justify-center items-center  gap-2 text-purple-600 bg-purple-200"
              }
            />
            <LinkCard
              icon={github}
              link={"https://github.com/MawiDev"}
              nameLink={"GitHub"}
              styles={
                "flex justify-center items-center gap-2 text-gray-600 bg-gray-200"
              }
            />
            <LinkCard
              icon={npm}
              link={"https://www.npmjs.com/~mawidev"}
              nameLink={"npmjs"}
              styles={
                "flex justify-center items-center gap-2 text-red-600 bg-red-200"
              }
            />
          </LinkSlot>
        </Card>
        {/* STACK */}
        <Card
          styles={
            "p-6 bg-white text-white flex flex-col justify-center items-center gap-6 sm:w-full md:w-[300px]"
          }
        >
          <h1 className="text-2xl font-semibold text-[#454545]">Stack</h1>
          <div className="flex flex-wrap gap-y-6 gap-x-12 justify-center items-center">
            <IconTech icon={react} />
            <IconTech icon={tailwind} />
            <IconTech icon={php} />
            <IconTech
              icon={"https://blade-ui-kit.com/images/icon.svg"}
              iconSize={30}
            />
            <IconTech
              icon={"https://laravel.com/img/logomark.min.svg"}
              iconSize={36}
            />
          </div>
        </Card>
        {/* PRESENTAZIONE */}
        <Card
          styles={
            "p-6 bg-neutral-500 text-white flex flex-col justify-center items-center gap-6 sm:w-full md:w-[300px] hover:bg-neutral-700"
          }
        >
          <p className="text-lg">
            Hi, I'm <strong>Riccardo Savio</strong> born in '95. <br /> I've
            been working as a waiter and in the last year I'm moving into web
            development. <br /> I'm learning react and laravel and making
            websites as a freelancer.
          </p>
        </Card>
        {/* OSTEOPATA */}
        <Card
          styles={
            "p-5 bg-green-200 flex flex-col justify-start items-start gap-6 hover:bg-green-300"
          }
        >
          <h3 className="px-2 font-semibold text-green-800 uppercase lg:text-lg">
            Osteopata Chiara Bertoldo
          </h3>
          <img
            src={osteopata}
            width={350}
            alt="preview"
            className="rounded-md"
          />
          <div className="flex flex-col gap-4 justify-between px-2 w-full lg:gap-0 lg:flex-row">
            <a href="https://www.osteopatachiarabertoldo.it/">
              {externalLInkIcon}
            </a>
            <div className="flex gap-4">
              <LinkCard
                icon={<img src={react} width={20} alt="react" />}
                link={"#"}
                nameLink={"React"}
                styles={
                  "flex justify-center items-center gap-2 text-gray-600 bg-white"
                }
              />
              <LinkCard
                icon={<img src={tailwind} width={20} alt="tailwind" />}
                link={"#"}
                nameLink={"Tailwind"}
                styles={
                  "flex justify-center items-center gap-2 text-gray-600 bg-white"
                }
              />
            </div>
          </div>
        </Card>
        {/* PAOLO PONGA */}
        <Card
          styles={
            "p-5 bg-blue-200 flex flex-col justify-start items-start gap-6 hover:bg-blue-300"
          }
        >
          <h3 className="px-2 font-semibold text-blue-800 uppercase lg:text-lg">
            Paolo Ponga
          </h3>
          <img src={ponga} width={350} alt="preview" className="rounded-md" />
          <div className="flex flex-col gap-4 justify-between px-2 w-full lg:gap-0 lg:flex-row">
            <a href="https://paoloponga.it/">{externalLInkIcon}</a>
            <div className="flex flex-wrap gap-4">
              <LinkCard
                icon={
                  <img
                    src={"https://laravel.com/img/logomark.min.svg"}
                    width={20}
                    alt="laravel"
                  />
                }
                link={"#"}
                nameLink={"Laravel"}
                styles={
                  "flex justify-center items-center gap-2 text-gray-600 bg-white"
                }
              />
              <LinkCard
                icon={<img src={tailwind} width={20} alt="tailwind" />}
                link={"#"}
                nameLink={"Tailwind"}
                styles={
                  "flex justify-center items-center gap-2 text-gray-600 bg-white"
                }
              />
            </div>
          </div>
        </Card>
        {/* MACRAMAN */}
        <Card
          styles={
            "p-5 bg-red-200 flex flex-col justify-start items-start gap-6 hover:bg-red-300"
          }
        >
          <h3 className="px-2 font-semibold text-red-800 uppercase lg:text-lg">
            Macraman
          </h3>
          <img
            src={macraman}
            width={350}
            alt="preview"
            className="rounded-md"
          />
          <div className="flex flex-col gap-4 justify-between px-2 w-full lg:gap-0 lg:flex-row">
            <a href="https://www.macraman.it/">{externalLInkIcon}</a>
            <div className="flex flex-wrap gap-4">
              <LinkCard
                icon={
                  <img
                    src={"https://laravel.com/img/logomark.min.svg"}
                    width={20}
                    alt="laravel"
                  />
                }
                link={"#"}
                nameLink={"Laravel"}
                styles={
                  "flex justify-center items-center gap-2 text-gray-600 bg-white"
                }
              />
              <LinkCard
                icon={<img src={tailwind} width={20} alt="tailwind" />}
                link={"#"}
                nameLink={"Tailwind"}
                styles={
                  "flex justify-center items-center gap-2 text-gray-600 bg-white"
                }
              />
            </div>
          </div>
        </Card>
        {/* ASILO MINI CASA */}
        <Card
          styles={
            "p-5 bg-cyan-200 flex flex-col justify-start items-start gap-6 hover:bg-cyan-300"
          }
        >
          <h3 className="px-2 font-semibold text-cyan-800 uppercase lg:text-lg">
            Asilo nido Mini Casa dei Bimbi
          </h3>
          <img src={asilo} width={350} alt="preview" className="rounded-md" />
          <div className="flex flex-col gap-4 justify-between px-2 w-full lg:gap-0 lg:flex-row">
            <a href="https://www.asilonidominicasadeibimbi.it/">
              {externalLInkIcon}
            </a>
            <div className="flex gap-4">
              <LinkCard
                icon={<img src={react} width={20} alt="react" />}
                link={"#"}
                nameLink={"React"}
                styles={
                  "flex justify-center items-center gap-2 text-gray-600 bg-white"
                }
              />
              <LinkCard
                icon={<img src={tailwind} width={20} alt="tailwind" />}
                link={"#"}
                nameLink={"Tailwind"}
                styles={
                  "flex justify-center items-center gap-2 text-gray-600 bg-white"
                }
              />
            </div>
          </div>
        </Card>
        {/* NPM PACK*/}
        <Card
          styles={
            "px-6 pb-6 bg-white flex flex-col justify-center items-center gap-6 w-full md:w-[300px]"
          }
        >
          <img src={npmIcon} alt="npm" width={80} />
          <a
            href="https://www.npmjs.com/package/laravel-watch-ftp"
            target="_blank"
            rel="noreferrer"
            className="flex justify-around items-center w-full"
          >
            {externalLInkIconDark}
            <h4 className="text-xl hover:underline">laravel-watch-ftp</h4>
          </a>
          <a
            href="https://www.npmjs.com/package/mawi-react-app"
            target="_blank"
            rel="noreferrer"
            className="flex justify-around items-center w-full"
          >
            {externalLInkIconDark}
            <h4 className="text-xl hover:underline">mawi-react-app</h4>
          </a>
        </Card>
        {/* HACKMEETING */}
        <Card
          styles={
            "p-5 bg-[#454545] flex flex-col justify-start items-start gap-6 hover:bg-gray-400"
          }
        >
          <h3 className="px-2 font-semibold text-white uppercase lg:text-lg">
            Hackmeeting 0x15
          </h3>
          <img
            src={hackmeeting}
            width={350}
            alt="preview"
            className="rounded-md"
          />
          <div className="flex flex-row justify-between px-2 w-full">
            <a href="https://www.hackmeeting.org/hackit18/">
              {externalLInkIcon}
            </a>
            <div className="flex">
              <LinkCard
                icon={<img src={bootstrap} width={20} alt="bootstrap" />}
                link={"#"}
                nameLink={"bootstrap"}
                styles={
                  "flex justify-center items-center gap-2 text-gray-600 bg-white"
                }
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
