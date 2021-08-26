let currentDataSet = [];

function buildHTMLforList(data, id) {
    let list = document.getElementById(id);
    let element = document.createElement('ul');
    for (let i = 0; i < data.length; i++) {
        element.innerHTML += '<li> <a href="'
        + data[i].pic + '">' + data[i].name + '</a> </li>';
    }
    list.appendChild(element);
}

function buildHTMLforGrid(data, id) {
    let list = document.getElementById(id);
    let element = document.createElement('div');
    let temp = '<div class="ui four cards stackable centered">';
    for (let i = 0; i < data.length; i++) {
        temp +=
        '<div class="ui raised card"> \
            <a class="image" href="'+ data[i].pic + '"> \
                <img class="decopacImage" src="' + data[i].pic +'"> \
            </a> \
            <div class="content" style="padding: 0.5rem;"> \
                <a class="ui header" href="' + data[i].pic+ '">' + data[i].name + '</a> \
            </div> \
        </div>';
    }
    temp += '</div>';
    element.innerHTML = temp;
    list.appendChild(element);
}

function buildHTMLstarter() {
    let href = window.location.href;
    for (let i = 0; i < currentDataSet.length; i++) {
        if (href.includes('list')) {
            buildHTMLforList(currentDataSet[i], `list${i+1}`)
        } else {
            buildHTMLforGrid(currentDataSet[i], `list${i+1}`)
        }
    }
}
