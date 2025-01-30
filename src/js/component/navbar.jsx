import React from "react"
function Navbar() {
	return (    
		<nav class="navbar bg-dark navbar-expand-lg" data-bs-theme="dark">
		<div class="container-fluid">
		  <a class="navbar-brand ms-3" href="#">START BOOSTRAP</a>
		  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav ms-auto me-3">
			  <li class="nav-item">
				<a class="nav-link active" aria-current="page" href="#">Home</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="#">About</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="#">Services</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="#">Contact</a>
			  </li>
			</ul>
		  </div>
		</div>
	  </nav>
	);
  }

export default Navbar;