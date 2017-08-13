function initMap() {
  var uluru = {lat: 34.667977, lng: 135.5046};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: uluru
  });

  var PlaceName = "千日前"
  var sentence =　"道頓堀からの通路と千日前からの通路の角に当っているところに古びた阿多福人形おたふくにんぎょうが据えられ、その前に「めおとぜんざい」と書いた赤い大提灯おおぢょうちんがぶら下っているのを見ると、しみじみと夫婦で行く店らしかった。"
  var address = "大阪府大阪市中央区千日前"
  var Author = "織田作之助"
  var Title = "夫婦善哉"
  var image = "./Sennichimae.jpg"

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">『'+PlaceName+'』</h1>'+
      '<div id="bodyContent">'+
      '<p>'+sentence+'</p>'+
      '<p>'+Author+' 『'+Title+'』から</p>'+
      '<img src='+image+'>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: 'Uluru (Ayers Rock)'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}
