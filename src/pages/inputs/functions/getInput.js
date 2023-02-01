import api from "../../../services/api";

export const getInput = async (id, setLoading, setError) => {
    setLoading(true);

    try {
        const session = JSON.parse(localStorage.getItem("session-finance-app"));
        const response  = await api.get(`/input/${id}`, {
            headers: {
                Authorization: `Bearer ${session.token}`,
            },
        } );
        setLoading(false);
        return response?.data;
    } catch (e) {
        setLoading(false);
        setError(true);
    }
};