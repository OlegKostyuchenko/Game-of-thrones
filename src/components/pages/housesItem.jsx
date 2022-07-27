import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css'
import ErrorMessage from '../errorMessage';
import Spiner from '../spinner';



const HousesItem = () => {
    const { id } = useParams();
    const paramsSerch = 'houses/'
    const _urlApi = 'https://www.anapioficeandfire.com/api/'
    const transform = (res) => {
        return {
            name: res.name || '--',
            region: res.region || '--',
            words: res.words || '--',
            titles: res.titles || '--',
            overlord: res.overlord || '--',
            ancestralWeapons: res.ancestralWeapons || '--'
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

    const { name, region, words, titles, overlord, ancestralWeapons } = items
    const errorMessage = error ? <ErrorMessage /> : null;
    const content = !(isLoaded || error) ? <View name={name} region={region} words={words} titles={titles} overlord={overlord} ancestralWeapons={ancestralWeapons} /> : null;
    const spiner = isLoaded ? <Spiner /> : null;

    return (
        <div className="item-detailsics">
            {errorMessage}
            {spiner}
            {content}

        </div>
    )



};

const View = ({ name, region, words, titles, overlord, ancestralWeapons }) => {
    return (
        <>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Region</span>
                    <span>{region}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Words</span>
                    <span>{words}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Titles</span>
                    <span>{titles}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Overlord</span>
                    <span>{overlord}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Weapons</span>
                    <span>{ancestralWeapons}</span>
                </li>
            </ul>
        </>
    )
}

export default HousesItem;