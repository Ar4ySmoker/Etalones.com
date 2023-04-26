"use strict";

mxmjq(function() {

	var jsonCoreParticles = {
		    "particles": {
				"number": {
					"value": 36,
					"density": {
						"enable": true,
						"value_area": 800
					}
				},
				"color": {
					"value": "#ffffff"
				},
				"shape": {
					"type": "circle",
					"stroke": {
						"width": 0,
						"color": "#ffffff"
					},
					"polygon": {
						"nb_sides": 5
					},
					"image": {
						"src": "img/github.svg",
						"width": 100,
						"height": 100
					}
				},
				"opacity": {
					"value": 0.38,
					"random": false,
					"anim": {
						"enable": false,
						"speed": 1,
						"opacity_min": 0.1,
						"sync": false
					}
				},
				"size": {
					"value": 4,
					"random": true,
					"anim": {
						"enable": false,
						"speed": 40,
						"size_min": 0.1,
						"sync": false
					}
				},
				"line_linked": {
					"enable": true,
					"distance": 150,
					"color": "#ffffff",
					"opacity": 0.2,
					"width": 1
				},
				"move": {
					"enable": true,
					"speed": 3,
					"direction": "none",
					"random": false,
					"straight": false,
					"out_mode": "out",
					"bounce": false,
					"attract": {
						"enable": false,
						"rotateX": 600,
						"rotateY": 1200
					}
				}
			},
			"interactivity": {
				"detect_on": "canvas",
				"events": {
					"onhover": {
						"enable": true,
						"mode": "grab"
					},
					"onclick": {
						"enable": true,
						"mode": "push"
					},
					"resize": true
				},
				"modes": {
					"grab": {
						"distance": 200,
						"line_linked": {
							"opacity": 0.6
						}
					},
					"bubble": {
						"distance": 400,
						"size": 40,
						"duration": 2,
						"opacity": 8,
						"speed": 3
					},
					"repulse": {
						"distance": 200,
						"duration": 0.4
					},
					"push": {
						"particles_nb": 4
					},
					"remove": {
						"particles_nb": 2
					}
				}
			},
			"retina_detect": true
		}

	
    /*==================================
    	Active Parallax Item
    ===================================*/    

	function activeParticlesJs() {		

		window.onload = function() {
			if(mxmjq("#particles-js--v1").length){
				particlesJS("particles-js--v1", jsonCoreParticles);	
			} 

			if(mxmjq("#particles-js--v2").length){
				particlesJS("particles-js--v2", jsonCoreParticles);	
			} 

			if(mxmjq("#particles-js--v3").length){
				particlesJS("particles-js--v3", jsonCoreParticles);
			} 			
			
		};

    }
     	
    
	activeParticlesJs();

});



