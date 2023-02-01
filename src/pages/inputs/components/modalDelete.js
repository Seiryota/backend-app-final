import Modal from 'react-modal';
import { BodyBtn, Row, Text, Title } from "./styles"
import { Button, Loading } from '../../../components';
import { removeInput } from '../functions/removeInput';
import { useState, useEffect } from "react";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const ModalDelete = ( { open, close, id, refresh, setError } ) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log(id);
    }, [id]);
    
    return (
        <Modal
            isOpen={open}
            onRequestClose={close}
            style={customStyles}
            contentLabel="Remover Entrada"
        >
           {loading && <Loading />}
            {!loading && 
            <>
            <Title>Remover Entrada</Title>
            <Text>Você tem certeza que deseja remover essa entrada?</Text>
            <Row>
                <BodyBtn>
                    <Button label="Sim" variant="btn-danger"  onClick={() => removeInput(id, setLoading, refresh, setError)} />
                </BodyBtn>
                <div style={{ marginLeft: "10px" }} />
                <BodyBtn>
                    <Button label="Não" variant="btn-primary" onClick={close} />
                </BodyBtn>
            </Row>
            </>}
        </Modal>
    )
  }

  export default ModalDelete;