import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/esm/CloseButton';

function ModalFormulario(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //para verificar oq esta sendo difitado dentro de cada campo do input
    const [valor, setValor] = useState()
    const aoDigitado = (evento) => {
        setValor(evento.target.value)
        console.log(valor)
    }

    //para ver se o campo esta com caracter
    // const [nome, setNome] = useState('')
    // const [cliente, setCliente] = useState('')

    // //submit
    // const aoSalvar = (evento) =>{
    //     evento.preventDefault()
    //     console.log("evento de submit", nome, cliente)
    // }
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
        teste para por a imagem
      </Button> */}

            <Modal
                {...props}
                // show={show}
                // onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header >
                    <Modal.Title>Vincular Cliente</Modal.Title>
                    <CloseButton onClick={props.onHide} className='buttonFechar'></CloseButton>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>VINCULAR O CLIENTE:</Form.Label>
                            
                        <Form.Control 
                        placeholder="Digite o nome do Cliente" 
                        onChange={aoDigitado}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>PARA O CLIENTE:</Form.Label>
                        
                        <Form.Control 
                        placeholder="Digite o nome do Cliente" 
                        onChange={aoDigitado}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant="secondary" 
                        onClick={handleClose}>
                            Close
                    </Button>
                    <Button  >Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}



export default ModalFormulario;