// Turn the raw text from a CSV into a more usable 
// form. View README.md for details and instructions. 


// Parse a string (text) to find fields and values
// Returns an array of objects
function parseCSV(text) {
  var
    i,
    j,
    data = [],
    keys,
    values,
    obj;
  
  // Split the text into lines and pull out the header values
  text = text.split('\n');
  keys = getCSVLine(text[0]);
  text.shift();
  
  // Create an object for each line of text
  for (i = 0; i < text.length; i++) {
    // Skip empty lines
    if (text[i].length === 0) { continue; }

    // Split the line into an array
    values = getCSVLine(text[i]);

    // Use lower case header values as keys and attach to object
    obj = {};
    for (j = 0; j < values.length; j++) {
      obj[keys[j].toLowerCase()] = values[j];
    }
    
    data.push(obj);
  }

  return data;
}

// Parse a line of text (line) from a CSV
// Returns an array of strings
function getCSVLine(line) {
  var
    i,
    firstInd,
    count = 0,
    fields = [];
  
  // Replace escaped quotes
  while (line.indexOf('""') !== -1) {
    line = line.replace('""', '&quot;');
  }
  
  // Convert string to array (text delimiters included)
  firstInd = 0;
  for (i = 0; i < line.length; i++) {
    if (line[i] === '"') { count++; }

    if (count%2 === 0
    && line[i] === ',') {
      fields.push(line.substring(firstInd, i));
      firstInd = i + 1;
    }
  }
  fields.push(line.substring(firstInd, i));
  
  for (i = 0; i < fields.length; i++) {
    // Strip string delimiter
    while (fields[i].indexOf('"') !== -1) {
      fields[i] = fields[i].replace('"', '');
    }

    // Replace double quotes
    while (fields[i].indexOf('&quot;') !== -1) {
      fields[i] = fields[i].replace('&quot;', '"');
    }
  }

  return fields;
}