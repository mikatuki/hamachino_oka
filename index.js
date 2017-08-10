function main(){
  var sentence= 'さん年経つと、やっと二百円たまった。柳吉が腸が痛むというので時々医者通いし、そのため入費が嵩んで、歯がゆいほど、金はたまらなかったのだ。二百円出来たので、柳吉に「なんぞええ商売ないやろか」と相談したが、こんどは「そんな端金《はしたがね》ではどないも仕様がない」と乗気にならず、ある日、そのうち五十円の金を飛田の廓《くるわ》で瞬く間に使ってしまった。四五日まえに、妹が近々｜聟《むこ》養子を迎《むか》えて、梅田新道の家を切り廻して行くという噂が柳吉の耳にはいっていたので、かねがね予期していたことだったが、それでも娼妓《しょうぎ》を相手に一日で五十円の金を使ったとは、むしろ呆《あき》れてしまった。ぼんやりした顔をぬっと突き出して帰って来たところを、いきなり襟を掴んで突き倒し、馬乗りになって、ぐいぐい首を締《し》めあげた。「く、く、く、るしい、苦しい、おばはん、何すんねん」と柳吉は足をばたばたさせた。蝶子は、もう思う存分｜折檻《せっかん》しなければ気がすまぬと、締めつけ締めつけ、打つ、撲る、しまいに柳吉は「どうぞ、かんにんしてくれ」と悲鳴をあげた。蝶子はなかなか手をゆるめなかった。妹が聟養子を迎えると聴いたくらいでやけになる柳吉が、腹立たしいというより、むしろ可哀想で、蝶子の折檻は痴情《ちじょう》めいた。隙を見て柳吉は、ヒーヒー声を立てて階下へ降り、逃げまわったあげく、便所の中へ隠れてしまった。さすがにそこまでは追わなかった。階下の主婦は女だてらとたしなめたが、蝶子は物一つ言わず、袖に顔をあてて、肩をふるわせると、思いがけずはじめて女らしく見えたと、主婦は思った。年下の夫を持つ彼女はかねがね蝶子のことを良く言わなかった。毎朝味噌しるを拵《こしら》えるとき、柳吉が襷《たすき》がけで鰹節《かつおぶし》をけずっているのを見て、亭主にそんなことをさせて良いもんかとほとんど口に出かかった。好みの味にするため、わざわざ鰹節けずりまで自分の手でしなければ収まらぬ柳吉の食意地の汚さなど、知らなかったのだ。担ぎ屋も同感で、いつか蝶子、柳吉と三人連れ立って千日前へ浪花節を聴きに行ったとき、立て込んだ寄席《よせ》の中で、誰《だれ》かに悪戯《いたずら》をされたとて、キャッーと大声を出して騒《さわ》ぎまわった蝶子を見て、えらい女やと思い、体裁の悪そうな顔で目をしょぼしょぼさせている柳吉にほとほと同情した、と帰って女房に言った。「あれでは今に維康さんに嫌《きら》われるやろ」夫婦はひそひそ語り合っていたが、案の定、柳吉はある日ぶらりと出て行ったまま、幾日《いくにち》も帰って来なかった。';

  var url = 'http://www.aozora.gr.jp/cards/000040/files/545_33102.html';
  //var url = 'http://www.aozora.gr.jp/cards/000083/files/496_19866.html'
  var str ;
  //console.log(str);
  //$("body").append(str);
  getGeocoder("六本木")
  .then(function(str){
    var tmp = str.getElementsByTagName('Feature');
    console.log(str);
    console.log(tmp);
    console.log(Object.prototype.toString(str));
  })
/*
  getAozoraString(url)
    .then(function(str){
      return getNamedEntity(str);
    }
    )

    .then(function(value){
      //console.log(str);
      var ne = JSON.parse(value||"null");
      str = getAozoraString(url);
      //console.log(ne["ne_list"]);
      return ne["ne_list"];
    })

    .then(function(value){
        value.forEach(function(data){
          if(data[1]=="LOC"){
            placeName.push(data[0]);
          }
        })

        placeName
          = placeName.filter(function (x, i, self) {
              return self.indexOf(x) === i;
            }

        return placeName;
      })

    .then(function(value){
      console.log(value.filter(function (x, i, self) {
            return self.indexOf(x) === i;
        }));
    })
*/
};

//##############################################################################//
function getNamedEntity(sentence) {
  return new Promise (function(resolve, reject){
    var url = 'https://labs.goo.ne.jp/api/entity'; // リクエスト先URL
    var data = 'app_id=21db2fa1eb72b25eb541d284d628cf91ecbb251dc4da83eba55abb77989fd14f&sentence='+sentence; // 送信データ ('param=value&...')
    //console.log(data);
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

function getAozoraString(url) {
  return new Promise (function(resolve, reject){
    $.get(url, function(data){
      var re = /[<].*[>]/;
      var content = $($(data.responseText).text());
      var AozoraString = content[19].innerText
      AozoraString = AozoraString.replace(/\r?\n/gi, "").replace(/（[^）]+）/gi, "");
      //console.log(AozoraString)
      resolve(AozoraString);
    });
  });
}

//##############################################################################//
/*
function getGeocoder(place) {
  return new Promise (function(resolve, reject){
    var appid = '?appid=j00aiZpPVlobGpLeGVMc2hHTSZzPWNvbnN1bWVyc2VjcmV0Jng9ZmY-'
    var query = '&query='+place
    var url = 'https://map.yahooapis.jp/geocode/V1/geoCoder'+appid+query; // リクエスト先URL
    //console.log(data);
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
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
    //request.setRequestHeader('Content-Type', 'application/xml');
    request.send();
  });
}
*/
/*
function getGeocoder(place) {
  return new Promise (function(resolve, reject){
    console.log("Test");
    var appid = 'dj00aiZpPVlobGpLeGVMc2hHTSZzPWNvbnN1bWVyc2VjcmV0Jng9ZmY-'
    $.getJSON(`https://map.yahooapis.jp/geocode/V1/geoCoder?appid=${appid}&query=${place}`,
      function(data){

      });
   });
}
*/
function accessControl(place) {
  return new Promise (function(resolve, reject){
    const request = new XMLHttpRequest();
    request.open("GET", `./acao.php`);
    request.addEventListener("load", (event) => {
        if (event.target.status !== 200) {
            console.log(`${event.target.status}: ${event.target.statusText}`);
            return;
        }
        console.log(event.target.status);
        console.log(event.target.responseText);
    });
    request.addEventListener("error", () => {
        console.error("Network Error");
    });
    request.send();
  });
}


function getGeocoder(place) {
  return new Promise (function(resolve, reject){
    var appid = 'dj00aiZpPVlobGpLeGVMc2hHTSZzPWNvbnN1bWVyc2VjcmV0Jng9ZmY-'
    const request = new XMLHttpRequest();
    request.open("GET", `https://map.yahooapis.jp/geocode/V1/geoCoder?appid=${appid}&query=${place}`);
    request.addEventListener("load", (event) => {
        if (event.target.status !== 200) {
            console.log(`${event.target.status}: ${event.target.statusText}`);
            return;
        }
        //console.log(event.target.status);
        //console.log(event.target.responseText);
        resolve(event.target.responseText)
    });
    request.addEventListener("error", () => {
        console.error("Network Error");
    });
    //request.setRequestHeader('Content-Type', 'application/xml');
    request.send();
  });
}
