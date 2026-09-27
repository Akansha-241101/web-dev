function App() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <section className="p-40">
        <div className="tabs-container border border-border">
          <div className="tabs-header flex justify-around w-full text-center border-b">
            <div className="py-4 w-1/4 border-r border-border">asa</div>
            <div className="py-4 w-1/4 border-r border-border">asd</div>
            <div className="py-4 w-1/4 border-r border-border">asd</div>
            <div className="py-4 w-1/4">asd</div>
          </div>
          <div className="tab-content flex divide-x">
            <div className="tab-content-left w-1/2 p-8">
              <h1 className="text-3xl font-semibold">asdasdas</h1>
              <p>asdasda</p>
              <button className="bg-text text-white py-2 px-6 rounded-lg">
                click me
              </button>
            </div>
            <div className="tab-content-right w-1/2 p-8">image</div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
