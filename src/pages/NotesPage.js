import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Breadcrumb, Card, Message, Segment} from "semantic-ui-react";
import FilterToolbar from "../components/FilterToolbar/FilterToolbar";
import SongTable from "../components/SongTable";
import {connect} from "react-redux";
import {findSongsByCriteria} from "../actions/notes/NotesActions";

class NotesPage extends Component {


    constructor(props) {
        super(props);
        this.state = {page: 0, size: 20, searchCriteria: {}}
    }

    onFilter = (searchCriteria) => {
        this.setState({searchCriteria}, () => this.onSearch());
    };

    onSearch = () => {
        this.props.findSongsByCriteria({...this.state.searchCriteria, page: this.state.page, size: this.state.size});
    };

    onNext = () => this.onPageChange(this.state.page + 1);

    onPrev = () => this.onPageChange(this.state.page - 1);

    onPageChange = (page) => this.setState({page}, () => this.onSearch(this.state.searchCriteria));

    render() {
        return (
            <>
                <FilterToolbar onFilter={this.onFilter}/>
                <SongTable songs={this.props.songs}/>
                <div>
                    <Message attached header='Categories'/>
                    <Segment attached>
                        <Breadcrumb style={{margin: ".875em .5em"}}>
                            <Breadcrumb.Section as={Link} to="/asa/e/bine" content="Prima"/>
                            <Breadcrumb.Divider content="/"/>
                            <Breadcrumb.Section as={Link} to="/asa/e/bine" content="A doua"/>
                            <Breadcrumb.Divider content="/"/>
                            <Breadcrumb.Section content="Ultima"/>
                        </Breadcrumb>
                    </Segment>
                    <Card.Group className='attached fluid segment'>
                        <Card link header='Rick Sanchez' meta='Scientist'/>
                        <Card link header='Rick Sanchez' meta='Scientist'/>
                        <Card link header='Rick Sanchez' meta='Scientist'/>
                        <Card link header='Rick Sanchez' meta='Scientist'/>
                        <Card link header='Rick Sanchez' meta='Scientist'/>
                        <Card link header='Rick Sanchez' meta='Scientist'/>
                        <Card link header='Rick Sanchez' meta='Scientist'/>
                        <Card link header='Rick Sanchez' meta='Scientist'/>
                    </Card.Group>
                </div>
            </>
        );
    }
}

export default connect((state) => ({
    songs: state.nr.songs
}), {findSongsByCriteria})(NotesPage);