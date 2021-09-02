let currentDataSet = [];

function buildHTMLforList(data, id) {
    let list = document.getElementById(id);
    let element = document.createElement('ul');
    for (let i = 0; i < data.length; i++) {
        let code = '';
        if (data[i].code.length > 0) {
            code = ` (${data[i].code})`;
        }
        element.innerHTML += '<li> \
        <a href="'+ data[i].pic + '">'
        + data[i].name + '<span style="color: black">' + code + '</span> \
        </a> </li>';
    }
    list.appendChild(element);
}

function buildHTMLforGrid(data, id) {
    let href = window.location.href;
    let list = document.getElementById(id);
    let element = document.createElement('div');
    let temp = '<div class="ui four cards stackable centered">';
    for (let i = 0; i < data.length; i++) {
        let code = '';
        if (data[i].code.length > 0 && !href.includes('grid')) {
            code =
            '<div class="extra content" style="padding: 0.5rem;"> \
                <a class="ui header" href="' + data[i].pic+ '">' + data[i].code + '</a> \
            </div>';
        }
        temp +=
        '<div class="ui raised card"> \
            <a class="image" href="'+ data[i].pic + '"> \
                <img class="decopacImage" src="' + data[i].pic +'"> \
            </a> \
            <div class="content" style="padding: 0.5rem;"> \
                <a class="ui header" href="' + data[i].pic+ '">' + data[i].name + '</a> \
            </div>'
            + code +
        '</div>';
    }
    temp += '</div>';
    element.innerHTML = temp;
    list.appendChild(element);
}

function buildHTMLstarter() {
    let href = window.location.href;
    if (href.includes('list')) {
        for (let i = 0; i < decopacData.length; i++) {
            buildHTMLforList(decopacData[i], `list${i+1}`);
        }
        for(let i = 0; i < brOnlineData.length; i++) {
            buildHTMLforList(brOnlineData[i], `list${i+1+decopacData.length}`);
        }
    } else {
        for (let i = 0; i < currentDataSet.length; i++) {
            buildHTMLforGrid(currentDataSet[i], `list${i+1}`);
        }
    }
}
