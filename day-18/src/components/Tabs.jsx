import { courses } from "../constants/tabsContent";

function Tabs({ course, selectedTab, setSelectedTab }) {
  return (
    <div
      className={`py-4 w-1/4 ${courses[3] !== course && "border-r border-border"} cursor-pointer ${course === selectedTab && "bg-text text-bg"}`}
      onClick={() => setSelectedTab(course)}
    >
      {course}
    </div>
  );
}

export default Tabs;
