import React from 'react';
import gotService from '../../services/gotService';
import ItemDetails, { Field } from '../itemDetails';
import { useParams } from 'react-router-dom';


const CharacterItem = () => {
    gotService = new gotService();
    console.log(useParams());
    const { id } = useParams();
    return (
        <>{id}</>

        // <ItemDetails itemId={id} getItem={this.gotService.getCharacter}>
        //     <Field field='gender' label='Gender' />
        //     <Field field='born' label='Born' />
        //     <Field field='died' label='Died' />
        //     <Field field='culture' label='Culture' />
        // </ItemDetails>
    );
};



export default CharacterItem;