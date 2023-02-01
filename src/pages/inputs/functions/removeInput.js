import api from "../../../services/api";

export const removeInput = async (id, setLoading, refresh, setError ) =>{
    setLoading(true);

    try { 
        const session = JSON.parse(localStorage.getItem("session-finance-app"));
        await api.delete(`/input/${id}`, {
            headers: {
                Authorization: `Bearer ${session.token}`,
            },
        });
        setLoading(false);
        refresh();
    } catch (e) {
        setLoading(false);
        setError(true);
    }
};