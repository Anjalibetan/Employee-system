import "./App.css"
import EmpList from"./EmpList";
import EmpForm from "./EmpForm";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

function App(){
  return(
    <div>
      <Router>
        <Routes>
        <Route path="/empform" element= {<EmpForm/>}/>
           <Route path="/" element= {<EmpList/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;