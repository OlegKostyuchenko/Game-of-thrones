export default class gotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Произошла ошибка при работе с сервером ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    getAllCharacters = async () => {
        const chars = await this.getResource("/characters?page=7&pageSize=10");
        return chars.map(this._transformChar)
    }

    getCharacter = async (id) => {
        const char = await this.getResource(`/characters/${id}`);
        return this._transformChar(char)
    }

    getAllBooks = async () => {
        const books = await this.getResource("/books");
        return books.map(this._transformBook)
    }

    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBook(book)
    }

    getAllHouses = async () => {
        const houses = await this.getResource("/houses");
        return houses.map(this._transformHouse)
    }

    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouse(house)
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    _transformChar = (char) => {
        return {
            id: this._extractId(char),
            name: char.name || '--',
            gender: char.gender || '--',
            born: char.born || '--',
            died: char.died || '--',
            culture: char.culture || '--'
        }
    }

    _transformHouse = (house) => {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook = (book) => {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released,
        }
    }
}