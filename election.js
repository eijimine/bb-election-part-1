document.addEventListener("DOMContentLoaded", function() {

var candidates = document.getElementById('candidates');

  $.ajax({
    url:  'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'json'
  }).done(function(data) {
      data.candidates.forEach(function(d) {
        var li = document.createElement('li');
        var name = 'Name: '
        var vote = ' Votes: '
          li.append(name);
          li.append(d.name);
          li.append(vote);
          li.append(d.votes);
          candidates.append(li);
      });
  });



});
