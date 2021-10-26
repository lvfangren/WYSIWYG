const baseUrl = 'http://0.0.0.0:8080/';

export default async (url = '', data = {}, type = 'GET', method = 'fetch') => {
    type = type.toUpperCase();
    url = baseUrl + url;

    if (type === 'GET') {
        let dataStr = ''; // 数据拼接字符串
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        });
        // debugger;
        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
        console.log(url, 'url');
    }

    if (window.fetch && method === 'fetch') {
        const requestConfig = {
            credentials: 'include',
            method: type,
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                // eslint-disable-next-line
    			'accept-language': 'zh-CN,zh;q=0.9',
            },
            mode: 'cors',
            cache: 'force-cache',
        };

        if (type === 'POST') {
            Object.defineProperty(requestConfig, 'body', {
                value: JSON.stringify(data),
            });
        }

        try {
            const response = await fetch(url, requestConfig);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            throw new Error(error);
        }
    } else {
        return new Promise((resolve, reject) => {
            let requestObj;
            if (window.XMLHttpRequest) {
                requestObj = new XMLHttpRequest();
            }

            let sendData = '';
            if (type === 'POST') {
                sendData = JSON.stringify(data);
            }

            requestObj.open(type, url, true);
            requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            requestObj.send(sendData);

            requestObj.onreadystatechange = () => {
                if (requestObj.readyState === 4) {
                    if (requestObj.status === 200) {
                        let obj = requestObj.response;
                        if (typeof obj !== 'object') {
                            obj = JSON.parse(obj);
                        }
                        resolve(obj);
                    } else {
                        reject(requestObj);
                    }
                }
            };
        });
    }
};
