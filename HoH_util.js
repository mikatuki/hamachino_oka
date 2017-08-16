
function main(func){
  var xml2;
  switch(func){
    case 'getAozoraURL':
      getAozoraURL(AozoraURL)
      .then(function(str){
        console.log(str);
      })
      break;

    case 'getAozoraString':
      var url = 'http://www.aozora.gr.jp/cards/000040/files/545_33102.html';
      getAozoraString(url)
      .then(function(str){
        console.log(str);
      })
      break;

    case 'seachSentence':
      var url = 'http://www.aozora.gr.jp/cards/000040/files/545_33102.html';
      var word = "千日前"
      getAozoraString(url)
      .then(function(str){
        //console.log(str);
        return seachSentence(str, word);
      }).then(function(sentence){
        console.log(sentence);
      })
      break;
//##############################################################################//

    case 'getNamedEntity':
      var sentence= '二百円出来たので、柳吉に「なんぞええ商売ないやろか」と相談したが、こんどは「そんな端金《はしたがね》ではどないも仕様がない」と乗気にならず、ある日、そのうち五十円の金を飛田の廓《くるわ》で瞬く間に使ってしまった。四五日まえに、妹が近々｜聟《むこ》養子を迎《むか》えて、梅田新道の家を切り廻して行くという噂が柳吉の耳にはいっていたので、かねがね予期していたことだったが、それでも娼妓《しょうぎ》を相手に一日で五十円の金を使ったとは、むしろ呆《あき》れてしまった。ぼんやりした顔をぬっと突き出して帰って来たところを、いきなり襟を掴んで突き倒し、馬乗りになって、ぐいぐい首を締《し》めあげた。「く、く、く、るしい、苦しい、おばはん、何すんねん」と柳吉は足をばたばたさせた。蝶子は、もう思う存分｜折檻《せっかん》しなければ気がすまぬと、締めつけ締めつけ、打つ、撲る、しまいに柳吉は「どうぞ、かんにんしてくれ」と悲鳴をあげた。蝶子はなかなか手をゆるめなかった。妹が聟養子を迎えると聴いたくらいでやけになる柳吉が、腹立たしいというより、むしろ可哀想で、蝶子の折檻は痴情《ちじょう》めいた。隙を見て柳吉は、ヒーヒー声を立てて階下へ降り、逃げまわったあげく、便所の中へ隠れてしまった。さすがにそこまでは追わなかった。階下の主婦は女だてらとたしなめたが、蝶子は物一つ言わず、袖に顔をあてて、肩をふるわせると、思いがけずはじめて女らしく見えたと、主婦は思った。年下の夫を持つ彼女はかねがね蝶子のことを良く言わなかった。毎朝味噌しるを拵《こしら》えるとき、柳吉が襷《たすき》がけで鰹節《かつおぶし》をけずっているのを見て、亭主にそんなことをさせて良いもんかとほとんど口に出かかった。好みの味にするため、わざわざ鰹節けずりまで自分の手でしなければ収まらぬ柳吉の食意地の汚さなど、知らなかったのだ。担ぎ屋も同感で、いつか蝶子、柳吉と三人連れ立って千日前へ浪花節を聴きに行ったとき、立て込んだ寄席《よせ》の中で、誰《だれ》かに悪戯《いたずら》をされたとて、キャッーと大声を出して騒《さわ》ぎまわった蝶子を見て、えらい女やと思い、体裁の悪そうな顔で目をしょぼしょぼさせている柳吉にほとほと同情した、と帰って女房に言った。「あれでは今に維康さんに嫌《きら》われるやろ」夫婦はひそひそ語り合っていたが、案の定、柳吉はある日ぶらりと出て行ったまま、幾日《いくにち》も帰って来なかった。';
      getNamedEntity(sentence)
      .then(function(ne){
        return deDuplication(ne);
      })
      .then(function(loc){
        console.log(loc);
      })
      break;

//##############################################################################//

    case 'getURL':
      var inputID = 'AozoraURL';
      getAozoraURL(inputID)
      .then(function(str){
        console.log(str);
      })
      break;

//##############################################################################//
    case 'getGeocoderXML':
      var placeName = '千日前'
      getGeocoderXML(placeName)
      .then(function(xml){
        xml2 = xml;
        console.log(xml);
      })
      break;

//##############################################################################//
    case 'xml2locationInfo':
      var placeName = '千日前'
      getGeocoderXML(placeName)
      .then(function(xml){
        return xml2locationInfo(xml);
      })
      .then(function(locInfo){
        console.log(locInfo);
      })
      break;
//##############################################################################//
    case 'googleAutoComplete':
      var placeName = '興南'
      googleAutoComplete(placeName)
      .then(function(json){
        console.log(json);
        console.log(json["status"]);
        console.log(json["predictions"][0]["description"]);
        console.log(json["predictions"][0]["place_id"]);
        var termLen = json["predictions"][0]["terms"].length;
        console.log(json["predictions"][0]["terms"][termLen-2].value);
      })
      break;
//##############################################################################//
    case 'googlePlaceDetail':
    var placeID = 'ChIJiTU7J2vnAGARUoMW8fQKMKU'
    googlePlaceDetail(placeID)
    .then(function(json){
      console.log(json);
      console.log(json["result"]["geometry"]["location"]["lat"]);
      console.log(json["result"]["geometry"]["location"]["lng"]);
      var photoRef = json["result"]["photos"][1]["photo_reference"]
      console.log(photoRef);
      var appid = 'AIzaSyDqlDCQ6eiQ-EG8lDtHlmQ5Uhz1121wImk'
      var url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference="+photoRef+"&key="+appid;
      var view = document.getElementById("placePhoto");
      view.innerHTML = '<img src='+url+'>';
    })
    break;
//##############################################################################//

    case 'all':
      var inputID = "AozoraURL"
      var cnt;
      //var data = {};
      getAozoraURL(inputID)
        .then(function(url){
          return getAozoraString(url);
        })
        .then(function(str){
          return getNamedEntity(str);
        })
        .then(function(ne){
          return deDuplication(ne);
        })
        .then(function(arr){
          console.log(arr);
          for (key in arr){
            console.log(arr[key]);
            googleAutoComplete(arr[key])
            .then(function(json){
              if(json["status"]=="OK"){
                var termLen = json["predictions"][0]["terms"].length;
                if(termLen>=3){
                  console.log(json["predictions"][0]["terms"][termLen-2].value);
                  console.log(json["predictions"][0]["structured_formatting"]["main_text"]);
                  console.log(json["predictions"][0]["description"]);
                }
              }
            })
          }
        })
      break
  }
};

