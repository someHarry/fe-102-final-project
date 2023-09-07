import "./PaginationPanel.scss";
import {useState, useEffect} from "react";
import PropTypes from "prop-types";


function PaginationPanel({queryParams, setQueryParams, productsQuantity}) {
    const [isLeftArrowActive, setIsLeftArrowActive] = useState(false);
    const [isRightArrowActive, setIsRightArrowActive] = useState(false);

    const currentPage = queryParams.startPage;
    const pageCount = Math.ceil(productsQuantity / queryParams.perPage);
    const availablePageNumbers = [...Array(pageCount + 1).keys()].slice(1);

    useEffect(() => {
        setIsLeftArrowActive(currentPage > 1);
        setIsRightArrowActive(currentPage !== Math.ceil(productsQuantity / queryParams.perPage));

    }, [queryParams]);

    function changePageByNumber(e) {
        const target = e.target.closest("button");
        const li = target.closest("li");
        if (!li.classList.contains("pagination-panel__page-number--current")) {
            const targetNumber = +target.innerText;
            setQueryParams((prev)=>({...prev, startPage:targetNumber}))
        }
    }

    function changePageByArrow(e) {
        const target = e.target.closest("button");
        const li = target.closest("li");
        if (li.classList.contains("pagination-panel__arrow--left") && currentPage !== 1) {
            setQueryParams((prev)=>({...prev, startPage:currentPage - 1}))
        }
        if (li.classList.contains("pagination-panel__arrow--right") && currentPage !== pageCount) {
            setQueryParams((prev)=>({...prev, startPage:currentPage + 1}))
        }
    }

    return (
        <ul className="pagination-panel">
            <li className={`pagination-panel__arrow pagination-panel__arrow--left${isLeftArrowActive ? " pagination-panel__arrow--active" : ""}`}>
                <button onClick={changePageByArrow} onKeyDown={() => {}}>&lt;</button>
            </li>
            {availablePageNumbers.length > 0 && availablePageNumbers.map((page) => (
                <li className={`pagination-panel__page-number${currentPage === page ? " pagination-panel__page-number--current" : ""}`}
                    key={page.toString()}>
                    <button onClick={changePageByNumber} onKeyDown={() => {}}>{page}</button>
                </li>))}
            <li className={`pagination-panel__arrow pagination-panel__arrow--right${isRightArrowActive ? " pagination-panel__arrow--active" : ""}`}>
                <button onClick={changePageByArrow} onKeyDown={() => {}}>&gt;</button>
            </li>
        </ul>
    )
}

PaginationPanel.propTypes = {
    queryParams: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number,])).isRequired,
    setQueryParams: PropTypes.func.isRequired,
    productsQuantity: PropTypes.number.isRequired,
}


export default PaginationPanel;