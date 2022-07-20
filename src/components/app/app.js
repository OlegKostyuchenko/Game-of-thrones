import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import './app.css'
import ErrorMessage from '../errorMessage';
import CharacterPage from '../pages/chractrPage';
import BooksPage from '../pages/booksPage';
import HousesPage from '../pages/housesPage';
export default class App extends Component {

    state = {
        showRandomChar: null,
        error: false
    }

    toggleRandomChar = () => {
        this.setState((state) => { return { showRandomChar: !state.showRandomChar } })
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    render() {

        const randomChar = this.state.showRandomChar ? <RandomChar /> : null;

        if (this.state.error) {
            return <ErrorMessage />
        }

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
                    <CharacterPage />
                    <BooksPage />
                    <HousesPage />
                </Container>
            </>
        )
    }
}
