import React, {Component} from "react";
import {Segment} from "semantic-ui-react";
import FilterToolbar from "../components/FilterToolbar";
import SongTable from "../components/SongTable";
import {connect} from "react-redux";
import {findSongsByCriteria} from "../actions/notes/NotesActions";
import Categories from "../components/Categories";

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
                <Categories/>
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