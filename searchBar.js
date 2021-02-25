function buildSearchBar() {
    let href = window.location.href;
    let searchBar = document.getElementById('searchBar');
    let element = document.createElement('div');
    element.innerHTML +=
    '<div class="ui large fluid search"> \
        <div class="ui icon input"> \
            <input id="searchInput" class="prompt" type="text" placeholder="Search...""> \
            <i class="search icon"></i> \
        </div> \
    </div>';
    searchBar.appendChild(element);
    searchBar.addEventListener('input', filterData);
}

function filterData(e) {
    const input = e.target.value;
    let filteredData = [];
    for (let item of decoData) {
        if (item['name'].toLowerCase().includes(input.toLowerCase()) ||
        item['description'].toLowerCase().includes(input.toLowerCase())) {
            filteredData.push(item);
        }
    }
    for (let item of decoSports) {
        if (item['name'].toLowerCase().includes(input.toLowerCase()) |
        item['description'].toLowerCase().includes(input.toLowerCase())) {
            filteredData.push(item);
        }
    }
    // console.log(filteredData);
    const removeDiv = document.getElementById('removeIfFilter');
    removeDiv ? removeDiv.remove() : null;
    const tempDiv = document.getElementById('temp');
    tempDiv ? tempDiv.remove() : null;

    const filteredListDiv = document.getElementById('filteredList');
    let element = document.createElement('div');
    element.setAttribute('id', 'temp');
    filteredListDiv.appendChild(element);
    buildHTML(filteredData, 'temp');
    return filteredData;
}
