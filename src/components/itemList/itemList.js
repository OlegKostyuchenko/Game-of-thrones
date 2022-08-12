import React, { Component } from 'react';
import Spiner from '../spinner';
import { Link } from 'react-router-dom';
import './itemList.css';

const ItemList = (props) => {

    const renderItems = (arr) => {
        return arr.map((elem, i) => {
            const { id } = elem;
            const label = props.renderItem(elem)

            return (
                <Link to={`${id || i + 1}`}
                    key={id || i + 1}
                    className="list-group-item"
                    onClick={() => props.onItemSelected(id || i + 1)}>
                    {label}
                </Link>
            )
        })
    }


    const { data } = props
    const items = renderItems(data)

    return (
        <div className='item-details rounded'>
            <ul className="item-list list-group" >
                {items}
            </ul>
        </div>
    );
};

const withData = (View) => {
    return class extends Component {

        state = {
            data: null,

        }

        componentDidMount() {
            const { getData } = this.props;

            getData()
                .then((data) => {
                    this.setState({
                        data
                    })
                })
        }

        render() {
            const { data } = this.state;

            if (!data) {
                return <Spiner color='blue' size='30' />
            }

            return <View {...this.props} data={data} />
        }
    }
}

export default withData(ItemList);
