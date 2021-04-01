
function renderNametags(nametags) {

    let nametagsHTML = nametags.map( name => {
        return `
          <h1 style="color: white; background-color: blue; padding: 1rem;">
            Hello, my name is:
          </h1>
          <h2 style="padding: 3rem;">
            ${name}
          </h2>
        `;
    });

    return `
        <div style="text-align: center; width: 50%; margin: 0 auto;">
            <code>${nametagsHTML.join('')}</code>
        </div>
    `
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}