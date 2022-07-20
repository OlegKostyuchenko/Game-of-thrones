import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import './app.css'
import ErrorMessage from '../errorMessage';
import { BooksPage, HousesPage, CharacterPage, CharacterItem, BooksItem, HousesItem } from '../pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
            <BrowserRouter>
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

                        <Routes>
                            <Route path="/chars" element={<CharacterPage />} />
                            <Route path="/books" element={<BooksPage />} />
                            <Route path="/houses" element={<HousesPage />} />
                            <Route path="/chars/:id" element={<CharacterItem />} />
                            <Route path="/books/:id" element={<BooksItem />} />
                            <Route path="/houses/:id" element={<HousesItem />} />

                        </Routes>

                    </Container>
                </>
            </BrowserRouter>
        )
    }
}
