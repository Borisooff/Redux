import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uiidv4 } from "uuid";
import { heroAdd } from "../heroesList/heroesSlice";
import { useHttp } from "../../hooks/http.hook";

const HeroesAddForm = () => {

    const dispatch = useDispatch();

    const { request } = useHttp();

    const [heroName, setHeroName] = useState('');
    const [heroDescription, setHeroDescription] = useState('');
    const [heroElement, setHeroElement] = useState('');

    const onAddHero = (event) => {
        event.preventDefault()
        const hero = {
            "id": uiidv4(),
            "name": heroName,
            "description": heroDescription,
            "element": heroElement,
        }

        request("http://localhost:3001/heroes", 'POST', JSON.stringify(hero))
            .then(dispatch(heroAdd(hero)))

        setHeroName('');
        setHeroDescription('');
        setHeroElement('');
    }

    return (
        <form className="border p-4 shadow-lg rounded"
            onSubmit={(event) => onAddHero(event)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input
                    required
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Как меня зовут?"
                    value={heroName}
                    onChange={(event) => setHeroName(event.target.value)} />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text"
                    className="form-control"
                    id="text"
                    placeholder="Что я умею?"
                    style={{ "height": '130px' }}
                    value={heroDescription}
                    onChange={(event) => setHeroDescription(event.target.value)} />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select
                    required
                    className="form-select"
                    id="element"
                    name="element"
                    value={heroElement}
                    onChange={(event) => setHeroElement(event.target.value)}>
                    <option >Я владею элементом...</option>
                    <option value="fire">Огонь</option>
                    <option value="water">Вода</option>
                    <option value="wind">Ветер</option>
                    <option value="earth">Земля</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;