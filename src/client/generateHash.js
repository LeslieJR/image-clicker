import CryptoJS from 'crypto-js';
export const generateHash = (ts, publicKey) => {
    const privateKey = import.meta.env.VITE_APP_PRIVATE_KEY ?? '';
    const concatString = ts + privateKey + publicKey;
    const md5Hash = CryptoJS.MD5(concatString).toString();
    return md5Hash;
};
