var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 16.483912,
            lng: 102.812811
        },
        zoom: 15,
        mapTypeControl: false,
        streetViewControl: false
    });

    markers = [{
        title: 'The Address',
        type: 'info',
        position: new google.maps.LatLng(16.487244, 102.819819),
        content: '<div style="width: 215px;height: auto;"><img src="/images/dorm/1/main.jpg" style="width: 210px;height: auto;border: 2px solid #FFF;border-radius: 4px;box-shadow: 0px 0px 5px rgba(0,0,0,0.3);"><br><a href="/th/dorm/1/" target="_bank" style="font-size: 16px;text-decoration: none;font-weight: bold;color: #2480c2;">The Address</a><div>ราคา 0 - 4500 บาท</div><div style="text-indent: 15px;">เหมาะกับคนที่มีรถยนต์ หรือคนที่เดินทางสะดวก  สงบ  ห้องกว้าง เจ้าของหอใจดีเป็นกันเอง มียามคอยดูแลความปลอดภัย กล้องวงจรครบ  สิ่งอำนวยความสะดวกครบ ราคาคุยกันได้เจ้าของหอใจดี</div><div><img src="/images/facilities/wifi.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/coinwashingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/drikingwatervendingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/elevator.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/singlebed.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/livingroom.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/carpark.jpg" style="width: 25px;height: 25px;"></div></div><a class="button" href="/th/dorm/1/" target="_bank">รายละเอียดเพิ่มเติม</a>'
    }, {
        title: 'รุ่งทิวา ปาร์ค',
        type: 'info',
        position: new google.maps.LatLng(16.486641, 102.811105),
        content: '<div style="width: 215px;height: auto;"><img src="/images/dorm/3/main.jpg" style="width: 210px;height: auto;border: 2px solid #FFF;border-radius: 4px;box-shadow: 0px 0px 5px rgba(0,0,0,0.3);"><br><a href="/th/dorm/3/" target="_bank" style="font-size: 16px;text-decoration: none;font-weight: bold;color: #2480c2;">รุ่งทิวา ปาร์ค</a><div>ราคา 3500 - 3800 บาท</div><div style="text-indent: 15px;">เหมาะสำหรับคนที่มีรถยนต์ และต้องการความเป็นส่วนตัว ไม่ชอบเสียงดัง มีที่จอดรถยนต์กว้างมาก และจอดในร่ม</div><div><img src="/images/facilities/wifi.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/coinwashingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/drikingwatervendingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/singlebed.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/livingroom.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/carpark.jpg" style="width: 25px;height: 25px;"></div></div><a class="button" href="/th/dorm/3/" target="_bank">รายละเอียดเพิ่มเติม</a>'
    }, {
        title: 'เปี่ยมสุข แมนชั่น',
        type: 'info',
        position: new google.maps.LatLng(16.483550, 102.814280),
        content: '<div style="width: 215px;height: auto;"><img src="/images/dorm/5/main.jpg" style="width: 210px;height: auto;border: 2px solid #FFF;border-radius: 4px;box-shadow: 0px 0px 5px rgba(0,0,0,0.3);"><br><a href="/th/dorm/5/" target="_bank" style="font-size: 16px;text-decoration: none;font-weight: bold;color: #2480c2;">เปี่ยมสุข แมนชั่น</a><div>ราคา 2500 - 3000 บาท</div><div style="text-indent: 15px;"></div><div><img src="/images/facilities/wifi.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/coinwashingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/drikingwatervendingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/singlebed.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/twinbed.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/carpark.jpg" style="width: 25px;height: 25px;"></div></div><a class="button" href="/th/dorm/5/" target="_bank">รายละเอียดเพิ่มเติม</a>'
    }, {
        title: 'พราว ลิฟวิ่ง',
        type: 'info',
        position: new google.maps.LatLng(16.483768, 102.813134),
        content: '<div style="width: 215px;height: auto;"><img src="/images/dorm/7/main.jpg" style="width: 210px;height: auto;border: 2px solid #FFF;border-radius: 4px;box-shadow: 0px 0px 5px rgba(0,0,0,0.3);"><br><a href="/th/dorm/7/" target="_bank" style="font-size: 16px;text-decoration: none;font-weight: bold;color: #2480c2;">พราว ลิฟวิ่ง</a><div>ราคา 0 - 3200 บาท</div><div style="text-indent: 15px;">เงียบสงบ  เหมาะสำหรับคนที่ไม่ชอบเสียงรบกวน</div><div><img src="/images/facilities/wifi.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/coinwashingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/drikingwatervendingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/singlebed.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/livingroom.jpg" style="width: 25px;height: 25px;"></div></div><a class="button" href="/th/dorm/7/" target="_bank">รายละเอียดเพิ่มเติม</a>'
    }, {
        title: 'A-house อพาร์ตเม้นท์',
        type: 'info',
        position: new google.maps.LatLng(16.480819, 102.816310),
        content: '<div style="width: 215px;height: auto;"><img src="/images/dorm/9/main.jpg" style="width: 210px;height: auto;border: 2px solid #FFF;border-radius: 4px;box-shadow: 0px 0px 5px rgba(0,0,0,0.3);"><br><a href="/th/dorm/9/" target="_bank" style="font-size: 16px;text-decoration: none;font-weight: bold;color: #2480c2;">A-house อพาร์ตเม้นท์</a><div>ราคา 3000 - 3500 บาท</div><div style="text-indent: 15px;">ใกล้ 7-11 ใกล้ร้านอาหาร ใกล้มหาลัย</div><div><img src="/images/facilities/wifi.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/coinwashingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/drikingwatervendingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/singlebed.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/twinbed.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/livingroom.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/lan.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/carpark.jpg" style="width: 25px;height: 25px;"></div></div><a class="button" href="/th/dorm/9/" target="_bank">รายละเอียดเพิ่มเติม</a>'
    }, {
        title: 'จันทรา เสซิเด้นท์',
        type: 'info',
        position: new google.maps.LatLng(16.480621, 102.812346),
        content: '<div style="width: 215px;height: auto;"><img src="/images/dorm/11/main.jpg" style="width: 210px;height: auto;border: 2px solid #FFF;border-radius: 4px;box-shadow: 0px 0px 5px rgba(0,0,0,0.3);"><br><a href="/th/dorm/11/" target="_bank" style="font-size: 16px;text-decoration: none;font-weight: bold;color: #2480c2;">จันทรา เสซิเด้นท์</a><div>ราคา 3500 - 0 บาท</div><div style="text-indent: 15px;">เฟอร์นิเจอร์ครบ ไม่ต้องเสียเงินเพิ่ม อยู่หลังหอพักอินเตอร์</div><div><img src="/images/facilities/wifi.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/coinwashingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/drikingwatervendingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/singlebed.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/livingroom.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/carpark.jpg" style="width: 25px;height: 25px;"></div></div><a class="button" href="/th/dorm/11/" target="_bank">รายละเอียดเพิ่มเติม</a>'
    }, {
        title: 'ภิญญารัตน์ เพลส',
        type: 'info',
        position: new google.maps.LatLng(16.482585, 102.817121),
        content: '<div style="width: 215px;height: auto;"><img src="/images/dorm/13/main.jpg" style="width: 210px;height: auto;border: 2px solid #FFF;border-radius: 4px;box-shadow: 0px 0px 5px rgba(0,0,0,0.3);"><br><a href="/th/dorm/13/" target="_bank" style="font-size: 16px;text-decoration: none;font-weight: bold;color: #2480c2;">ภิญญารัตน์ เพลส</a><div>ราคา 2800 - 3500 บาท</div><div style="text-indent: 15px;">ใกล้ร้านอาหาร สะดวกสบาย</div><div><img src="/images/facilities/wifi.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/coinwashingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/drikingwatervendingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/singlebed.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/carpark.jpg" style="width: 25px;height: 25px;"></div></div><a class="button" href="/th/dorm/13/" target="_bank">รายละเอียดเพิ่มเติม</a>'
    }, {
        title: 'นนทยา เพลส',
        type: 'info',
        position: new google.maps.LatLng(16.482942, 102.817847),
        content: '<div style="width: 215px;height: auto;"><img src="/images/dorm/17/main.jpg" style="width: 210px;height: auto;border: 2px solid #FFF;border-radius: 4px;box-shadow: 0px 0px 5px rgba(0,0,0,0.3);"><br><a href="/th/dorm/17/" target="_bank" style="font-size: 16px;text-decoration: none;font-weight: bold;color: #2480c2;">นนทยา เพลส</a><div>ราคา 0 - 3800 บาท</div><div style="text-indent: 15px;">สงบ  ห้องกว้าง มีเครื่องซักผ้าทุกชั้น เลี้ยงสัตว์ได้ มีรปภ แม่บ้าน คอยดูแลความสะอาด และความปลอดภัย มีกล้องวงจรครบ</div><div><img src="/images/facilities/wifi.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/coinwashingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/drikingwatervendingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/singlebed.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/pet.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/carpark.jpg" style="width: 25px;height: 25px;"></div></div><a class="button" href="/th/dorm/17/" target="_bank">รายละเอียดเพิ่มเติม</a>'
    }, {
        title: 'เรืองทิพย์ แมนชั่น',
        type: 'info',
        position: new google.maps.LatLng(16.481341, 102.818633),
        content: '<div style="width: 215px;height: auto;"><img src="/images/dorm/19/main.jpg" style="width: 210px;height: auto;border: 2px solid #FFF;border-radius: 4px;box-shadow: 0px 0px 5px rgba(0,0,0,0.3);"><br><a href="/th/dorm/19/" target="_bank" style="font-size: 16px;text-decoration: none;font-weight: bold;color: #2480c2;">เรืองทิพย์ แมนชั่น</a><div>ราคา 2800 - 2900 บาท</div><div style="text-indent: 15px;">ราคาถูก ใกล้ประตูมอ</div><div><img src="/images/facilities/wifi.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/coinwashingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/drikingwatervendingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/singlebed.jpg" style="width: 25px;height: 25px;"></div></div><a class="button" href="/th/dorm/19/" target="_bank">รายละเอียดเพิ่มเติม</a>'
    }, {
        title: 'หอพัก อยู่เฮง',
        type: 'info',
        position: new google.maps.LatLng(16.481296, 102.814719),
        content: '<div style="width: 215px;height: auto;"><img src="/images/dorm/21/main.jpg" style="width: 210px;height: auto;border: 2px solid #FFF;border-radius: 4px;box-shadow: 0px 0px 5px rgba(0,0,0,0.3);"><br><a href="/th/dorm/21/" target="_bank" style="font-size: 16px;text-decoration: none;font-weight: bold;color: #2480c2;">หอพัก อยู่เฮง</a><div>ราคา 3000 - 3500 บาท</div><div style="text-indent: 15px;">ที่จอดรถกว้าง</div><div><img src="/images/facilities/wifi.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/coinwashingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/drikingwatervendingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/singlebed.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/twinbed.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/carpark.jpg" style="width: 25px;height: 25px;"></div></div><a class="button" href="/th/dorm/21/" target="_bank">รายละเอียดเพิ่มเติม</a>'
    }, {
        title: 'Good view Place',
        type: 'info',
        position: new google.maps.LatLng(16.455811, 102.827340),
        content: '<div style="width: 215px;height: auto;"><img src="/images/dorm/23/main.jpg" style="width: 210px;height: auto;border: 2px solid #FFF;border-radius: 4px;box-shadow: 0px 0px 5px rgba(0,0,0,0.3);"><br><a href="/th/dorm/23/" target="_bank" style="font-size: 16px;text-decoration: none;font-weight: bold;color: #2480c2;">Good view Place</a><div>ราคา 3900 - 4200 บาท</div><div style="text-indent: 15px;">มีกล้องวงจรทุกจุด  ห้องพักสะอาด มีแม่บ้านและ รปภ ดูแลความปลอดภัย 24 ช.ม.</div><div><img src="/images/facilities/wifi.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/coinwashingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/drikingwatervendingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/singlebed.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/carpark.jpg" style="width: 25px;height: 25px;"></div></div><a class="button" href="/th/dorm/23/" target="_bank">รายละเอียดเพิ่มเติม</a>'
    }, {
        title: 'จิดาภา อพาร์ทเม้นท์',
        type: 'info',
        position: new google.maps.LatLng(16.457234, 102.828400),
        content: '<div style="width: 215px;height: auto;"><img src="/images/dorm/25/main.jpg" style="width: 210px;height: auto;border: 2px solid #FFF;border-radius: 4px;box-shadow: 0px 0px 5px rgba(0,0,0,0.3);"><br><a href="/th/dorm/25/" target="_bank" style="font-size: 16px;text-decoration: none;font-weight: bold;color: #2480c2;">จิดาภา อพาร์ทเม้นท์</a><div>ราคา 3200 - 3900 บาท</div><div style="text-indent: 15px;">อยู่แถวบึงหนองแวง เข้า-ออก ใช้ระบบคีการ์ด มีกล้องวงจรทุกจุด ห้องพักสะอาด มีที่จอดรถกว้าง เฟอร์นิเจอร์ครบ มีแม่บ้านและ รปภ ดูแลความปลอดภัย 24 ช.ม.</div><div><img src="/images/facilities/wifi.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/coinwashingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/drikingwatervendingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/singlebed.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/livingroom.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/carpark.jpg" style="width: 25px;height: 25px;"></div></div><a class="button" href="/th/dorm/25/" target="_bank">รายละเอียดเพิ่มเติม</a>'
    }, {
        title: 'วังบัว การ์เด้น',
        type: 'info',
        position: new google.maps.LatLng(16.478439, 102.804815),
        content: '<div style="width: 215px;height: auto;"><img src="/images/dorm/27/main.jpg" style="width: 210px;height: auto;border: 2px solid #FFF;border-radius: 4px;box-shadow: 0px 0px 5px rgba(0,0,0,0.3);"><br><a href="/th/dorm/27/" target="_bank" style="font-size: 16px;text-decoration: none;font-weight: bold;color: #2480c2;">วังบัว การ์เด้น</a><div>ราคา 0 - 3500 บาท</div><div style="text-indent: 15px;">สงบร่มรื่น มีรปภ ดูแลความปลอดภัย มีกล้องวงจรครบ  มีบริการซ่อมห้องพักฟรี</div><div><img src="/images/facilities/wifi.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/coinwashingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/drikingwatervendingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/singlebed.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/livingroom.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/carpark.jpg" style="width: 25px;height: 25px;"></div></div><a class="button" href="/th/dorm/27/" target="_bank">รายละเอียดเพิ่มเติม</a>'
    }, {
        title: 'สุทธิลักษณ์ เรสซิเด้นท์',
        type: 'info',
        position: new google.maps.LatLng(16.480841, 102.804654),
        content: '<div style="width: 215px;height: auto;"><img src="/images/dorm/29/main.jpg" style="width: 210px;height: auto;border: 2px solid #FFF;border-radius: 4px;box-shadow: 0px 0px 5px rgba(0,0,0,0.3);"><br><a href="/th/dorm/29/" target="_bank" style="font-size: 16px;text-decoration: none;font-weight: bold;color: #2480c2;">สุทธิลักษณ์ เรสซิเด้นท์</a><div>ราคา 3800 - 4000 บาท</div><div style="text-indent: 15px;">ปิดเทอมไม่อยู่ ไม่ต้องย้ายของออก ไม่เสียค่าใช้จ่ายค่าห้อง</div><div><img src="/images/facilities/wifi.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/coinwashingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/drikingwatervendingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/elevator.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/singlebed.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/twinbed.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/livingroom.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/carpark.jpg" style="width: 25px;height: 25px;"></div></div><a class="button" href="/th/dorm/29/" target="_bank">รายละเอียดเพิ่มเติม</a>'
    }, {
        title: 'อรณิภา เพลส',
        type: 'info',
        position: new google.maps.LatLng(16.480944, 102.803682),
        content: '<div style="width: 215px;height: auto;"><img src="/images/dorm/31/main.jpg" style="width: 210px;height: auto;border: 2px solid #FFF;border-radius: 4px;box-shadow: 0px 0px 5px rgba(0,0,0,0.3);"><br><a href="/th/dorm/31/" target="_bank" style="font-size: 16px;text-decoration: none;font-weight: bold;color: #2480c2;">อรณิภา เพลส</a><div>ราคา 2900 - 3500 บาท</div><div style="text-indent: 15px;">เงียบ สงบ ร่มรื่น  บรรยากาศดี ทางเดินกว้าง</div><div><img src="/images/facilities/wifi.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/coinwashingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/drikingwatervendingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/singlebed.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/twinbed.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/livingroom.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/carpark.jpg" style="width: 25px;height: 25px;"></div></div><a class="button" href="/th/dorm/31/" target="_bank">รายละเอียดเพิ่มเติม</a>'
    }, {
        title: 'ฮาโมนี่ เพลส',
        type: 'info',
        position: new google.maps.LatLng(16.484586, 102.816532),
        content: '<div style="width: 215px;height: auto;"><img src="/images/dorm/39/main.jpg" style="width: 210px;height: auto;border: 2px solid #FFF;border-radius: 4px;box-shadow: 0px 0px 5px rgba(0,0,0,0.3);"><br><a href="/th/dorm/39/" target="_bank" style="font-size: 16px;text-decoration: none;font-weight: bold;color: #2480c2;">ฮาโมนี่ เพลส</a><div>ราคา 0 - 3500 บาท</div><div style="text-indent: 15px;">ถนนเส้นหลักมอ ห่างจากรั้ว มข. 1 กิโลเมตร   ใกล้ร้านอาหารสะดวกสบาย ที่จอดรถเยอะ</div><div><img src="/images/facilities/wifi.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/coinwashingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/drikingwatervendingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/singlebed.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/livingroom.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/carpark.jpg" style="width: 25px;height: 25px;"></div></div><a class="button" href="/th/dorm/39/" target="_bank">รายละเอียดเพิ่มเติม</a>'
    }, {
        title: 'หอสุภรณ์',
        type: 'info',
        position: new google.maps.LatLng(16.478578, 102.803761),
        content: '<div style="width: 215px;height: auto;"><img src="/images/dorm/41/main.jpg" style="width: 210px;height: auto;border: 2px solid #FFF;border-radius: 4px;box-shadow: 0px 0px 5px rgba(0,0,0,0.3);"><br><a href="/th/dorm/41/" target="_bank" style="font-size: 16px;text-decoration: none;font-weight: bold;color: #2480c2;">หอสุภรณ์</a><div>ราคา 2500 - 3000 บาท</div><div style="text-indent: 15px;">ราคาถูก สงบ บรรยากาศดี สิ่งอำนวยความสะดวกครบ</div><div><img src="/images/facilities/wifi.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/coinwashingmachine.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/singlebed.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/twinbed.jpg" style="width: 25px;height: 25px;"><img src="/images/facilities/carpark.jpg" style="width: 25px;height: 25px;"></div></div><a class="button" href="/th/dorm/41/" target="_bank">รายละเอียดเพิ่มเติม</a>'
    }, {
        title: 'หอเฟอรี่ เฟส 1',
        type: 'info',
        position: new google.maps.LatLng(16.484203, 102.815404),
        content: '<div style="width: 215px;height: auto;"><img src="/images/dorm/43/main.jpg" style="width: 210px;height: auto;border: 2px solid #FFF;border-radius: 4px;box-shadow: 0px 0px 5px rgba(0,0,0,0.3);"><br><a href="/th/dorm/43/" target="_bank" style="font-size: 16px;text-decoration: none;font-weight: bold;color: #2480c2;">หอเฟอรี่ เฟส 1</a><div>ราคา 0 - 0 บาท</div><div style="text-indent: 15px;"></div><div></div></div><a class="button" href="/th/dorm/43/" target="_bank">รายละเอียดเพิ่มเติม</a>'
    }, {
        title: 'หอเฟอรี่ เฟส 2',
        type: 'info',
        position: new google.maps.LatLng(16.484203, 102.815404),
        content: '<div style="width: 215px;height: auto;"><img src="/images/dorm/45/main.jpg" style="width: 210px;height: auto;border: 2px solid #FFF;border-radius: 4px;box-shadow: 0px 0px 5px rgba(0,0,0,0.3);"><br><a href="/th/dorm/45/" target="_bank" style="font-size: 16px;text-decoration: none;font-weight: bold;color: #2480c2;">หอเฟอรี่ เฟส 2</a><div>ราคา 0 - 0 บาท</div><div style="text-indent: 15px;"></div><div></div></div><a class="button" href="/th/dorm/45/" target="_bank">รายละเอียดเพิ่มเติม</a>'
    }, {
        title: 'หอเฟอรี่ เฟส 3',
        type: 'info',
        position: new google.maps.LatLng(16.484203, 102.815404),
        content: '<div style="width: 215px;height: auto;"><img src="/images/dorm/49/main.jpg" style="width: 210px;height: auto;border: 2px solid #FFF;border-radius: 4px;box-shadow: 0px 0px 5px rgba(0,0,0,0.3);"><br><a href="/th/dorm/49/" target="_bank" style="font-size: 16px;text-decoration: none;font-weight: bold;color: #2480c2;">หอเฟอรี่ เฟส 3</a><div>ราคา 0 - 0 บาท</div><div style="text-indent: 15px;">ยังไม่กรอกรายละเอียด</div><div></div></div><a class="button" href="/th/dorm/49/" target="_bank">รายละเอียดเพิ่มเติม</a>'
    }];

    markers.forEach(function (data) {
        var marker = new google.maps.Marker({
            position: data.position,
            title: data.title,
            content: data.content,
            icon: '/images/home-icon.png',
            map: map
        });
        var infowindow = new google.maps.InfoWindow({
            content: data.content
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
        markers.push(marker);
    });
}