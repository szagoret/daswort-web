import SongTable from "../components/SongTable";
import React from "react";
import {Container, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";

const SongListPage = () => {

    return (
        <Container>
            <Link to="/"> <Icon name="arrow left"/> Back to home page</Link>
            <SongTable/>
        </Container>
    );
};

export default SongListPage;