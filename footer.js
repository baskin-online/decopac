function buildFooter() {
    let footer = document.getElementById('footer');
    let element = document.createElement('div');
    element.innerHTML +=
    '<hr> \
    <p>Above is a list of Decopac toys available at the following Baskin Robbins locations:</p> \
    <details class="myindent1"> \
        <summary>Kapolei</summary> \
        <div class="myindent2"> \
            <strong>Address</strong>: 590 Farrington Hwy Unit 91, Kapolei, HI 96707<br> \
            <strong>Phone</strong>: (808) 674-0131<br> \
            <strong>Hours</strong>: Everyday 10 am - 10 pm<br> \
            <!--<strong>Store Number</strong>: 363036<br>--> \
        </div> \
    </details> \
    <details class="myindent1"> \
        <summary>King St.</summary> \
        <div class="myindent2"> \
            <strong>Address</strong>: 1618 S King St, Honolulu, HI 96826<br> \
            <strong>Phone</strong>: (808) 947-7300<br/> \
            <strong>Hours</strong>: Everyday 10 am - 10 pm<br> \
            <!--<strong>Store Number</strong>: 362037<br>--> \
        </div> \
    </details> \
    <details class="myindent1"> \
        <summary>Mililani</summary> \
        <div class="myindent2"> \
            <strong>Address</strong>: 95-1249 Meheula Pkwy, Mililani, HI 96789<br> \
            <strong>Phone</strong>: (808) 623-9999<br> \
            <strong>Hours</strong>: Mon-Thurs: 11 am - 10 pm; Fri-Sun: 10 am - 10 pm<br> \
            <!--<strong>Store Number</strong>: 342350<br>--> \
        </div> \
    </details> \
    <details class="myindent1"> \
        <summary>Moanalua</summary> \
        <div class="myindent2"> \
            <strong>Address</strong>: 930 Valkenburgh St, Honolulu, HI 96818<br> \
            <strong>Phone</strong>: (808) 421-0888<br> \
            <strong>Hours</strong>: Everyday 11 am - 10 pm<br> \
        </div> \
    </details> \
    <details class="myindent1"> \
        <summary>Kailua</summary> \
        <div class="myindent2"> \
            <strong>Address</strong>: 108 Hekili St, Kailua, HI 96734<br> \
            <strong>Phone</strong>: (808) 261-2770<br> \
            <strong>Hours</strong>: Everyday 11 am - 10 pm<br> \
            <!--<strong>Store Number</strong>: 348162<br>--> \
        </div> \
    </details> \
    <hr> \
    <a href="https://order.baskinrobbins.com/menu/cakes-pies/generic">BR Online Cakes</a> <br> \
    <hr> \
    <br>'
    footer.appendChild(element);
}
