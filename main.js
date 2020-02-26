
function getRepos(){
  let username = $('.user-input').val()
  fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.message === "Not Found"){
        alert("not a user name")
      } else {
      console.log(responseJson)
      repoRender(responseJson)
      }
    })
    .catch(error => console.log(error))
}

function onClick(){
  $('#username').submit(event => {
    event.preventDefault();
    getRepos();
  })
}

function repoRender(arr){
  $('.repos').empty();
  for (let i = 0; i < arr.length; i++){
    $('.repos').append(`<li><ul><li>Name: ${arr[i].full_name}</li><li>url: ${arr[i].url}</li></ul></li><br>`)
  }
}
onClick()