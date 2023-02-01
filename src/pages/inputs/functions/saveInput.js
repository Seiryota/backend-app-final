import api from "../../../services/api";

export const saveInput = async ( data, setLoading, setSuccess, setError, navigate) => {
    setLoading(true);

    try{
        const session = JSON.parse(localStorage.getItem("session-finance-app"));
        await api.post(`/input`, data, {
            headers: {
                Authorization: `Bearer ${session.token}`,
            },
        });
        setSuccess(true);
        setLoading(false);
        setTimeout(() => {
            navigate("/inputs")
        }, 3000);
    } catch (e) {
        setError(true);
        setLoading(false);
    }
}