import { Alert, Button, Input, Loading, ErrorMessage } from "../../components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useLocation } from "react-router-dom";
import { saveInput } from "./functions/saveInput"
import { useState, useEffect } from "react";
import { getInput } from "./functions/getInput"

const CreateInput = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const schema = yup.object({
        name: yup.string().required("Campo obrigatório"),
        value: yup.string().required("Campo obrigatório"),
        date: yup.string().required("Campo obrigatório"),
    });

    const navigate = useNavigate(); 
    const location = useLocation();

    const { handleSubmit, formState: { errors }, register, setValue  } = useForm( {
        resolver: yupResolver(schema),
    } );

    const save = (data) => {{
        data.value = Number(data.value);

        const newDate = new Date(data.date);
        const month = newDate.getMonth() + 1;
        const year = newDate.getFullYear();
        const monthYear = `${month}-${year}`;

        data.month = monthYear;

        saveInput(data, setLoading, setSuccess, setError, navigate )
    }};

    const getDataInput = async () => {
        const response = await getInput( location?.state?.id, setLoading, setError );
        setValue("name", response.name);
        setValue("value", response.value);
        setValue("date", response.date);
    }

    useEffect(() => {
        if (location?.state?.id) {
            getDataInput()
        }
    }, [ ]);

    return (
        <>
            <h1>Nova Entrada</h1>
                <form onSubmit={handleSubmit(save)} >
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Input label="Nome" placeholder="Digite o nome da entrada, ex: Salário" { ...register("name") } />
                                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                            </div>
                            <div className="col">
                                <Input label="Valor" placeholder="Digite o valor da entrada" type="number" { ...register("value") } />
                                { errors.value && <ErrorMessage>{ errors.value.message }</ErrorMessage> }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                    <Input label="Data" placeholder="Digite a data da entrada" type="date" { ...register("date") } />
                                    { errors.date && <ErrorMessage> { errors.date.message } </ErrorMessage> }
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "20px" }} >
                            <div className="col-lg-1">
                                <Button label="Cancelar" variant="btn-danger" onClick={() => navigate( "/inputs" ) } />
                            </div>
                            <div className="col-lg-1">
                            <Button label="Salvar" variant="btn-primary" />
                            </div>
                        </div>
                    </div>
                </form>
                {success && (
                <Alert
                    message="Operação realizada com sucesso"
                    variant="alert-primary"
                 />   
            )}
             {error && (
                <Alert
                    message="Não foi possível realizar a operação, tente novamente"
                    variant="alert-danger"
                 />   
            )}
        </>
    );
};

export default CreateInput;