//##############################################################################//
//##############################################################################//
//##############################################################################//



//##############################################################################//

function getAozoraURL(inputID) {
  return new Promise (function(resolve, reject){
      var result;
      result = document.getElementById(inputID).value;                          //文字列取得
      //**[html以外を弾く処理を今後挿入]
      resolve(result);                                                          //URL出力
    });
}

//##############################################################################//

function getAozoraString(url) {
  var content;                                                                  //
  var key;                                                                      //
  var result;                                                                   //

  return new Promise (function(resolve, reject){
    $.get(url,function(data){

      //-[本文抽出処理]-----------------------------------------------------------//
      content = $($(data.responseText).text());
      for (key in content){
        if (content[key].className == 'main_text') {
          result = content[key].innerText;
        }
      }
      //------------------------------------------------------------------------//

      result = result.replace(/\r?\n/gi, "").replace(/（[^）]+）/gi, "");        //整形処理
      result = result.replace(/ /gi, "")
      resolve(result);                                                          //AozoraString出力
    });
  });
}

//##############################################################################//

function seachSentence(string, word) {
  return new Promise (function(resolve, reject){
      var result;
      //var regex = new RegExp("^[。　][^。]*"+word+"[^。]+。$")
      str = "マダムの腕一つで女給の顔触れが少々悪くても結構流行はやらして行けると意気込んだ。売りに出ている店を一軒一軒廻ってみて、結局下寺町電停前の店が二ツ井戸から道頓堀、千日前へかけての盛り場に遠くない割に値段も手頃で、店の構えも小ぢんまりして、趣味に適かなっているとて、それに決めた。";
      //var regex = new RegExp('^[。　][^。]*。$', "gi")
      var regex = new RegExp('[^。]*'+word+'[^。]*。', "gi");
      result = string.match(regex);                          //文字列取得
      result2 = str.match(regex);                          //文字列取得

      console.log("string : "+result);
      console.log("str : "+result2);
      resolve(result);                                                          //URL出力
    });
}

//##############################################################################//

function getNamedEntity(sentence) {
  return new Promise (function(resolve, reject){
    var url = 'https://labs.goo.ne.jp/api/entity'; // リクエスト先URL
    var classFilter = 'ART|LOC'
    var data = 'app_id=21db2fa1eb72b25eb541d284d628cf91ecbb251dc4da83eba55abb77989fd14f&sentence='+sentence+'&class_filter='+classFilter; // 送信データ ('param=value&...')
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
        var ne = JSON.parse(request.responseText||"null");
        var result = ne['ne_list']
        //console.log(result)
        resolve(result);
      }
    };
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(data);
  });
}

//##############################################################################//

function deDuplication(neList){                     //元々は固有表現リストから位置情報を抽出する関数だったが、今は重複を削除するだけに成り下がった存在
  var loc = [];
  return new Promise (function(resolve, reject){
    for (var key in neList){
        loc.push(neList[key][0]);
    }
    result = loc.filter(function (x, i, self) {return self.indexOf(x) === i })

    resolve(result);
  });
}

//##############################################################################//

function googleAutoComplete(place) {
  return new Promise (function(resolve, reject){
    var appid = 'AIzaSyDqlDCQ6eiQ-EG8lDtHlmQ5Uhz1121wImk'
    const request = new XMLHttpRequest();
    request.open("GET", `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${place}&language=ja&key=${appid}&components=country:jp`);
    request.addEventListener("load", (event) => {
        if (event.target.status !== 200) {
            console.log(`${event.target.status}: ${event.target.statusText}`);
            return;
        }
        //console.log(event.target);
        resolve(JSON.parse(event.target.responseText))                                      //
    });
    request.addEventListener("error", () => {
        console.error("Network Error");
    });
    //request.setRequestHeader('Content-Type', 'application/xml');
    request.send();
  });
}

function googlePlaceDetail(placeID) {
  return new Promise (function(resolve, reject){
    var appid = 'AIzaSyDqlDCQ6eiQ-EG8lDtHlmQ5Uhz1121wImk'
    const request = new XMLHttpRequest();
    request.open("GET", `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeID}&key=${appid}`);
    request.addEventListener("load", (event) => {
        if (event.target.status !== 200) {
            console.log(`${event.target.status}: ${event.target.statusText}`);
            return;
        }
        //console.log(event.target);
        resolve(JSON.parse(event.target.responseText))                                      //
    });
    request.addEventListener("error", () => {
        console.error("Network Error");
    });
    //request.setRequestHeader('Content-Type', 'application/xml');
    request.send();
  });
}
