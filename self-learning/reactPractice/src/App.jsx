import Count from "./components/CountBtn"
import PostsDashboard from "./components/PostsDB"
import Toggle from "./components/ToggleBtn"


function App() {
   return (
   <main className="app-layout">
      <PostsDashboard />
      <Count />
      <Toggle />
   </main>
   )
}

export default App
