import { Request } from "../helpers/request";
import { urls } from "../helpers/constants";

export const getCourses = async () => {
    try {
        const response = await Request.get(urls.GET_COURSES);
        return response.data;
    }
    catch (err) {
        throw err;
    }
}


export const getSubjects = async (id) => {
    try {
        const response = await Request.get(`${urls.GET_SUBJECTS}/${id}`);
        return response.data;
    }
    catch (err) {
        throw err;
    }
}

export const getTopics = async (id) => {
    try {
        const response = await Request.get(`${urls.GET_TOPICS}/${id}`);
        return response.data;
    }
    catch (err) {
        throw err;
    }
}

export const downloadFile = async (type, name) => {
    try {
        await Request.download(`${urls.DOWNLOAD_FILE}`, name);
        return true;
    } catch (err) {
        throw err;
    }
}