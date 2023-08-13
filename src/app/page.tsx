import NavSidebar from "@/components/NavSidebar";
const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg text-2xl w-full h-full flex relative">
        {/* Profile buttons */}
        <NavSidebar />
        {/* Timeline */}
        <main className="ml-[275px] p-6 mx-2 flex w-[600px] h-full flex-col min-h-screen border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-2xl font-bold">Home</h1>
          <div className="border-t-[0.5px] border-b-[0.5px] border-gray-600 h-32 relative">
            <div className="w-10 h-10 bg-slate-400 rounded-full"></div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="What's Happening?"
                className="w-full h-full p-4 bg-transparent outline-none text-white text-2xl border-none"
              />
              <div className="w-full justify-between items flex"></div>
              <div className="w-full m-w-[100px]">
                <button className="bg-blue-500 hover:bg-blue-600 transition duration-200 text-white rounded-full text-center text-lg px-4 py-2">
                  Process
                </button>
              </div>
            </div>
          </div>
        </main>
        {/* trending/ who to follow */}
        <section></section>
      </div>
    </div>
  );
};
export default Home;
