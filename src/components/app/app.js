import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import './app.css'
export default class App extends Component {

    state = {
        showRandomChar: null,
        selectedChar: 130
    }

    toggleRandomChar = () => {
        this.setState((state) => { return { showRandomChar: !state.showRandomChar } })
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {

        const randomChar = this.state.showRandomChar ? <RandomChar /> : null;

        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {randomChar}
                        </Col>
                    </Row>
                    <div className='toogleBtn'>
                        <button className="btn btn-primary" type="submit" onClick={this.toggleRandomChar}>Toogle random character</button>
                    </div>
                    <Row>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelected} />

                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar} />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
