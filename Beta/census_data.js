var sdk = new CitySDK();
var censusModule = sdk.modules.census;

censusModule.enable("32d9651dba1ab50b14d0d0a69d43c55888ac1279");

/* var request = {
                "lat": 38.9047,
                "lng": -77.0164,
                "level": "state",
                "variables": [
                    "income",
                    "population"
                ]
            };*/

$(function(){
    jQuery.support.cors = true;
    $("button").click(function(){

// User entered both county and state FIPS
    if ( $("#C_FIPS").val() != "" )
                    params = "&for=county:" + $("#C_FIPS").val() + "&in=state:" + $("#S_FIPS").val();
    // User entered only state FIPS
    else
                    params = "&for=state:" + $("#S_FIPS").val();
    // Make async call to Census API service
    $.ajax({
                    type: 'GET',
                    url: "http://api.census.gov/data/2010/sf1?key=32d9651dba1ab50b14d0d0a69d43c55888ac1279&get=P0010001,NAME" + params,
                    success: function ( resp ) {                                                     
                                    var values = resp[ 1 ];
                                    var pop  = values[ 0 ];
                                    var name = values[ 1 ];
                                    var FIPS = values[ 2 ];
                                    if ( values.length == 3 )
                                                    $("#state-name").text( name );
                                    else
                                                    $("#county-name").text( name );
                                                    $("#pop").text( pop );
                                    },
                                    error: function (responseData, textStatus, errorThrown) {
                                                    alert('GET failed.');
                                    }
                    });
    });
}); 
census.APIRequest(request, function(response) {
    console.log(response);
});