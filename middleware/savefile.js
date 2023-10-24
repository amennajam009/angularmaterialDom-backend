//Dependencies
const multer = require('multer');
const crypto = require('crypto');
const fs = require('fs');
// Dependince

//Block Start For Hashing the ImageUrl
const hashFunc = (fileName) => {
    const hash = crypto.createHash('md5');
    hash.update(fileName);
    const md5sum = hash.digest('hex');
    return md5sum
};
//Block Ends For Hashing the ImageUrl


//Block Start MiddleWare For handling The Single Image WIth HashFunction.
let saveFile = multer({
    storage: multer.diskStorage({
        destination: (req, next, cb) => {
            const {name} = req.body;
            let path = `./assets/cards/${name}`;
            if (!fs.existsSync(path)) {
                fs.mkdirSync(path);
            }
            cb(null, path);
        },
        filename: (req, file, cb) => {
            const md5sum = hashFunc(file.originalname);
            let ext = file.mimetype.split('/')[1];
            if (ext.includes('svg')) {
                ext = 'svg';
            } else if (file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
                ext = 'docx';
            }
            cb(null, `Course_${Date.now()}_${md5sum}.${ext}`);
        }
    })
});
//Block Ends MiddleWare For handling The Single Image WIth HashFunction.

module.exports = { saveFile };