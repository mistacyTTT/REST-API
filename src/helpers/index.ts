import crypto from 'crypto';

const SECRET= 'STACY-REST-API';

export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt: String, password: String) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
};
