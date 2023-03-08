import "./App.css"
import Body from "./components/Body"
import Header from "./components/Header"
import Footer from "./components/Footer";
function App() {
  return (
    <>
       <div>
        <Header />
        <Body />
        <Footer />
       </div>
       {/* <div className="bg-black flex-row-reverse">
        <iframe
           title="output"
           sandbox="allow-scripts"
           frameBorder="0"
           width="100%"
           height="100%"/>
       </div> */}
    </>
  );
}

export default App;
