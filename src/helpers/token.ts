let token = {
    access_token: undefined,
    keyName: "access_token",
    getToken: function () {
        if (token.access_token !== undefined) {
            return token;
        }
        let data = localStorage.getItem(token.keyName);
        if (data === null || data === undefined) {
            return undefined;
        }
        return data;
    },
    setToken: function (value: string) {
        localStorage.setItem(token.keyName, value);
    },
    removeToken: function () {
        localStorage.removeItem(token.keyName);
    }
}
export default token;