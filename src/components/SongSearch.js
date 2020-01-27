import React, {useEffect, useState} from "react";
import {Label, Search} from "semantic-ui-react";
import {findSongsByNameApi} from "../api/NotesApi";
import {debounce} from 'lodash';
import {history} from '../utils/history';
import {isNotEmpty} from "../utils/StringUtils";

const SongSearch = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [result, setResult] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const {data} = await findSongsByNameApi(searchTerm);
            setResult(data);
            setIsLoading(false);
        };
        if (isNotEmpty(searchTerm)) {
            fetchData();
        }
    }, [searchTerm]);


    const handleOnResultSelect = (e, {result}) => {
        setSearchTerm('');
        history.push(`/song/${result.song.id}`);
    };

    const handleSearchChange = (e, {value}) => {
        setSearchTerm(value);
    };


    const resultRenderer = (props) => {
        console.log('am ajuns');
        return (<Label content={props.song.name}/>);
    };

    return (
        <>
            <Search
                className="main-search"
                fluid
                input={{fluid: true}}
                loading={isLoading}
                onResultSelect={handleOnResultSelect}
                onSearchChange={debounce(handleSearchChange, 1000, {leading: true,})}
                resultRenderer={resultRenderer}
                results={result}
                value={searchTerm}
            />
        </>
    );
};


export default SongSearch;