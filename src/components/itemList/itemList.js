import React, { Component } from 'react';
import gotService from '../../services/gotService';
import Spiner from '../spinner';
import './itemList.css';
export default class ItemList extends Component {

    gotService = new gotService()
    state = {
        charList: null,
        selectedChar: null
    }



    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList
                })
            })
    }

    renderItems(arr) {
        return arr.map((e, i) => {
            return (
                <li
                    key={i}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(61 + i)}>
                    {e.name}
                </li>
            )
        })
    }

    render() {
        const { charList } = this.state;
        if (!charList) {
            return <Spiner />
        }

        const items = this.renderItems(charList)

        return (
            <ul className="item-list list-group" >
                {items}
            </ul>
        );
    }
}