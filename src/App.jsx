import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Service from "./components/Service";
import Work from "./components/Work";


function App() {

  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden px-0 ">
    <Header/>
    <Banner/>
    <Nav/>
    <About/>
    <Service/>
    <Work/>
    <Contact/>
    </div>
  )
}

export default App
