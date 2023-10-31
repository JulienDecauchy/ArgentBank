export const login = (email, password) => async (dispatch) => {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            const data = await response.json();
            const { token } = data.body;

            dispatch({
                type: "LOGIN",
                payload: { token },
            });
        } else {
            console.error(
                "Erreur lors de la connexion. Statut de réponse:",
                response.status
            );
        }
    } catch (error) {
        console.error("Internal Error", error);
    }
};
