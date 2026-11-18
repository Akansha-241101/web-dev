const TabsContent = ({ selectedTabContent }) => {
  console.log(selectedTabContent);
  return (
    <div className="tab-content flex">
      <div className="tab-content-left flex flex-col justify-center gap-6 w-1/2 p-8">
        <h1 className="text-4xl font-semibold">
          {selectedTabContent[0].title}
        </h1>
        <p>{selectedTabContent[0].description}</p>
        <button className="bg-text text-white py-2 px-6 rounded-lg w-fit">
          {selectedTabContent[0].buttonText}
        </button>
      </div>
      <div className="tab-content-right h-auto w-1/2 p-8">
        <img
          src={selectedTabContent[0].image}
          alt={selectedTabContent[0].title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default TabsContent;
