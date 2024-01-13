function buildHeader() {
    let href = window.location.href;
    let header = document.getElementById('header');
    let element = document.createElement('div');
    element.innerHTML +=
    '<div class="ui fluid menu" id="menuBar"> \
        <a class="biggerfont activeLogo item" style="padding-left: 0.9rem; padding-right: 0.95rem" href="https://baskin-online.github.io/decopac/bronline"><img class="ui small spaced image" src="images/br-logo.png"></a> \
        <div class="right menu"> \
          <a class="biggerfont activeBrOnline item" href="https://baskin-online.github.io/decopac/bronline">BR Online Cakes</a> \
          <a class="biggerfont activeGrid item" href="https://baskin-online.github.io/decopac/grid">Decoset Cakes</a> \
          <a class="biggerfont activeGrid item" href="https://baskin-online.github.io/decopac/locations">Order Now</a> \
        </div> \
    </div> \
    <div class="brownBar"> \
        All cake orders require a <span class="pink">24-hour notice</span> in advance. \
    </div> \
    ';
    // if (href.includes('list')) {
    //     currentDataSet = decopacData;
        // element.innerHTML = element.innerHTML.replace("activeList", "active");
    //     element.innerHTML = element.innerHTML.replace("activeGrid", "");
    //     element.innerHTML = element.innerHTML.replace("activeBrOnline", "");
    // } else
    if (href.includes('grid')) {
        currentDataSet = decopacData;
        // element.innerHTML = element.innerHTML.replace("activeList", "");
        element.innerHTML = element.innerHTML.replace("activeGrid", "active");
        element.innerHTML = element.innerHTML.replace("activeBrOnline", "");
    } else { // if (href.includes('bronline')
        currentDataSet = brOnlineData;
        // element.innerHTML = element.innerHTML.replace("activeList", "");
        element.innerHTML = element.innerHTML.replace("activeGrid", "");
        element.innerHTML = element.innerHTML.replace("activeBrOnline", "active");
    }
    header.appendChild(element);
}
