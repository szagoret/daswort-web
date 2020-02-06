import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Breadcrumb, Card, Message, Segment} from "semantic-ui-react";
import FilterToolbar from "../components/FilterToolbar";
import SongTable from "../components/SongTable";
import {connect} from "react-redux";
import {findSongsByCriteria} from "../actions/notes/NotesActions";

class NotesPage extends Component {


    constructor(props) {
        super(props);
        this.state = {page: 0, sortProperty: 'name', sortDirection: 'ASC', searchCriteria: {}, loading: false}
    }

    onSearch = () => {
        const {searchCriteria, page, sortProperty, sortDirection} = this.state;
        const {size} = this.props;
        this.setState({loading: true},
            this.props.findSongsByCriteria({
                ...searchCriteria,
                page,
                size,
                sortDirection,
                sortProperty
            }, () => this.setState({loading: false})));
    };

    onFilter = (searchCriteria) => this.setState({searchCriteria}, this.onSearch);

    onSorting = (sortProperty) => this.setState({
        sortProperty,
        sortDirection: this.state.sortDirection === 'ASC' ? 'DESC' : 'ASC'
    }, this.onSearch);

    onPageChange = (page) => this.setState({page}, this.onSearch);

    render() {
        const {songs, page, total, size} = this.props;
        const {sortDirection, sortProperty, loading} = this.state;
        return (
            <>
                <Segment basic loading={loading}>
                    <FilterToolbar onFilter={this.onFilter}/>
                    <SongTable
                        songs={songs}
                        totalItems={total}
                        page={page}
                        pageSize={size}
                        onPageChange={this.onPageChange}
                        sortedColumn={sortProperty}
                        direction={sortDirection}
                        onSorting={this.onSorting}
                    />
                </Segment>
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
    songs: state.nr.songs,
    size: state.nr.size,
    page: state.nr.page,
    total: state.nr.total
}), {findSongsByCriteria})(NotesPage);