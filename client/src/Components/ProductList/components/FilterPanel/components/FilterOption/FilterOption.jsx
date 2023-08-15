import "./FilterOption.scss";
import PropTypes from 'prop-types';

function FilterOption({name, value, updateFilterOptions}) {
    return (
        <li className="filter-panel__option">
            <input type="checkbox" name={name} value={value} id={`checkbox-${name}-${value}`} onChange={updateFilterOptions}/>
            <label htmlFor={`checkbox-${name}-${value}`}>{value}</label>
        </li>
    )
}


FilterOption.propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    updateFilterOptions: PropTypes.func.isRequired,
}


export default FilterOption;