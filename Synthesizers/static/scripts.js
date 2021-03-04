//dynamic footer date
document.getElementById("year").innerHTML = new Date().getFullYear();


//back to top button
mybutton = document.getElementById("myBtn");


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
  
  if (document.body.scrollTop > screen.height || document.documentElement.scrollTop > screen.height) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


//dark mode function

const btn = document.querySelector('.btn-toggle');


btn.addEventListener('click', function() {
  
  document.body.classList.toggle('dark-theme');  
})


//axios Api

function getSongs() {
  
  var obj = document.getElementById("mySelect").value;

  var options = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/search',
  params: {term: obj},
  headers: {
    'x-rapidapi-key': 'ApiKey',
    'x-rapidapi-host': 'shazam.p.rapidapi.com'
  }
};

var all_titles = []

axios.request(options).then(function (response) {
	console.log(response.data);

  //breaking down the api response to just songs
  var all_data = response.data;
  var all_tracks = all_data.tracks.hits;

  function get_track_names(tracks) {
    var track_names = [];
    for (var i = 0; i < tracks.length; i++) {
      track_names.push(tracks[i].track.title);
    }
    return track_names;
  };
  
  all_titles = get_track_names(all_tracks);
  console.log(all_titles);

  //printing data as a list
  document.getElementById("display").innerHTML = "<li>"+all_titles[0]+"</li>"+ "<li>"+all_titles[1]+"</li>"+ "<li>"+all_titles[2]+"</li>"+ "<li>"+all_titles[3]+"</li>" ;
  

}).catch(function (error) {
	console.error(error);
});

}





