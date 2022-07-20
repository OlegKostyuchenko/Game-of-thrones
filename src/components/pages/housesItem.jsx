import React from 'react';
import gotService from '../../services/gotService';
import ItemDetails, { Field } from '../itemDetails';
import { useParams } from 'react-router-dom';



const HousesItem = () => {
    gotService = new gotService();
    const { id } = useParams();
    return (
        <ItemDetails itemId={id} getItem={this.gotService.getHouse}>
            <Field field='region' label='Region' />
            <Field field='words' label='Words' />
            <Field field='titles' label='Titles' />
            <Field field='overlord' label='Overlord' />
            <Field field='ancestralWeapons' label='Weapons' />
        </ItemDetails>
    );
};

export default HousesItem;