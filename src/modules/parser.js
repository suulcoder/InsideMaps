export const bodyParser = (dic) => {
    let formBody = [];
    for (let property in dic) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(dic[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    return formBody
}