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

function getData(err, data) {
  if (err) {
    console.log('GetData Error is :' + err);
  }
  var parse = JSON.parse(data);
  for(var i =0; i<parse.length; i++){ 
    var title = parse[i].title;
    var description = parse[i].description;
    var date = parse[i].dt;
    date = date.split('T')[0];
    var name = parse[i].name;

    var element = document.createElement('span');
    element.className = 'event';
    var details = document.createElement('DETAILS');
    var summary = document.createElement('SUMMARY');
    details.textContent = description;
    summary.textContent = title;
    details.appendChild(summary);

    element.appendChild(details);
    element.innerHTML +=  date + " " + "--->" + name;
    
    document.querySelector('#container').appendChild(element);

  }
}
request('/users', getData);
