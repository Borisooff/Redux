// import { useHttp } from "../../hooks/http.hook";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

// import { fetchFilters } from "../../actions";
import { activeFilterChanged, fetchFilters } from './FiltersSlice';
import Spinner from "../spinner/Spinner";

const HeroesFilters = () => {

    const { filters, filtersLoadingStatus, activeFilter } = useSelector(state => state.filtersReducer);
    const dispatch = useDispatch();
    // const { request } = useHttp();

    useEffect(() => {
        dispatch(fetchFilters())
        // eslint-disable-next-line
    }, [])

    if (filtersLoadingStatus === 'loading') {
        return <Spinner />;
    } else if (filtersLoadingStatus === 'error') {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderFilters = (arr) => {
        if (arr.length === 0) {
            return <h5 className='text-center mt-5'>Фильтры не найдены</h5>
        }

        return arr.map(({ name, label, className }) => {
            const btnClass = classNames('btn', className, {
                'active': name === activeFilter
            });

            return <button
                id={name}
                onClick={() => dispatch(activeFilterChanged(name))}
                className={btnClass}
                key={name}>{label}</button>
        })
    }

    const filterElements = renderFilters(filters)

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {filterElements}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;