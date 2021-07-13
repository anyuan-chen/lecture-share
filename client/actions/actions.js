export const LOGIN = "LOGIN";
export const login = () => {
    return {
        type: LOGIN,
    }
};

export const LOGOUT = "LOGOUT";
export const logout = () => ({
  type: LOGOUT,
});
