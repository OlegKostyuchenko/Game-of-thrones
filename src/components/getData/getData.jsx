
function getData(nameElem, id) {
    let Items = {}, Loaded = false;
    fetch(`https://www.anapioficeandfire.com/api/${nameElem}/${id}`)
        .then(res => res.json())
        .then(res => ({
            id: { id },
            name: res.name || '--',
            gender: res.gender || '--',
            born: res.born || '--',
            died: res.died || '--',
            culture: res.culture || '--'
        }))
        .then(result => {
            Loaded = true;
            Items = result;
        })

    console.log(Items, Loaded);

}

export default getData;

