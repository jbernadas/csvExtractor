=============
CSV EXTRACTOR
=============

This is a CSV extractor that converts data to HTML. It uses D3.csv to first convert comma-separated values into an object literal, then iterates through to extract data. 

To use it, make sure you have the below source before the closing body tag of your index.html file.
::
  <script src='https://d3js.org/d3.v4.min.js'></script>

You can change the object literal indexes by going into js folder and editing the extractor.js of the for loop.

If you encounter non-UTF character in your output, you may need to save your CSV file in UTF. You can do this in Notepad by simply saving it as a UTF encoded document.
