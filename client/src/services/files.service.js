import axiosInstance from '../api/axiosInstance.js';

class Files {
    async getValidsFiles() {
        const response = await axiosInstance.axiosBase.get('files/data');
        return response.data.data;
    }

    async getFilesNames() {
        const response = await axiosInstance.axiosBase.get('files/list');
        return response.data.data.data;
    }

    async getFileData(fileName) {
        const response = await axiosInstance.axiosBase.get(`files/data?fileName=${fileName}`);
        return response.data.data;
    }
}

export default new Files();
