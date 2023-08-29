import "./PaginationPanel.scss";
import {useState, useEffect} from "react";
import PropTypes from "prop-types";


function PaginationPanel({queryParams, setQueryParams}) {

    const [paginationPanelStatements, setPaginationPanelStatements] = useState({
        activeArrows: {
            left: false,
            right: true,}
        })

    async function isNextPage(params) {
        const newQuery = {...params};
        let queryParamsString = "";
        newQuery.startPage = (params.startPage - 1) * params.perPage + 1;
        newQuery.perPage = 1;

        Object.keys(newQuery).forEach((key) => {
            if (queryParamsString.length < 1) {
                queryParamsString = `?${key}=${newQuery[key]}`;
            } else {
                queryParamsString += `&${key}=${newQuery[key]}`;
            }
        })

        return fetch(`http://localhost:4000/api/products/filter${queryParamsString}`)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.productsQuantity > 0) {
                        setPaginationPanelStatements((prev)=> ({...prev, isExtraItem: true}));
                    }
                },
                () => {
                    setPaginationPanelStatements((prev)=> ({...prev, isExtraItem: false}));
                }
            )
    }

    useEffect(() => {
        setPaginationPanelStatements({
            activeArrows: {
                left: false,
                right: true,
            },
            pages: {
                current: 1,
                available: [1,],
            }
        })

        isNextPage(queryParams)
        console.log(queryParams)
    }, [])


    console.log(queryParams, setQueryParams)


    return (
        <ul className="pagination-panel">
            <li className={`pagination-panel__arrow--left${!paginationPanelStatements.activeArrows.left ? " pagination-panel__arrow--disabled" : ""}`}>&lt;</li>
            {paginationPanelStatements.pages.available.length > 0 && paginationPanelStatements.pages.available.map((page) => (
                <li className="pagination-panel__page-number">{page}</li>))}
            <li className={`pagination-panel__arrow--right${!paginationPanelStatements.activeArrows.right ? " pagination-panel__arrow--disabled" : ""}`}>&gt;</li>
        </ul>
    )
}

PaginationPanel.propTypes = {
    queryParams: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number,])).isRequired,
    setQueryParams: PropTypes.func.isRequired,
}


export default PaginationPanel;