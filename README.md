# Live Project

## Introduction
The last two weeks of my time at the Tech Academy, I worked with other students in a team on Azure DevOps to create a lifestyle page. We were each tasked with creating a personal interest page to add to the site. I completed several [front end stories](#front-end-stories) front end stories and [back end stories](#back-end-stories) back end stories. It was a fantastic learning experience that allowed me to gain new [skills](#other-skills-learned) that will be ultilized constantly in the future. I am truly proud of the work I accomplished.  
  
Below are descriptions of the stories I worked on, along with code snippets and navigation links. I also have some full code files in this repo for the larger functionalities I implemented.





## Back End Stories
* [Back to the top button](#back-to-the-top-button)
* [Dark Mode Function](#dark-mode-function)
* [Axios API Function](#axios-api-function)



### Back to the top button

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

 
 ### Dark Mode Function

		const btn = document.querySelector('.btn-toggle');

		btn.addEventListener('click', function() {

		  document.body.classList.toggle('dark-theme');  
		})


### Axios API Function
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



*Jump to: [Front End Stories](#front-end-stories), [Back End Stories](#back-end-stories), [Other Skills](#other-skills-learned), [Page Top](#live-project)*


## Front End Stories
* [Carousel](#carousel)
* [Form](#form)

### Carousel

<!--Artist section carousel-->
      
    <div id="artists" class="jumbotron jumbotron-fluid edgetoedge ">
        <div class="container">
        <h1 class="display-4">Influential Synth Artists</h1>
        <p class="lead">Some noteable and influential artists that utilize the synthesizer</p>
        </div>
    </div>


    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./static/images/bjorkfix.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block synths">
            <h5>BJORK</h5>
            <p>Björk Guðmundsdóttir OTF is an Icelandic singer, songwriter, record producer, actress, and DJ. Over her four-decade career, she has developed an eclectic musical style that draws on a range of influences and genres spanning electronic, pop, experimental, trip hop, classical, and avant-garde music.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="./static/images/enofix.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block synths">
            <h5>BRIAN ENO</h5>
            <p>Brian Peter George St John le Baptiste de la Salle Eno RDI is an English musician, record producer, visual artist, and theorist best known for his work in ambient music and contributions to rock, pop and electronica.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="./static/images/jarre.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block synths">
            <h5>JEAN-MICHEL JARRE</h5>
            <p>Jean-Michel André Jarre is a French composer, performer and record producer. He is a pioneer in the electronic, ambient and new-age genres, and is known for organising outdoor spectacles featuring his music, vast laser displays, large projections and fireworks.</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

<!--END Artist section carousel;-->

### Form

<!--Sign up/modal-->
  <div id="signup" class="jumbotron jumbotron-fluid edgetoedge">
    <div class="container">
    <h1 class="display-4">Sign Up</h1>
    <p class="lead">Sign up with us to receive updates on the latest synthesizers!</p>
      <p class="lead">
        <button id="signupbutton" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Sign Up
        </button>
      </p>
    </div>
  </div>
  
  <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modalbackground darkmodalbackground">
    <div class="modal-content modalbackground darkmodalbackground">
      <div class="modal-header modalbackground darkmodalbackground">
        <h5 class="modal-title modalbackground darkmodalbackground" id="exampleModalLabel">Sign Up Form</h5>
        
      </div>
      <div class="modal-body modalbackground darkmodalbackground">
        <form action="example" method="POST">
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" class="form-control" id="exampleInputPassword1" name="firstName" required>
          </div>
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" class="form-control" id="exampleInputPassword1" name="lastName" required>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" required>  
          </div>
          <div class="form-group">
            <label for="contactNumber">Phone Number</label>
            <input type="text" class="form-control" id="exampleInputPassword1" name="phoneNumber" required>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" name="agree" required>
            <label class="form-check-label" for="exampleCheck1">I accept the Terms of Use & Privacy Policy</label>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" name="agreeEmail" required>
            <label class="form-check-label" for="exampleCheck1">I agree to receiving emails</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <small id="emailHelp" class="form-text modalpromise">We'll never share your info with anyone else.</small>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<!--end sing up-->



*Jump to: [Front End Stories](#front-end-stories), [Back End Stories](#back-end-stories), [Other Skills](#other-skills-learned), [Page Top](#live-project)*

## Other Skills Learned
* Experience working in a team setting on Azure DevOps
* Participating in daily stand ups
* How to complete the stories assigned to me as a part of a larger project
* How to correctly work with master code and how to push my local project and make pull requests. 
* How to work with a project director, accept critiques, and work for the greater good of the project.
  
*Jump to: [Front End Stories](#front-end-stories), [Back End Stories](#back-end-stories), [Other Skills](#other-skills-learned), [Page Top](#live-project)*
