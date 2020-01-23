import axios from 'axios';

import MockAxios from 'axios-mock-adapter';

const mock = new MockAxios(axios);

mock.onGet("/songs").reply(200, {
    songs: [
        {
            "_id": "5e0084ae7ae3d713a5ee7964",
            "name": "Научи меня, Боже, молиться (6 фл.)",
            "category": {
                "_id": "5",
                "name": "category 5",
                "parentId": "4"
            },
            "tags": [
                {
                    "_id": "1",
                    "name": "tag 1"
                },
                {
                    "_id": "10",
                    "name": "tag 10"
                }
            ],
            "_class": "com.daswort.core.entity.Song",
            "files": [
                {
                    "name": "Научи меня,Боже, молиться - Flute 3.pdf",
                    "extension": "pdf",
                    "fileCode": "0c2edfb1-96b3-4a43-b3af-fd75820dfe50",
                    "size": 138286
                },
                {
                    "name": "Научи меня,Боже, молиться - Flute 2.pdf",
                    "extension": "pdf",
                    "fileCode": "dbef68dc-c93c-43e3-a838-2217a2b63a69",
                    "size": 139004
                }
            ],
            "partition": {
                "_id": "2",
                "name": "Partitoion nb 2 si 2"
            },
            "composition": {
                "_id": "1",
                "name": "Easy Way Composition"
            }
        },
        {
            "_id": "5df6e672c977fc4b5ea0d069",
            "name": "Custom added song updated",
            "category": {
                "_id": "4",
                "name": "category 4",
                "parentId": "2"
            },
            "tags": [
                {
                    "_id": "1",
                    "name": "tag 1"
                },
                {
                    "_id": "10",
                    "name": "tag 10"
                },
                {
                    "_id": "3",
                    "name": "tag 3"
                }
            ],
            "melody": {
                "_id": "4",
                "firstName": "fName 4",
                "lastName": "lName 4"
            },
            "_class": "com.daswort.core.entity.Song",
            "partition": {
                "_id": "2",
                "name": "Partitoion nb 2 si 2"
            },
            "composition": {
                "_id": "1",
                "name": "Easy Way Composition"
            }
        }
    ]
});

export const findSongsByNameApi = searchTerm => axios.get("/songs", {params: {searchTerm}}).catch(handleError);


const handleError = (error) => {
    // const status = error.status ? error.status : error.response && error.response.status;
    // if (status === 401) {
    //     removeToken();
    // }

    return Promise.reject(error);
};