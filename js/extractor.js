// Leverages d3.js' csv extracting capabilities. For more info: https://d3-wiki.readthedocs.io/zh_CN/master/CSV/

// Pass the path to our target CSV document
d3.csv("../27th_Annual_TAC_Sessions.csv", function(data){
  // Sets the target div id
  let outputDiv = document.getElementById('output');
  // Initialize empty variable for storing all formatted info
  let textOutput = '';
  // Iterate through the CSV data, gleaning only what we need to print and formatting it at the same time
  for (let i = 0; i < data.length; i++) {
    // Append to textOutput - if data[i][string] is empty ? return empty else list item
    textOutput += data[i]['Lead Presenter Name'] === '' ? '' : '<div class="presenter-row">';
    textOutput += data[i]['Lead Presenter Name'] === '' ? '' : '<h3 class="presenter-name">' + data[i]['Lead Presenter Name'] + '</h3>';
    textOutput += data[i]['Presentation Title'] === '' ? '' : '<h4 class="session-title">'+ data[i]['Presentation Title'] +'</h4>';
    textOutput += data[i]['Presentation Description (100 words or less)  This information will appear in the conference program, and MUST be free of grammar and spelling errors.'] === '' ? '' : '<p class="session-description">' + data[i]['Presentation Description (100 words or less)  This information will appear in the conference program, and MUST be free of grammar and spelling errors.'] + '</p>';
    textOutput += data[i]['Lead Presenter Name'] === '' ? '' : '</div>';
  }
  // Showtime
  outputDiv.innerHTML = textOutput;
});
