import React, {useEffect, useState} from "react";
import {getCategoriesParentTreeApi} from "../api/CategoryApi";
import {Breadcrumb, Icon} from "semantic-ui-react";
import {concat} from 'lodash';

const CategoryBreadcrumb = ({category, onClick}) => {

    const [categoryPath, setCategoryPath] = useState([]);

    useEffect(() => {
        if ((category || {}).id) {
            const fetchCategoryPath = async () => {
                const result = await getCategoriesParentTreeApi(category.id);
                setCategoryPath(result.data);
            };
            fetchCategoryPath().catch();
        } else {
            setCategoryPath([]);
        }
    }, [category]);

    const sections = concat({
            key: '0',
            content: <Icon name='home'/>,
            onClick: () => onClick()
        },
        categoryPath.map((c, i) => {
            const isLastIndex = i === categoryPath.length - 1;
            return {
                key: c.id,
                content: c.name,
                link: !isLastIndex,
                active: isLastIndex,
                onClick: () => !isLastIndex ? onClick(c) : null
            };
        })
    );

    return (
        <div>
            <Breadcrumb sections={sections}/>
        </div>
    );
};

export default CategoryBreadcrumb;

