import { Alert, Button, Loading } from "../../components";
import { SessionCreate, SessionBtns, Row } from "./styles";
import { getInputs } from "./functions/getInputs";
import { useEffect, useState } from "react";
import ModalDelete from "./components/modalDelete";
import { useNavigate } from "react-router-dom";

const Inputs = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [id, setId] = useState(null);

    useEffect(() => {
        getInputs(setLoading, setData, setError)
    }, [] );

    const navigate = useNavigate()

    const convertValue = ( value ) => {
        if (value) {
            const newValue = value.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
            return newValue
        }
    }

    useEffect (() => {
        if(success) {
            setTimeout(() => {
                setSuccess(false);
            }, 3000);
        }
    }, [success]);

    const clickDeleteButton = (id) => {
        setId(id);
        setOpenDelete(true);
    };

    const refresh = () => {
        getInputs(setLoading, setData, setError);
        setOpenDelete(false);
    };

    const clickEditButton = (id) => {
        setId(id);
    };

    return (
        <>
            <SessionCreate>
                <Button label="Nova Entrada" variant="btn-primary" onClick={() => navigate("/inputs/create")} />
            </SessionCreate>
            { loading && <Loading /> }
            {!loading &&
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Data</th>
                    <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.length ?
                        data.map((data, i) => 
                            <tr>
                                <th scope="row"> {data.id} </th>
                                <td> {data.name} </td>
                                <td>{ convertValue(data.value)}</td>
                                <td>{data.date}</td>
                                <td>
                                    <Row>
                                        <SessionBtns>
                                            <Button label="Editar" variant="btn-success" onClick={() => clickEditButton(data.id)} />
                                        </SessionBtns>
                                        <div style={{ marginLeft: "10px" }} />
                                        <SessionBtns>
                                            <Button label="Excluir" variant="btn-danger"  onClick= {() => clickDeleteButton(data.id) }  />
                                        </SessionBtns>
                                    </Row>
                                </td>
                            </tr>
                        )
                    : null }
                </tbody>
            </table>}
            
            {success && (
                <Alert
                    message="Operação realizada com sucesso"
                    variant="alert-primary"
                 />   
            )}
            {openDelete && 
                <ModalDelete open={openDelete} close={() => setOpenDelete(false)} setError={setError} id={id} refresh={refresh}/>
            }
        </>
    );
};

export default Inputs;