import React, { Component } from 'react';
import Spiner from '../spinner';
import { Link } from 'react-router-dom';

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
                <Link to={`${id || i + 1}`}
                    key={id || i + 1}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id || i + 1)}>
                    {label}
                </Link>
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
            <div className='item-details rounded'>
                <ul className="item-list list-group" >
                    {items}
                </ul>
            </div>
        );
    }
}