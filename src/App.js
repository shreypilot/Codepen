import "./App.css"
import Body from "./components/Body"
import Header from "./components/Header"
function App() {
  return (
    <>
       <div>
        <Header />
        <Body />
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
