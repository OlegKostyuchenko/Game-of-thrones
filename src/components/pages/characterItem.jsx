import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css'
import ErrorMessage from '../errorMessage';
import Spiner from '../spinner';


const CharacterItem = () => {
    const { id } = useParams();
    const paramsSerch = 'characters/'
    const _urlApi = 'https://www.anapioficeandfire.com/api/'
    const transform = (res) => {
        return {
            id: { id },
            name: res.name || '--',
            gender: res.gender || '--',
            born: res.born || '--',
            died: res.died || '--',
            culture: res.culture || '--'
        }
    };
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`${_urlApi}${paramsSerch}${id}`)
            .then(res => res.json())
            .then(res => transform(res))
            .then(result => {
                setIsLoaded(false);
                setItems(result);
            },
                (error) => {
                    setIsLoaded(false);
                    setError(error);
                })
    })

    const { name, born, gender, died, culture } = items
    const errorMessage = error ? <ErrorMessage /> : null;
    const content = !(isLoaded || error) ? <View name={name} born={born} gender={gender} died={died} culture={culture} /> : null;
    const spiner = isLoaded ? <Spiner /> : null;

    return (
        <div className="item-detailsics">
            {errorMessage}
            {spiner}
            {content}

        </div>
    )



};

const View = ({ name, born, gender, died, culture }) => {
    return (
        <>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender</span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born</span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died</span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture</span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}



export default CharacterItem;

