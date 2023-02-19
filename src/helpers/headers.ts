function getHeaders(token: any) {
    return {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    };
}
export default getHeaders;