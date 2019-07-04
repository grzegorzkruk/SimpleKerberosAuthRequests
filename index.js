'use strict'

function getUser() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:51407/auth/getuser', true);
  xhr.withCredentials = true;
  xhr.send()
}

function save() {
  const xhr = new XMLHttpRequest();
  const data = {
    Id: 1,
    Name: 'user',
    IsTrue: false,
    CreatedOn: new Date()
  }
  xhr.open('POST', 'http://localhost:51407/data/save', true);
  xhr.withCredentials = true;
  xhr.setRequestHeader('Content-type', 'application/json, charset=utf-8')
  xhr.onload = function () {
    const response = JSON.parse(xhr.responseText)
    console.log(response)
  }
  xhr.send(JSON.stringify(data))
}

$(document).ready(function() {
  const button = $('#get-user');
  button.click(() => {
    getUser()
  })

  const saveBttn = $('#save-bttn');
  saveBttn.click(save)
})
