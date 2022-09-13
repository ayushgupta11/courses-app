import path from 'path';

export const downloadFile = async (req, res) => {
    const { type, name } = req.params;
    const file = path.join(__dirname, `../../public/assets/${name}`);
    res.download(file);
}

