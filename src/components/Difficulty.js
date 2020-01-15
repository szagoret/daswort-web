import React from "react";
import {Icon} from "semantic-ui-react";
import {number} from "prop-types";

const Difficulty = ({value}) => (
    [...Array(5).keys()].map(i => (<Icon key={i} name={i <= value ? "star" : "star outline"}/>))
);

Difficulty.propTypes = {
    value: number.isRequired
};

Difficulty.defaultProps = {
    value: 0
};

export default Difficulty;