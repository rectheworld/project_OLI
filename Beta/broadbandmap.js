APIbase = "http://www.broadbandmap.gov/broadbandmap/";
dataVersion = "2014";
latitude = 42.456;
longitude = 74.987;
format = "json";


APIcall = APIbase + "/demographic/" + dataVersion + "/coordinates?"
 + "latitude =" + latitude +"$logitude=" +longitude+"$format = json";
 
 data = $.getJSON(APIcall);



 console.log('cat');
 console.log(data);
 console.log('cat');