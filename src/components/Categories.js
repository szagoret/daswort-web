import React, {useEffect, useState} from "react";
import {Card, Message, Segment} from "semantic-ui-react";
import {getCategoryChildrenApi} from "../api/CategoryApi";
import CategoryBreadcrumb from "./CategoryBreadcrumb";

const Categories = () => {

    const [category, setCategory] = useState();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const result = await getCategoryChildrenApi((category || {}).id);
            setCategories(result.data);
        };
        fetchCategories().catch();
    }, [category]);

    const handleOnClick = (category) => {
        setCategory(category);
    };
    const categoriesList = categories.map((category, i) => <Card key={i} link header={category.name} onClick={() => handleOnClick(category)}/>);

    return (
        <div>
            <Message attached header='Categories'/>
            <Segment attached>
                <CategoryBreadcrumb category={category} onClick={handleOnClick}/>
            </Segment>
            <Card.Group className='attached fluid segment'>
                {categoriesList}
            </Card.Group>
        </div>
    );
};


export default Categories;