import beautyImage from "./constant/Content";

function App() {
  return (
    <main className="flex flex-col p-10 bg-bg gap-6 h-screen">
      <div className="Heading border border-text rounded-md">heading</div>
      <div className="Hero border border-text rounded-md">
        <div className="Tab-Section flex justify-around border-b">
          <a href="" className="px-20 py-4 border-r border-text">
            t1
          </a>
          <a href="" className="px-20 py-4 border-r border-text">
            t2
          </a>
          <a href="" className="px-20 py-4 border-r border-text">
            t3
          </a>
          <a href="" className="px-20 py-4">
            t4
          </a>
        </div>
        <div className="Main-Section flex w-full">
          <div className="TEXT w-1/2 border-r p-6">
            <h5 className="eyebrow text-sm ">eyebrow</h5>
            <h1 className="">title</h1>
            <h3 className="">description</h3>
            <button className="bg-bg">button</button>
          </div>
          <div className="Img w-1/2 p-6">
            <img src={beautyImage} alt="title" className="" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
