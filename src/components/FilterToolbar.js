import React, {useEffect, useState} from "react";
import {Menu} from "semantic-ui-react";
import {func} from "prop-types";
import FilterDropdown from "./FilterDropdown";

const topics = [
    {
        "id": "3",
        "name": "Winter"
    },
    {
        "id": "2",
        "name": "Automn"
    },
    {
        "id": "1",
        "name": "Spring"
    }
];

const authors = [
    /* 1 createdAt:1/6/2020, 4:35:50 PM*/
    {
        "id": "5e1345c69f60cb5e1c1e8f36",
        "name": " Author FNAuthor FNAuthor FN",
        "lastName": "Author LN Inesa",
        "_class": "com.daswort.core.entity.Author"
    },

    /* 2 createdAt:1/6/2020, 4:18:57 PM*/
    {
        "id": "5e1341d190b1ff20b9dd721c",
        "name": "Author FN",
        "lastName": "Author LN",
        "_class": "com.daswort.core.entity.Author"
    },

    /* 3 createdAt:1/6/2020, 4:01:48 PM*/
    {
        "id": "5e133dcc90b1ff20b9dd721b",
        "name": "Author FN updated",
        "lastName": "Author LN",
        "_class": "com.daswort.core.entity.Author"
    },

    /* 4 */
    {
        "id": "9",
        "name": "fName 9",
        "lastName": "lName 9"
    },

    /* 5 */
    {
        "id": "8",
        "name": "fName 8",
        "lastName": "lName 8"
    },

    /* 6 */
    {
        "id": "7",
        "name": "fName 7",
        "lastName": "lName 7"
    },

    /* 7 */
    {
        "id": "6",
        "name": "fName 6",
        "lastName": "lName 6"
    },

    /* 8 */
    {
        "id": "50",
        "name": "fName 50",
        "lastName": "lName 50"
    },

    /* 9 */
    {
        "id": "5",
        "name": "fName 5",
        "lastName": "lName 5"
    },

    /* 10 */
    {
        "id": "49",
        "name": "fName 49",
        "lastName": "lName 49"
    },

    /* 11 */
    {
        "id": "48",
        "name": "fName 48",
        "lastName": "lName 48"
    },

    /* 12 */
    {
        "id": "47",
        "name": "fName 47",
        "lastName": "lName 47"
    },

    /* 13 */
    {
        "id": "46",
        "name": "fName 46",
        "lastName": "lName 46"
    },

    /* 14 */
    {
        "id": "45",
        "name": "fName 45",
        "lastName": "lName 45"
    },

    /* 15 */
    {
        "id": "44",
        "name": "fName 44",
        "lastName": "lName 44"
    },

    /* 16 */
    {
        "id": "43",
        "name": "fName 43",
        "lastName": "lName 43"
    },

    /* 17 */
    {
        "id": "42",
        "name": "fName 42",
        "lastName": "lName 42"
    },

    /* 18 */
    {
        "id": "41",
        "name": "fName 41",
        "lastName": "lName 41"
    },

    /* 19 */
    {
        "id": "40",
        "name": "fName 40",
        "lastName": "lName 40"
    },

    /* 20 */
    {
        "id": "4",
        "name": "fName 4",
        "lastName": "lName 4"
    }
];

const composition = [
    /* 1 */
    {
        "id": "3",
        "name": "composition 3"
    },

    /* 2 */
    {
        "id": "2",
        "name": "composition 2"
    },

    /* 3 */
    {
        "id": "1",
        "name": "Easy Way Composition"
    }
];

const difficulty = [
    {
        id: "1",
        name: "1"
    },
    {
        id: "2",
        name: "2"
    },
    {
        id: "3",
        name: "3"
    },
    {
        id: "4",
        name: "4"
    },
    {
        id: "5",
        name: "5"
    }
];

const FilterToolbar = ({onFilter}) => {

    const initialState = {
        topicsIds: [],
        melodyAuthorsIds: [],
        compositionsIds: [],
        difficultiesIds: []
    };

    const [searchCriteria, setSearchCriteria] = useState(initialState);

    useEffect(() => {
        onFilter(searchCriteria);
    }, [searchCriteria, onFilter]);

    const setValue = (keyValue) => {
        setSearchCriteria({...searchCriteria, ...keyValue});
    };

    return (
        <Menu>
            <FilterDropdown label="Thema"
                            options={topics}
                            selectedOptions={searchCriteria.topicsIds}
                            onChange={(topicsIds) => setValue({topicsIds})}
            />
            <FilterDropdown
                label="Author"
                options={authors}
                selectedOptions={searchCriteria.melodyAuthorsIds}
                onChange={(melodyAuthorsIds) => setValue({melodyAuthorsIds})}
                styles={{width: '450px'}}
            />
            <FilterDropdown
                label="Besetzung"
                options={composition}
                selectedOptions={searchCriteria.compositionsIds}
                onChange={(compositionsIds) => setValue({compositionsIds})}
            />
            <FilterDropdown
                label="Schwierigkeitsgrad"
                options={difficulty}
                selectedOptions={searchCriteria.difficultiesIds}
                onChange={(difficultiesIds) => setValue({difficultiesIds})}
            />
        </Menu>
    );
};

FilterToolbar.propTypes = {
    onFilter: func.isRequired
};

export default FilterToolbar;