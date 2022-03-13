import Inicio from "./Inicio";
import Encabezado from './Encabezado';
import Contacto from './Contacto';
import Productos from './Productos';
import { Routes, Route } from 'react-router-dom';
function App(){
  return(
    <div>
      <Encabezado/>
      <Routes>
        <Route path= '/' element= {<Inicio/>} />
        <Route path= '/contacto' element= {<Contacto/>} />
        <Route path= '/productos' element= {<Productos/>} />
      </Routes>
      
    </div>
  );
}
export default App;