function request(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.status === 200 && xhr.responseText === 4) {
      cb(err, xhr.responseText);
    } else {
      cb("error" + xhr.responseText);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function getData(err, data) {
  if (err) {
    console.log('GetData Error is :' + err);
  }
  var parse = JSON.parse(JSON.stringify(data));
  console.log(parse);
  var element = document.createElement('h1');
  element.innerHTML = parse.name;
  body.appendChild(element);
}

request('/users', getData);
