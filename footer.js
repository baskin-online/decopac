function buildFooter() {
    let footer = document.getElementById('footer');
    let element = document.createElement('div');
    element.innerHTML +=
    '<h2 style="text-align: center;">Locations</h2> \
    <div class="ui five column stackable middle aligned grid"> \
      <div class="ui row"> \
      <div class="column" style="font-size: 1rem; vertical-align: text-top; height: 100%;"> \
        <a class="footerLink" href="https://order.baskinrobbins.com/categories?storeId=BR-362036">Kapolei</a><br>\
        590 Farrington Hwy Unit 91, Kapolei, HI 96707<br> \
        (808) 674-0131<br> \
        Everyday 10 am - 10 pm<br> \
      </div> \
      <div class="column" style="font-size: 1rem; vertical-align: text-top; height: 100%;"> \
        <a class="footerLink" href="https://order.baskinrobbins.com/categories?storeId=BR-362037">King St.</a><br>\
        1618 S King St, Honolulu, HI 96826<br> \
        (808) 947-7300<br/> \
        Everyday 10 am - 10 pm<br> \
      </div> \
      <div class="column" style="font-size: 1rem; vertical-align: text-top; height: 100%;"> \
        <a class="footerLink" href="https://order.baskinrobbins.com/categories?storeId=BR-342350">Mililani</a><br>\
        95-1249 Meheula Pkwy, Mililani, HI 96789<br> \
        (808) 623-9999<br> \
        Everyday: 10 am - 10 pm<br> \
      </div> \
      <div class="column" style="font-size: 1rem; vertical-align: text-top; height: 100%;"> \
        <a class="footerLink" href="https://order.baskinrobbins.com/categories?storeId=BR-343836">Moanalua</a><br>\
        930 Valkenburgh St, Honolulu, HI 96818<br> \
        (808) 421-0888<br> \
        Everyday 10:30 am - 10 pm<br> \
      </div> \
      <div class="column" style="font-size: 1rem; vertical-align: text-top; height: 100%;"> \
        <a class="footerLink" href="https://order.baskinrobbins.com/categories?storeId=BR-348162">Kailua</a><br>\
        108 Hekili St, Kailua, HI 96734<br> \
        (808) 261-2770<br> \
        Everyday 10 am - 10 pm<br> \
      </div> \
    <br>\
    <br>'
    footer.appendChild(element);
}
