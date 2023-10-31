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
                "Login Error. Response Status:",
                response.status
            );
        }
    } catch (error) {
        console.error("Internal Error", error);
    }
};

export const logout = () => ({ type: "LOGOUT" });

export const userName = (newUserName) => async (dispatch, getState) => {
    try {
        const { token } = getState();
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            body: JSON.stringify({ userName: newUserName }),
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${token.token}`,
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            dispatch({
                type: "USER_NAME",
                payload: newUserName,
            });
        } else {
            console.error(
                "Error when updating username. Response Status:",
                response.status
            );
        }
    } catch (error) {
        console.error("Error when updating username", error);
    }
};
