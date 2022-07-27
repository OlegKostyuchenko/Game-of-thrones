import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css'
import ErrorMessage from '../errorMessage';
import Spiner from '../spinner';

const BooksItem = () => {
    const { id } = useParams();
    const paramsSerch = 'books/'
    const _urlApi = 'https://www.anapioficeandfire.com/api/'
    const transform = (res) => {
        return {
            name: res.name || '--',
            numberOfPages: res.numberOfPages || '--',
            publisher: res.publisher || '--',
            released: res.released || '--',
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

    const { name, numberOfPages, publisher, released } = items
    const errorMessage = error ? <ErrorMessage /> : null;
    const content = !(isLoaded || error) ? <View name={name} numberOfPages={numberOfPages} publisher={publisher} released={released} /> : null;
    const spiner = isLoaded ? <Spiner /> : null;

    return (
        <div className="item-detailsics">
            {errorMessage}
            {spiner}
            {content}

        </div>
    )



};

const View = ({ name, numberOfPages, publisher, released }) => {
    return (
        <>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Pages</span>
                    <span>{numberOfPages}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Publisher</span>
                    <span>{publisher}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Released</span>
                    <span>{released}</span>
                </li>

            </ul>
        </>
    )
}

export default BooksItem;