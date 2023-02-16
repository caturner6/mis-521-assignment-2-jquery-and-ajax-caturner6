var len;
var results = '';

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "dd19a956af804c5c82ce7232c8ae1657");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
        }
      var Search = document.getElementById("searchResults");
      Search.style.visibility = "visible";
      $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
}
function getTime() {
    var time = document.getElementById("time");
    time.style.visibility = "visible";
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var formattedTime = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes);
    $
        (time).html(formattedTime).dialog({
            title: "Current Time",
            modal: true,
            buttons: {
                "Close": function () {
                    $(this).dialog("close");
                }
            }
        });
}
function changeBackground() {
    document.body.style.backgroundSize = "auto"
    document.body.style.backgroundImage = "url('https://th.bing.com/th/id/OIP.uwYPx1BLqh-HkM3KDjx2_AAAAA?pid=ImgDet&rs=1')";
}
