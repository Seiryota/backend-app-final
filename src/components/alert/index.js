import { Body, Alert } from "./styles";

const AlertComponent = ({ message, variant }) => {
    return (
        <Body>
            <Alert className={ `alert ${variant}` } role="alert" > {message} </Alert>
        </Body>
    )
};

export default AlertComponent;