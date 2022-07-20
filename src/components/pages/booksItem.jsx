import React from 'react';
import gotService from '../../services/gotService';
import ItemDetails, { Field } from '../itemDetails';
import { useParams } from 'react-router-dom';

const BooksItem = () => {
    gotService = new gotService();
    const { id } = useParams();
    return (
        <ItemDetails itemId={id} getItem={this.gotService.getBook}>
            <Field field='numberOfPages' label='Pages' />
            <Field field='publisher' label='Publisher' />
            <Field field='released' label='Released' />
        </ItemDetails>
    );
};



export default BooksItem;