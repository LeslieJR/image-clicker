import CryptoJS from 'crypto-js';

/* Function to generate an authentication hash for interacting with the Marvel API.
 This API require a hash of a combination of a public key, private key, and timestamp to ensure that the client making the request knows the private key*/
export const generateHash = (ts, publicKey) => {
    const privateKey = import.meta.env.VITE_APP_PRIVATE_KEY ?? '';
    const concatString = ts + privateKey + publicKey;
    const md5Hash = CryptoJS.MD5(concatString).toString();
    return md5Hash;
};
