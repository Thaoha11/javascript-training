import api from '../constant'

/**
 * Function uses url, params and method to return the result requested by the user
 * @param {string} url 
 * @param {let} params 
 * @param {method} method 
 * @returns {} result 
 */

async function request(url, params, method = 'GET') {

    const options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (params) {
        if (method === 'GET') {
            url += '?' + objectToQueryString(params);
        } else {
            options.body = JSON.stringify(params);
        }
    }

    const response = await fetch(api.API_HOST + url, options);

    if (response.status !== 200) {
        return generateErrorResponse('The server responded with an unexpected status.');
    }

    const result = await response.json();

    return result;

}

function get(url, params) {
    return request(url, params);
}

function create(url, params) {
    return request(url, params, 'POST');
}

function update(url, params) {
    return request(url, params, 'PUT');
}

function remove(url, params) {
    return request(url, params, 'DELETE');
}

export default {
    get,
    create,
    update,
    remove
}

