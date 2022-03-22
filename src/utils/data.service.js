const fetchData = (url) => {
    return fetch(url)
            .then(response => response.json())
            .catch( error => console.error(error));
};

export {fetchData};