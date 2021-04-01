
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    let circlesHTML = circles.map( (circle) => {
			return `
				<div style="width: ${circle.radius * 2}px; height: ${circle.radius * 2}px; background-color: ${circle.color}; border-radius: ${circle.radius}px; margin: 0 auto;">
				</div>
      `
    });
		
		return `
		  <div style="width: 100%; margin: 0 auto;">
				${circlesHTML.join('')}
			</div>
		`

}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}