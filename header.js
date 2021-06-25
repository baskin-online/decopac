function buildHeader() {
    let href = window.location.href;
    let header = document.getElementById('header');
    let element = document.createElement('div');
    element.innerHTML +=
    '<hr> \
    <p style="text-align: center;">Decoset toys are <span class="pink">$9.99</span> each and require a \
        <span class="pink">24-hour notice</span> in advance. \
    </p> \
    <hr> \
    <div class="ui fluid two item secondary pointing menu"> \
        <a class="biggerfont active item" href="https://baskin-online.github.io/decopac/">List</a> \
        <a class="biggerfont activeGrid item" href="https://baskin-online.github.io/decopac/grid">Catalog</a> \
    </div>';
    if (href.includes('grid')) {
        element.innerHTML = element.innerHTML.replace("active", "");
        element.innerHTML = element.innerHTML.replace("activeGrid", "active");
    }
    header.appendChild(element);
}
