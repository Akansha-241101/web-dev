import { useState } from "react";
import content from "./constants/tabsContent";
import { courses } from "./constants/tabsContent";
import Tabs from "./components/Tabs";
import TabsContent from "./components/TabsContent";

function App() {
  const [selectedTab, setSelectedTab] = useState(courses[0]);
  const selectedTabContent = content.filter((c) => c.title === selectedTab);

  return (
    <main className="min-h-screen bg-bg text-text">
      <section className="p-40">
        <div className="tabs-container border border-border">
          <div className="tabs-header flex justify-around w-full text-center border-b border-border">
            {courses.map((c) => {
              console.log(courses.length);
              return (
                <Tabs
                  key={c}
                  course={c}
                  selectedTab={selectedTab}
                  setSelectedTab={setSelectedTab}
                />
              );
            })}
          </div>
          <TabsContent selectedTabContent={selectedTabContent} />
        </div>
      </section>
    </main>
  );
}

export default App;
