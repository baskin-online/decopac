function buildHeader() {
    let href = window.location.href;
    let header = document.getElementById('header');
    let element = document.createElement('div');
    element.innerHTML +=
    '<hr> \
    <p>Decopac toys are <span class="pink">$9.99</span> each and require a \
        <span class="pink">24-hour notice</span> in advance. \
    </p> \
    <hr>';
    if (href.includes('grid')) {
        element.innerHTML +=
            '<div class="ui fluid two item secondary pointing menu"> \
                <a class="biggerfont item" href="https://baskin-online.github.io/decopac/">List View</a> \
                <a class="biggerfont active item" href="https://baskin-online.github.io/decopac/grid">Grid View</a> \
            </div>';
    } else {
        element.innerHTML +=
            '<div class="ui fluid two item secondary pointing menu"> \
                <a class="biggerfont active item" href="https://baskin-online.github.io/decopac/">List View</a> \
                <a class="biggerfont item" href="https://baskin-online.github.io/decopac/grid">Grid View</a> \
            </div>';
    }
    // element.innerHTML +=
    // '</div>';
    header.appendChild(element);
}
