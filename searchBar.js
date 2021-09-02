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
    const hiddenDiv = document.getElementsByName('removeIfFilter');
    console.log(hiddenDiv);
    let filteredData = [];
    // removes old list
    const tempDiv = document.getElementById('temp');
    tempDiv ? tempDiv.remove() : null;
    if (input.length == 0) {
        for (let div of hiddenDiv) {
            div.hidden = false;
        }
    } else {
        let href = window.location.href;
        for (let div of hiddenDiv) {
            div.hidden = true;
        }
        if (href.includes('list')) {
            const sets = [decopacData, brOnlineData];
            for (let currentDataSet of sets) {
                for (let dataset of currentDataSet) {
                    for (let item of dataset) {
                        if (
                            item['name'].toLowerCase().includes(input.toLowerCase()) ||
                            item['description'].toLowerCase().includes(input.toLowerCase()) ||
                            item['code'].toLowerCase().includes(input.toLowerCase())
                        ) {
                            filteredData.push(item);
                        }
                    }
                }
            }
        } else {
            for (let dataset of currentDataSet) {
                for (let item of dataset) {
                    if (
                        item['name'].toLowerCase().includes(input.toLowerCase()) ||
                        item['description'].toLowerCase().includes(input.toLowerCase()) ||
                        item['code'].toLowerCase().includes(input.toLowerCase())
                    ) {
                        filteredData.push(item);
                    }
                }
            }
        }
        const filteredListDiv = document.getElementById('filteredList');
        let element = document.createElement('div');
        element.setAttribute('id', 'temp');
        filteredListDiv.appendChild(element);
        if (href.includes('list')) {
            buildHTMLforList(filteredData, 'temp');
        } else {
            buildHTMLforGrid(filteredData, 'temp');
        }
    }
    return filteredData;
}
