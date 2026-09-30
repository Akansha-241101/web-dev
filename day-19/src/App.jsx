import content, { contentDetail } from "./constant/Content";
import beautyImage from "./assets/beautynotes.jpg";
import { useState } from "react";

function App() {
  const [selectedItem, setSelectedItem] = useState(contentDetail[0].title);
  const selectedItems = content.filter((item) => item.title === selectedItem);

  return (
    <main className="flex flex-col p-10 bg-bg gap-6 h-screen">
      <div className="Heading border border-text rounded-md">heading</div>
      <div className="Hero border border-text rounded-md">
        <div className="Tab-Section flex justify-center border-b">
          {content.map((item) => {
            return (
              <a
                href=""
                className="px-20 flex-1 text-center py-4 border-r border-text bg-rose-50 {item.title === selectedItem ?  bg-rose-50 text-text :bg-rose text-text }"
                key={item.id}
                onClick={() => setSelectedItem(contentDetail[0])}
              >
                {item.title}
              </a>
            );
          })}
        </div>
        <div className="Main-Section flex w-full">
          <div className="TEXT w-1/2 border-r p-6">
            <h5 className="eyebrow text-sm ">eyebrow</h5>
            <h1 className="">title</h1>
            <h3 className="">description</h3>
            <button className="bg-bg">button</button>
          </div>
          <div className="Img w-1/2 p-6 border-l-text">
            <img src={beautyImage} alt="" className="w-full object-cover" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
