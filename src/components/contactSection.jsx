import AnimatedComponent from "../lib/AnimatedComponent";

export default function ContactSection() {
  return (
    <section id="Contact">
      <AnimatedComponent>
        <div className="min-h-screen flex flex-col items-center justify-center py-5">
          <div className="flex flex-col justify-center rounded-md mx-auto w-[350px] border border-slate-500 shadow-lg dark:text-slate-200">
            <h1 className="text-3xl font-bold text-center pt-7">Contact me</h1>
            <div className="w-full px-5 mt-5">
              <label className="block text-md font-semibold mb-2">Email</label>
              <input
                type="text"
                placeholder="Email"
                className="w-full mt-1 px-3 py-2 border shadow-sm border-slate-300 dark:bg-slate-900 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
              />
            </div>
            <div className="w-full px-5 mt-5">
              <label className="block text-md font-semibold mb-2">
                Phone number
              </label>
              <input
                type="number"
                placeholder="Phone number"
                className="w-full mt-1 px-3 py-2 border shadow-sm border-slate-300 dark:bg-slate-900 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
              />
            </div>
            <div className="w-full px-5 mt-5">
              <label className="block text-md font-semibold mb-2">
              </label>
              <textarea
                type="textarea"
                placeholder="Message"
                className="w-full mt-1 px-3 py-2 border shadow-sm border-slate-300 dark:bg-slate-900 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
              />
            </div>
            <div className="flex justify-end">
              <button className="bg-blue-500 hover:bg-blue-400 rounded-md w-20 my-5 p-2 mr-5 text-white">
                Send
              </button>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </section>
  );
}
