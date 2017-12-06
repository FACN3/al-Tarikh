function request(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.status === 200 && xhr.readyState === 4) {
      cb(null, xhr.responseText);
    } else if(xhr.status === 302 && xhr.readyState === 4){
       cb(null, xhr.responseText);
    }else if(xhr.readyState === 4){
      cb('err' + xhr.responseText);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function getData(err, ndata) {
  if (err) {
    console.log('GetData Error is :' + err);
  }
  var parse = JSON.parse(JSON.stringify(ndata));
  var element = document.createElement('h1');
  element.innerHTML = parse;
  document.querySelector('#container').appendChild(element);
}
request('/users', getData);
