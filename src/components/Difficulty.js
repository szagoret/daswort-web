import React from "react";
import {Icon} from "semantic-ui-react";
import {string} from "prop-types";

const Difficulty = ({children}) => (
    [...Array(5).keys()].map(i => (<Icon key={i} name={i < parseInt(children) ? "star" : "star outline"}/>))
);

Difficulty.propTypes = {
    children: string.isRequired
};

export default Difficulty;