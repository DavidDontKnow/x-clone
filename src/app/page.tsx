import { VscNote } from "react-icons/vsc";
import { VscRepo } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { VscBell } from "react-icons/vsc";
import { VscHome } from "react-icons/vsc";
import { VscRadioTower } from "react-icons/vsc";
import Link from "next/link";
import { VscTerminalLinux } from "react-icons/vsc";
const Home = () => {
  const navItems = [
    { title: "x", icon: VscTerminalLinux },
    { title: "Home", icon: VscHome },
    { title: "Explore", icon: VscRadioTower },
    { title: "Notifications", icon: VscBell },
    { title: "Messages", icon: VscNote },
    { title: "Bookmarks", icon: VscRepo },
    { title: "Profile", icon: VscAccount },
  ];
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg text-2xl w-full h-full flex relative">
        {/* Profile buttons */}
        <section className="fixed w-[275px] flex flex-col items-stretch h-screen ">
          <div className="flex flex-col items-stretch space-y-4 mt-4 h-full">
            {navItems.map((item) => (
              <Link
                className="hover:bg-white/10 transition duration-200 flex items-center justify-start w-fit space-x-2 rounded-3xl p-2"
                href={`/${item.title.toLowerCase()}`}
                key={item.title}
              >
                <div>
                  <item.icon />
                </div>
                {item.title !== "x" && <div>{item.title}</div>}
              </Link>
            ))}
            <button className="bg-blue-500 hover:bg-blue-600 transition duration-200 text-white rounded-full text-center text-2xl w-full p-2">
              Process
            </button>
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-blue-600 transition duration-200 text-white rounded-full text-center text-2xl w-full p-2"></button>
          </div>
        </section>
        {/* Timeline */}
        <main></main>
        {/* trending/ who to follow */}
        <section></section>
      </div>
    </div>
  );
};
export default Home;
