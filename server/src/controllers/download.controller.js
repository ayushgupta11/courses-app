import path from 'path';

export const downloadFile = async (req, res) => {
    const { type, name } = req.params;
    const file = path.join(__dirname, `../../public/assets/${type}/${name}`);
    res.download(file);
}