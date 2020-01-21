import FilterDropdown from "./FilterDropdown";
import React from "react";
import {Menu} from "semantic-ui-react";

const themes = [
    {
        id: 1,
        name: "Bitte und Gebet"
    },
    {
        id: 2,
        name: "Gotes liebe und"
    },
    {
        id: 3,
        name: "Dank und Lob"
    },
    {
        id: 4,
        name: "Glaube und Rechtfertigung"
    },
    {
        id: 5,
        name: "Freude im Herrn"
    },
    {
        id: 6,
        name: "Wort Gottes"
    },
    {
        id: 7,
        name: "Gemeinde"
    },
    {
        id: 8,
        name: "Die ewige Heimat"
    },
    {
        id: 9,
        name: "Dienst und Mission"
    },
    {
        id: 10,
        name: "Ruf zum Glauben, Umkehr"
    },
    {
        id: 11,
        name: "Taufe"
    },
    {
        id: 12,
        name: "Abendmahl"
    },
    {
        id: 13,
        name: "Geburstag"
    },
    {
        id: 14,
        name: "Palmsonntag"
    },
    {
        id: 15,
        name: "Leiden un Sterben Jesu Christi"
    },
    {
        id: 16,
        name: "Hochzeit"
    },
    {
        id: 17,
        name: "Ehe und Familie"
    },
    {
        id: 18,
        name: "Beerdigung"
    },
    {
        id: 19,
        name: "Trost und Vertrauen"
    },
    {
        id: 20,
        name: "Geburt Jesu Christi"
    },
    {
        id: 21,
        name: "Zum neues Jahr"
    },
    {
        id: 22,
        name: "Zeit und Ewigkeit"
    },
    {
        id: 23,
        name: "Auferstehung Jesu Christi"
    },
    {
        id: 24,
        name: "Himmelfahrt Jesu Christu"
    },
    {
        id: 25,
        name: "Heiliger Geist"
    },
    {
        id: 26,
        name: "Erntedankfest"
    },
    {
        id: 27,
        name: "Widerkunft Jesu Christi"
    },
    {
        id: 28,
        name: "Heiligung"
    }
];

const authors = [
    {
        id: 1,
        name: "Label 1"
    },
    {
        id: 2,
        name: "Label 2"
    },
    {
        id: 3,
        name: "Label 3"
    }
];

const composition = [
    {
        id: 1,
        name: "Solo"
    },
    {
        id: 2,
        name: "Duett"
    },
    {
        id: 3,
        name: "Trio"
    },
    {
        id: 4,
        name: "Quartett"
    }
];

const difficulty = [
    {
        id: 1,
        name: "1"
    },
    {
        id: 2,
        name: "2"
    },
    {
        id: 3,
        name: "3"
    },
    {
        id: 4,
        name: "4"
    },
    {
        id: 5,
        name: "5"
    }
];

export default () => (
    <Menu>
        <FilterDropdown name="Thema" options={themes}/>
        <FilterDropdown name="Author" options={authors}/>
        <FilterDropdown name="Besetzung" options={composition}/>
        <FilterDropdown name="Schwierigkeitsgrad" options={difficulty}/>
    </Menu>
);