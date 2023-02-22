import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalFormulario from './componentes/ModalFormulario';
import Button from 'react-bootstrap/Button';



function App() {

  const [modalFormulario, setModalFormulario] = useState(false)
  const [show, setShow] = useState(false);
  return (
    <div className="App">


      <Button variant="primary" onClick={() =>
        setShow(true)
      }>
        colocar imagem svg
      </Button>

      <ModalFormulario
        show={show}
        onHide={() => setShow(false)}
      />



    </div>
  );
}

export default App;
