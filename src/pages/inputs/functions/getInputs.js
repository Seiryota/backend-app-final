import api from "../../../services/api";

export const getInputs = async ( setLoading, setData, setError ) => {
    setLoading(true);

    const session = JSON.parse(localStorage.getItem("session-finance-app"));
    
    try {
        const response = await api.get("/input", {
            headers: {
                Authorization: `Bearer ${session.token}`
            }
        } );
        setData(response?.data);
        setLoading(false);
    } catch (e) {
        setLoading(false);
        setError(true);
    }
};