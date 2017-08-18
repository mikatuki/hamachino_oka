function main() {

     var book = document.getElementById('urll');
     var url = book.value;

     $.get(url, function(data){
    //var re = /[<].*[>]/;
    var content = $($(data.responseText).text());
    var content2 = content;

     console.dir(content2[19]['innerText']);
    $("body").append(content2[19]['innerText']);

  });
};
  //##############################################################################//
function getNamedEntity(sentence) {
  return new Promise (function(resolve, reject){
    var url = 'https://labs.goo.ne.jp/api/entity'; // リクエスト先URL
    var data = 'app_id=21db2fa1eb72b25eb541d284d628cf91ecbb251dc4da83eba55abb77989fd14f&sentence='+sentence; // 送信データ ('param=value&...')
    console.log(data);
    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.onreadystatechange = function () {
      if (request.readyState != 4) {
        // リクエスト中
      } else if (request.status != 200) {
        console.log(`Error: ${event.target.status}`);
        reject(new Error(request.statusText));
      } else {
        // 送信成功
        var result = request.responseText;
        //console.log(result)
        resolve(result);
      }
    };
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(data);
  });
}
//##############################################################################//
