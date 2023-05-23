import Axios from '../plugins/axios';
let axios = Axios();
import { API_BASE_URL, CDN_BASE_URL, X_API_KEY, X_TENANTID } from '../constants';
import Cookie from 'js-cookie';
import { jwtIsValid } from '../common';

export const uploadFile = async (payload) => {
    return axios.post(`${API_BASE_URL}/file/upload`, payload)
}

// export const uploadFile = async (payload, setUploadProgress) => {
//     if(setUploadProgress){
//         let progress = 0;
//         const config = {
//             onUploadProgress: progressEvent => {
//                 progress = (progressEvent.loaded / progressEvent.total) * 100;
//                 setUploadProgress(progress);
//                 //console.log(progress);
//             }
//         }
//         return axios.post(`${UPLOAD_BASE_URL}/upload/upload`, payload, config)
//     }else{
//         return axios.post(`${UPLOAD_BASE_URL}/upload/upload`, payload)
//     }
// }

// uploadFileCustom(formData, setUploadProgress).then(res =>{
//     console.log(res)
//    setUploading(null);
//  }).catch(err=> {
//    console.log("error: ", err.message);
//    setUploading(null);
//  })

export const imageUploadHandler = (blobInfo, progress) => new Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest();

    const jwt = Cookie.get('cmauth') ? Cookie.get('cmauth') : null;
    if (!jwtIsValid(jwt)) {
        reject({ message: 'HTTP Error: No valid token', remove: true });
    }
    
    xhr.withCredentials = false;
    xhr.open('POST', `${API_BASE_URL}/file/upload`);

    xhr.setRequestHeader('X-Api-Key', X_API_KEY);
    xhr.setRequestHeader('X-TenantID', X_TENANTID);
    xhr.setRequestHeader('Authorization', `Bearer ${jwt}`);
  
    xhr.upload.onprogress = (e) => {
        progress(e.loaded / e.total * 100);
    };

    xhr.onload = () => {
        if (xhr.status === 403 || xhr.status === 401) {
            reject({ message: 'HTTP Error: ' + xhr.status, remove: true });
            return;
        }

        if (xhr.status < 200 || xhr.status >= 300) {
            reject('HTTP Error: ' + xhr.status);
            return;
        }

        const json = JSON.parse(xhr.responseText);

        if (!json || typeof json[0].path != 'string') {
            reject('Invalid JSON: ' + xhr.responseText);
            return;
        }

        resolve(CDN_BASE_URL + json[0].largePath);
    };

    xhr.onerror = () => {
        reject('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
    };

    const formData = new FormData();
    formData.append('file', blobInfo.blob(), blobInfo.filename());

    xhr.send(formData);
});
