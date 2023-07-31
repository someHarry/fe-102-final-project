import "./FilterPanel.scss";
// import {useEffect, useState} from "react";
// import PropTypes from 'prop-types';

function FilterPanel() {
    const filterOptions = {
        variety: [
            "Cabernet Sauvignon",
            "Sangiovese",
            "Rosé",
            "Bordeaux Red Blends",
            "Tuscan Blends",
            "Rhone Red Blends",
            "Pinot Noir",
            "Syrah/Shiraz",
            "Chardonnay",
            "Cabernet Franc",
            "Sauvignon Blanc",
            "Riesling",
            "Pinot Meunier",
            "Merlot",
            "Melon de Bourgogne",
            "Malbec",
            "Torrontes",
            "Other Red Blends",
            "Pinot Gris/Grigio",
            "Rosé from Cotes de Provence",
            "Blaufrankisch",
            "Tempranillo",
            "Nerello Mascalese",
            "Muller Thurgau"
        ],
        color: [
            "red",
            "rose",
            "white"
        ],
        volume: [
            750,
            1500,
            1000
        ],
        ABV: [
            14.7,
            14.2,
            15,
            13.5,
            12,
            14.9,
            13,
            14,
            13.9,
            14.5,
            13.8,
            11.5,
            12.5,
            14.4,
            13.6,
            8.5,
            15.4,
            14.02,
            13.65,
            8,
            15.5,
            7.5
        ],
        region: [
            "California",
            "Washington",
            "Tuscany",
            "Maipo Valley",
            "Puglia",
            "Rhone",
            "Oregon",
            "South Australia",
            "Mendoza",
            "San Antonio Valley",
            "Pfalz",
            "Campania",
            "Burgundy",
            "Loire",
            "Martinborough",
            "Salta",
            "Rapel Valley",
            "Mosel",
            "Bordeaux",
            "Veneto",
            "Provence",
            "Baden",
            "Rioja",
            "Sicily",
            "Casablanca Valley",
            "Curico Valley"
        ],
        country: [
            "USA",
            "Italy",
            "Chile",
            "France",
            "Australia",
            "Argentina",
            "Germany",
            "New Zealand",
            "Spain"
        ],
        year: [
            2018,
            2017,
            2021,
            2019,
            2020,
            2016,
            2022,
            2014,
            2013,
            2010,
            2015
        ]
    }

    function buttonClickHandler(e) {
        e.target.closest(".filter-panel__button").classList.toggle("closed");
    }


    return (
        <ul className="filter-panel">
            {
                Object.keys(filterOptions).map(
                    (key) => (
                        <li className="filter-panel__block" key={filterOptions[key]}>
                            <button className="filter-panel__button closed" onClick={buttonClickHandler}>
                                <h4 className="filter-panel__title">{key}</h4>
                                <div className="filter-panel__expand-icon"> </div>
                            </button>
                            <ul className="filter-panel__options">
                                {filterOptions[key].sort((a, b) => {
                                    if (a > b) {
                                        return 1
                                    }
                                    return -1
                                }).map(value => (
                                    <li className="filter-panel__option">
                                        {value}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    )
                )
            }
        </ul>
    )
}


// FilterPanel.propTypes = {
//
// }


export default FilterPanel;