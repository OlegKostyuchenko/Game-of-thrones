import React, { Component } from 'react';
import ItemList from '../../itemList';
import ItemDetails, { Field } from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import gotService from '../../../services/gotService';
import RowBlock from '../../rowBlock';

export default class HousesPage extends Component {
    gotService = new gotService();

    state = {
        selectedItem: null,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }


    render() {

        if (this.state.error) {
            return <ErrorMessage />
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllHouses}
                renderItem={(item) => item.name} />

        )

        const itemDetails = (
            <ItemDetails itemId={this.state.selectedItem}>
                <Field field='region' label='Region' />
                <Field field='words' label='Words' />
                <Field field='titles' label='Titles' />
                <Field field='overlord' label='Overlord' />
                <Field field='ancestralWeapons' label='Weapons' />
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails} />
        );
    }
}
