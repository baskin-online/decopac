function buildHeader() {
    let href = window.location.href;
    let header = document.getElementById('header');
    let element = document.createElement('div');
    element.innerHTML +=
    '<hr> \
    <p style="text-align: center;">All cake orders require a <span class="pink">24-hour notice</span> in advance. \
    </p> \
    <p style="text-align: center;">Decoset toys are an additional <span class="pink">$15.00</span>. \
    </p> \
    <hr> \
    <div class="ui fluid three item secondary pointing menu"> \
        <a class="biggerfont activeList item" href="https://baskin-online.github.io/decopac/list">List</a> \
        <a class="biggerfont activeGrid item" href="https://baskin-online.github.io/decopac/grid">Decoset Cakes</a> \
        <a class="biggerfont activeBrOnline item" href="https://baskin-online.github.io/decopac/bronline">BR Online Cakes</a> \
    </div> \
    ';
    if (href.includes('list')) {
        currentDataSet = decopacData;
        element.innerHTML = element.innerHTML.replace("activeList", "active");
        element.innerHTML = element.innerHTML.replace("activeGrid", "");
        element.innerHTML = element.innerHTML.replace("activeBrOnline", "");
    } else if (href.includes('grid')) {
        currentDataSet = decopacData;
        element.innerHTML = element.innerHTML.replace("activeList", "");
        element.innerHTML = element.innerHTML.replace("activeGrid", "active");
        element.innerHTML = element.innerHTML.replace("activeBrOnline", "");
    } else { // if (href.includes('bronline')
        currentDataSet = brOnlineData;
        element.innerHTML = element.innerHTML.replace("activeList", "");
        element.innerHTML = element.innerHTML.replace("activeGrid", "");
        element.innerHTML = element.innerHTML.replace("activeBrOnline", "active");
    }
    header.appendChild(element);
}
