
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Properties from "./Properties";
import Chat from "./Chat.jsx";
import Service from "./Service.jsx";
import FormHandling from "./FormHandling.jsx";
import State from "./Hooks/State";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Admin from "./Admin.jsx";
import User from "./User.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App(){
    let name="React Tutorial";
    let duration="5 Months";
    return(
<>
{/* 
        <h1 style={{ color: 'blue' ,backgroundColor: 'red'}}>This is App Compoenets {2+2} </h1>
        <h1>Hello </h1>
       
        <About /> */}



    <BrowserRouter>
    <Navbar />
    <Routes>

        <Route  path="/home" element={ <Home></Home>} ></Route>
        <Route  path="/about" element={ <About></About>} ></Route>
        <Route  path="/contact" element={ <Contact></Contact>} ></Route>
      <Route path="/properties" element={<Properties data={name} duration={duration} />} />
        <Route  path="/usestate" element={ <State></State>} ></Route>
        <Route  path="/Service" element={ <Service />} ></Route>
        <Route path="/formhandling"element={<FormHandling />}/>
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/admin" element={<Admin />} />
<Route path="/user" element={<User />} />
        


    </Routes>
    </BrowserRouter>
</>


    )
}


export default App;


//Home > App > main >index.html