import Link from "next/link";
import { VscNote } from "react-icons/vsc";
import { VscRepo } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { VscBell } from "react-icons/vsc";
import { VscHome } from "react-icons/vsc";
import { VscRadioTower } from "react-icons/vsc";
import { VscTerminalLinux } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";

const NavSidebar = () => {
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
    <section className="fixed w-[275px] flex flex-col items-stretch h-screen p-2 ">
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
        <button className="rounded-full flex items-center space-x-2 m-4 bg-transparent p-4 text-center hover:bg-white/20 transition duration-200">
          <div className="flex items-center space-x-2">
            <div className="rounded-full bg-slate-400 w-10 h-10"></div>
            <div className="text-left text-sm">
              <div className="font-semibold">Name</div>
              <div className="">@username</div>
            </div>
          </div>
          <div>
            <BsThreeDots />
          </div>
        </button>
      </div>
    </section>
  );
};
export default NavSidebar;
