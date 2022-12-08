// import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Page1 from "./Page1";
// import Page2 from "./Page2";

// function App() {
//   return (
//     <Router>
//       <Page1/>
//       <Routes>
//         <Route exact path="/" component={Page1}/>
//         <Route path="/page2" component={Page2}/>
//       </Routes>
//     </Router>
//   );
// }
import React from "react";
  //  import ReactDOM from "react-dom";
   import { BrowserRouter, Route, Routes } from "react-router-dom";

   import Page1 from "./Page1";
   import Page2 from "./Page2";
   function Home() {
      const navigate = useNavigate();
    
      const handleSubmit = event => {
        event.preventDefault();
    
        // 👇️ redirect to /contacts
        navigate('/Page2');
      };
      return (
        <form onSubmit={handleSubmit}>
          <input />
          <button type="submit">Submit</button>
        </form>
      );
   }
    function App(){
      return(
        <BrowserRouter>
              <Page1/>
       <Routes>
        <Route exact path="/" component={Page1} />
        <Route path="/page2" component={<Home />} />
      </Routes>
      </BrowserRouter>
      );
    }
    export default App; 