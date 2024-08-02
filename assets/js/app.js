
let base_link = "https://image.tmdb.org/t/p/w500";

let color = (num) => {
	if(num > 7.5){
		return "bg-success";
	}else if(num < 7.5 && num > 5){
		return "bg-warning";
	}else{
		return "bg-danger";
	}
}

let movies = "";

for(let i = 0; i < movieArray.length; i++){
	movies += `<div class="col-md-4 mb-4">
					<div class="card b-radius">
						<figure class="movieCard b-radius mb-0">
							<img src="https://image.tmdb.org/t/p/w500${movieArray[i].poster_path}" alt="" title="">
							
							<figcaption class="movieTitle">
								<div class="row p-2">
									<div class="col-10">
										<h3>${movieArray[i].title}</h3>
									</div>
									<div class="col-2">
										<div class="rating align-self-center">
											<span class="${color(movieArray[i].vote_average)} p-2">${movieArray[i].vote_average}</span>
										</div>
									</div>
								</div>
							</figcaption>
							<div class="movieOverview p-2">
								<h4>${movieArray[i].title}</h4>
								<p>
									${movieArray[i].overview}
								</p>
							</div>
						</figure>
					</div>
				</div>`
	
}

document.getElementById("movies").innerHTML = movies;