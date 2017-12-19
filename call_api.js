function getData() {
        console.log("Calling...");
        getPage("http://www.geargame29.en.kku.ac.th/theInterface/api/v1/universities.php");
    }

    function GetXmlHttpObject() {
        var xmlHttp = null;
        try {
            // Firefox, Opera 8.0+, Safari
            xmlHttp = new XMLHttpRequest();
        } catch (e) {
            // Internet Explorer
            try {
                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
        }
        return xmlHttp;
    }

    function getPage(url) {
        xhr = GetXmlHttpObject();
        if (!xhr) {
            alert('XMLHttp failed to instantiate');
            return false;
        }
        xhr.onreadystatechange = statusCheck;
        xhr.open('GET', url, true);
        xhr.send(null);
    }

    function statusCheck() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var jsonT = xhr.responseText;
                var obj = jQuery.parseJSON(jsonT);
                console.log(obj);
                console.log(toCurr);
                var Curr_result = obj.rates[toCurr];
                document.getElementById("result").innerHTML = Curr_result;
            }
        }
    }