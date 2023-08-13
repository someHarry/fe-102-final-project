import "./FilterPanel.scss";
import {useState, useCallback, useEffect} from "react";
import PropTypes from "prop-types";
import FilterOption from "./components/FilterOption";


function FilterPanel({queryParams, setQueryParams}) {
    const [filterOptions, setFilterOptions] = useState({
        variety: [
            {name: "Cabernet Sauvignon", checked: false},
            {name: "Sangiovese", checked: false},
            {name: "Rosé", checked: false},
            {name: "Bordeaux Red Blends", checked: false},
            {name: "Tuscan Blends", checked: false},
            {name: "Rhone Red Blends", checked: false},
            {name: "Pinot Noir", checked: false},
            {name: "Syrah/Shiraz", checked: false},
            {name: "Chardonnay", checked: false},
            {name: "Cabernet Franc", checked: false},
            {name: "Sauvignon Blanc", checked: false},
            {name: "Riesling", checked: false},
            {name: "Pinot Meunier", checked: false},
            {name: "Merlot", checked: false},
            {name: "Melon de Bourgogne", checked: false},
            {name: "Malbec", checked: false},
            {name: "Torrontes", checked: false},
            {name: "Other Red Blends", checked: false},
            {name: "Pinot Gris/Grigio", checked: false},
            {name: "Rosé from Cotes de Provence", checked: false},
            {name: "Blaufrankisch", checked: false},
            {name: "Tempranillo", checked: false},
            {name: "Nerello Mascalese", checked: false},
            {name: "Muller Thurgau", checked: false},
        ],
        color: [
            {name: "red", checked: false},
            {name: "rose", checked: false},
            {name: "white", checked: false},
        ],
        volume: [
            {name: 750, checked: false},
            {name: 1500, checked: false},
            {name: 1000, checked: false},
        ],
        ABV: [
            {name: 14.7, checked: false},
            {name: 14.2, checked: false},
            {name: 15, checked: false},
            {name: 13.5, checked: false},
            {name: 12, checked: false},
            {name: 14.9, checked: false},
            {name: 13, checked: false},
            {name: 14, checked: false},
            {name: 13.9, checked: false},
            {name: 14.5, checked: false},
            {name: 13.8, checked: false},
            {name: 11.5, checked: false},
            {name: 12.5, checked: false},
            {name: 14.4, checked: false},
            {name: 13.6, checked: false},
            {name: 8.5, checked: false},
            {name: 15.4, checked: false},
            {name: 14.02, checked: false},
            {name: 13.65, checked: false},
            {name: 8, checked: false},
            {name: 15.5, checked: false},
            {name: 7.5, checked: false},
        ],
        region: [
            {name: "California", checked: false},
            {name: "Washington", checked: false},
            {name: "Tuscany", checked: false},
            {name: "Maipo Valley", checked: false},
            {name: "Puglia", checked: false},
            {name: "Rhone", checked: false},
            {name: "Oregon", checked: false},
            {name: "South Australia", checked: false},
            {name: "Mendoza", checked: false},
            {name: "San Antonio Valley", checked: false},
            {name: "Pfalz", checked: false},
            {name: "Campania", checked: false},
            {name: "Burgundy", checked: false},
            {name: "Loire", checked: false},
            {name: "Martinborough", checked: false},
            {name: "Salta", checked: false},
            {name: "Rapel Valley", checked: false},
            {name: "Mosel", checked: false},
            {name: "Bordeaux", checked: false},
            {name: "Veneto", checked: false},
            {name: "Provence", checked: false},
            {name: "Baden", checked: false},
            {name: "Rioja", checked: false},
            {name: "Sicily", checked: false},
            {name: "Casablanca Valley", checked: false},
            {name: "Curico Valley", checked: false},
        ],
        country: [
            {name: "USA", checked: false},
            {name: "Italy", checked: false},
            {name: "Chile", checked: false},
            {name: "France", checked: false},
            {name: "Australia", checked: false},
            {name: "Argentina", checked: false},
            {name: "Germany", checked: false},
            {name: "New Zealand", checked: false},
            {name: "Spain", checked: false},
        ],
        year: [
            {name: 2018, checked: false},
            {name: 2017, checked: false},
            {name: 2021, checked: false},
            {name: 2019, checked: false},
            {name: 2020, checked: false},
            {name: 2016, checked: false},
            {name: 2022, checked: false},
            {name: 2014, checked: false},
            {name: 2013, checked: false},
            {name: 2010, checked: false},
            {name: 2015, checked: false},
        ]
    })

    function buttonClickHandler(e) {
        e.target.closest(".filter-panel__button").classList.toggle("closed");
    }


    const updateFilterOptions = useCallback(({target}) => {
        const {name, value, checked} = target;
        const newOptions = {...filterOptions};
        const foundIndex = newOptions[name].findIndex(el => el.name.toString() === value.toString());
        newOptions[name][foundIndex].checked = checked;
        setFilterOptions(newOptions)
    }, [])

    useEffect(() => {
        const newQueryParams = {}
        newQueryParams.perPage = queryParams.perPage;
        newQueryParams.startPage = queryParams.startPage;
        if (queryParams.order) {
            newQueryParams.order = queryParams.order;
        }
        Object.keys(filterOptions).forEach(name => {
            const valuesArr = [];
            filterOptions[name].forEach(el => {
                if (el.checked) {
                    valuesArr.push(el.name)
                }
            })
            if (valuesArr.length > 0) {
                newQueryParams[name] = valuesArr.join(",");
            }
        })
        console.log("newQueryParams",newQueryParams)
        setQueryParams(newQueryParams);

    }, [filterOptions])


    return (
        <ul className="filter-panel">
            {
                Object.keys(filterOptions).map(
                    (key) => (
                        <li className="filter-panel__block" key={key}>
                            <button className="filter-panel__button closed" onClick={buttonClickHandler}>
                                <h4 className="filter-panel__title">{key}</h4>
                                <div className="filter-panel__expand-icon">&nbsp;</div>
                            </button>
                            <ul className="filter-panel__options">
                                {filterOptions[key].sort((a, b) => {
                                    if (a.name > b.name) {
                                        return 1
                                    }
                                    return -1
                                }).map(option => (
                                        <FilterOption
                                            name={key}
                                            value={option.name}
                                            updateFilterOptions={updateFilterOptions}
                                        />
                                    )
                                )}
                            </ul>
                        </li>
                    )
                )
            }
        </ul>
    )
}


FilterPanel.propTypes = {
    queryParams: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number,])).isRequired,
    setQueryParams: PropTypes.func.isRequired,
}


export default FilterPanel;