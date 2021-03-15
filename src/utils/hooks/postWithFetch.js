const requestOptions = {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer my-token',
    },
    body: {} // JSON.stringify({ title: 'React POST Request Example' })
};

async function postWithFetch({url, token, body}) {
    console.log(url, token, body);
    requestOptions['headers']['Authorization'] = token
    requestOptions['body'] = JSON.stringify(body);
    const response = await fetch(url, requestOptions);
    const json = await response.json();
    console.log(json);
}

export default postWithFetch;