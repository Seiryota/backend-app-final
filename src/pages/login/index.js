import { Main, Body, Title, Space } from "./styles";
import { Input, Button, Alert, Loading } from "../../components";
import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [ email, setEmail ] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();
    
    const requestLogin = async (ev) => {
        ev.preventDefault();
        setLoading(true);

        try {
            const data = { email, password };
            const response = await api.post("/login", data);
            if(response?.data?.token) {
                api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

                const object = {
                    logged: true,
                    token: response.data.token,
                };

                localStorage.setItem("session-finance-app", JSON.stringify(object) );
                navigate("/");
                return;
            }
            setLoading(false);
        } catch(e) {
            setError(true);
            setTimeout(() => {
                setError(false)
            }, 3000);
            setLoading(false);
        }
    };

    return (
        <Main>
            <Body>
               <Title>Sistema Financeiro</Title>
               { loading && <Loading /> }
               { !loading && (
                <form onSubmit={requestLogin}  >
                    <Input label="E-mail" placeholder="Digite seu E-mail" type="email"  required value={email} onChange={(ev) => setEmail(ev.target.value)} />
                    <Space />
                    <Input label="Senha" placeholder="Digite sua Senha"  type="password"  required value={ password } onChange={(ev) => setPassword(ev.target.value)}  />
                    <Space />
                    <Button  label="Entrar" variant="btn-primary"  type="submit"  />
               </form> 
               )}
            </Body>
            {error &&
                <Alert variant="alert-danger" message="Usuário e/ou senha inválidos" />
            }
        </Main>
    )
};

export default Login;