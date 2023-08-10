import "./SortingPanel.scss";
import PropTypes from "prop-types";
// import {useEffect, useState} from "react";
// import PropTypes from 'prop-types';

function SortingPanel({queryParams, setQueryParams}) {
    function sortingPanelHandler(e) {
        setQueryParams({...queryParams, sort: e.target.value})
    }

    return (
        <select className="sorting-panel" name="sortingPanel" id="_sortingPanel" onChange={sortingPanelHandler} defaultValue="">
            <option value="">Sort by</option>
            <option value="-currentPrice">Price high to low</option>
            <option value="+currentPrice">Price low to high</option>
            <option value="-year">Year high to low</option>
            <option value="+year">Year low to high</option>
        </select>
    )
}


SortingPanel.propTypes = {
    queryParams: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number,])).isRequired,
    setQueryParams: PropTypes.func.isRequired,
}


export default SortingPanel;