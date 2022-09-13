import path from 'path';

export const downloadFile = async (req, res) => {
    const { name } = req.body;
    const file = path.join(__dirname, `../../public/assets/${name}`);
    res.download(file);
}

