function buildFooter() {
    let footer = document.getElementById('footer');
    let element = document.createElement('div');
    element.innerHTML +=
    '<h2 style="text-align: center;">Locations</h2> \
    <div class="ui five column stackable top aligned grid"> \
      <div class="column" style="font-size: 1rem; vertical-align: text-top;"> \
        <a class="footerLink largeFont1" href="https://order.baskinrobbins.com/categories?storeId=BR-362036">Kapolei</a><br>\
        <i class="map marker alternate icon"></i> 590 Farrington Hwy Unit 91, Kapolei, HI 96707<br> \
        <a class="footerLink" href="tel:8086740131"><i class="phone icon"></i> (808) 674-0131</a><br> \
        <i class="clock outline icon"></i> Everyday 10 am - 10 pm<br> \
      </div> \
      <div class="column" style="font-size: 1rem; vertical-align: text-top;"> \
        <a class="footerLink largeFont1" href="https://order.baskinrobbins.com/categories?storeId=BR-362037">King St.</a><br>\
        <i class="map marker alternate icon"></i> 1618 S King St, Honolulu, HI 96826<br> \
        <a class="footerLink" href="tel:8089477300"><i class="phone icon"></i> (808) 947-7300</a><br> \
        <i class="clock outline icon"></i> Everyday 10 am - 10 pm<br> \
      </div> \
      <div class="column" style="font-size: 1rem; vertical-align: text-top;"> \
        <a class="footerLink largeFont1" href="https://order.baskinrobbins.com/categories?storeId=BR-342350">Mililani</a><br>\
        <i class="map marker alternate icon"></i> 95-1249 Meheula Pkwy, Mililani, HI 96789<br> \
        <a class="footerLink" href="tel:8086239999"><i class="phone icon"></i> (808) 623-9999</a><br> \
        <i class="clock outline icon"></i> Everyday: 10 am - 10 pm<br> \
      </div> \
      <div class="column" style="font-size: 1rem; vertical-align: text-top;"> \
        <a class="footerLink largeFont1" href="https://order.baskinrobbins.com/categories?storeId=BR-343836">Moanalua</a><br>\
        <i class="map marker alternate icon"></i> 930 Valkenburgh St, Honolulu, HI 96818<br> \
        <a class="footerLink" href="tel:8084210888"><i class="phone icon"></i> (808) 421-0888</a><br> \
        <i class="clock outline icon"></i> Everyday 10:30 am - 10 pm<br> \
      </div> \
      <div class="column" style="font-size: 1rem; vertical-align: text-top;"> \
        <a class="footerLink largeFont1" href="https://order.baskinrobbins.com/categories?storeId=BR-348162">Kailua</a><br>\
        <i class="map marker alternate icon"></i> 108 Hekili St, Kailua, HI 96734<br> \
        <a class="footerLink" href="tel:8082612770"><i class="phone icon"></i> (808) 261-2770</a><br> \
        <i class="clock outline icon"></i> Everyday 10 am - 10 pm<br> \
      </div> \
    </div> \
    <br>\
    <br>'
    footer.appendChild(element);
}
