import { useHttp } from '../../hooks/http.hook';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

// import { fetchHeroes } from '../../actions';
import { heroDelete, fetchHeroes, filtredHeroesSelector } from './heroesSlice';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

const HeroesList = () => {

   

    const filtredHeroes = useSelector(filtredHeroesSelector)

    const heroesLoadingStatus = useSelector(state => state.heroesReducer.heroesLoadingStatus);
    const dispatch = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        dispatch(fetchHeroes())
        // eslint-disable-next-line
    }, []);

    const onDeleteHero = useCallback((id) => {
        request(`http://localhost:3001/heroes/${id}`, 'DELETE')
            .then(dispatch(heroDelete(id)))
            .catch(err => console.log(err))
        // eslint-disable-next-line
    }, [request]);

    if (heroesLoadingStatus === "loading") {
        return <Spinner />;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }

        return arr.map(({ id, ...props }) => {
            return <HeroesListItem onDeleteHero={() => onDeleteHero(id)} key={id} {...props} />
        })
    }

    const elements = renderHeroesList(filtredHeroes);
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default HeroesList;