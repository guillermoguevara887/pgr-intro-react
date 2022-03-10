import Inicio from "./inicio";
import Encabezado from "./Encabezado";
import Contacto from "./Contacto";
import Productos from "./Productos";
import {Routes, Router} from 'react-router-dom'

function App() {
  return (
    <>
      <Encabezado/>
         <Routes>
           <Router path='/' element = {<Inicio/>} />
           <Router path='/ Contacto ' element = {<Contacto/>} />
           <Router path='/ Productos' element = {<Productos/>} />
         
         </Routes> 
      

    </>
   
  );
}

export default App;
