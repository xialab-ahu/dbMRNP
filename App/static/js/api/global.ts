const site: string = process.env.NODE_ENV === 'production' ? '/api/' : 'https://mvip.whu.edu.cn/api/';

// interface ParamObject {
//     [index: string]: string | number | boolean;
// }

async function asyncFetchGet<T>(route: string, params: string | T = ''): Promise<any> {
    let url: string = '';
    if (typeof params === 'string') {
        if (params !== '') url = `${site}${route}/?${params}`;
        else url = `${site}${route}/`;
    } else {
        if (JSON.stringify(params) !== '{}') {
            let search: string[] = [];
            for (let index in params) {
                if (params[index]) search.push(`${index}=${params[index]}`);
            }
            url = `${site}${route}/?${search.join('&')}`;
        } else url = `${site}${route}/`;
    }

    const response: Response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message);
    }
    const result = await response.json();
    return result;
}


async function asyncFetchPost<T>(route: string, params: Object | T = {}): Promise<any> {
    const url = `${site}${route}/`;
    const response: Response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message);
    }

    const result = await response.json();
    return result;
}


export { asyncFetchGet, asyncFetchPost };