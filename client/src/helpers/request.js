import axios from 'axios';

const instance = axios.create({
    // .. where we make our configurations
    baseURL: 'http://localhost:4000'
});

instance.defaults.headers.common['Content-Type'] = 'application/json';

export class Request {
    static async get(url) {
        try {
            const response = await instance.get(url);
            return response;
        }
        catch (err) {
            throw err;
        }
    }
    static async download(url, fileName) {
        try {
            const response = await instance({
                url,
                method: 'POST',
                responseType: 'blob',
                data: {
                    "name": fileName
                }
            })
            const href = URL.createObjectURL(response.data);

            // create "a" HTLM element with href to file & click
            const link = document.createElement('a');
            link.href = href;
            link.setAttribute('download', fileName); //or any other extension
            document.body.appendChild(link);
            link.click();

            // clean up "a" element & remove ObjectURL
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            return;
        }
        catch (err) {
            throw err;
        }
    }
}