import React, {useEffect, useState} from "react";
import {Breadcrumb, Container, Search, Segment} from "semantic-ui-react";
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
            debounce(setSearchTerm, 1000, {leading: true,})
            setSearchTerm(value);
        };


        const resultRenderer = ({path, song}) => {
            const sections = path.map((item, i) => {
                return {key: item.id, content: item.name}
            });
            return (
                <Container>
                    <Segment basic style={{
                        margin: '3px',
                        padding: '.5em .5em',
                        color: 'rgba(0,0,0,.4)',
                        fontWeight: '400',
                        fontSize: '1em',
                        fontStyle: 'normal'
                    }}>
                        <Breadcrumb sections={sections}/>
                    </Segment>
                    <Segment basic style={{
                        // backgroundColor: 'rgb(250, 252, 255)',
                        margin: '3px',
                        padding: '.5em .5em'
                    }}>
                        {song.name}
                    </Segment>
                </Container>
            );
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
    }
;


export default SongSearch;