import React, { Component } from 'react';
import Spiner from '../spinner';

import './itemList.css';
export default class ItemList extends Component {

    state = {
        itemList: null,

    }

    componentDidMount() {
        const { getData } = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map((elem, i) => {
            const { id } = elem;
            const label = this.props.renderItem(elem)

            return (
                <li
                    key={id || i + 'f'}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id || i + 'f')}>
                    {label}
                </li>
            )
        })
    }

    render() {
        const { itemList } = this.state;
        if (!itemList) {
            return <Spiner />
        }

        const items = this.renderItems(itemList)

        return (
            <ul className="item-list list-group" >
                {items}
            </ul>
        );
    }
}