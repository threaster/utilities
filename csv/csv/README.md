# CSV Utility
Some simple CSV parsing logic for JavaScript.

### Description
Input a string and get back an array. This function will convert your CSV text into an array of objects where each object represents a line from the CSV.

Convert this:
```
//       |----------|----------|----------|
// row 1 |  Field1  |  Field2  |  Field3  |
//       |----------|----------|----------|
// row 2 |     a    |     b    |     c    |
// row 3 |     x    |     y    |     z    |
//       |--------------------------------|
```

Into this:
```
[
  {
    field1:a,
    field2:b,
    field3:c
  },
  {
    field1:x,
    field2:y,
    field3:z
  }
]
```

### How to Use
Feed the raw text from a CSV into parseCSV. This function will parse the string into an array of objects, where each object represents a line of the CSV.

##### Example
```
var 
  text    = 'Field1,Field2,Field3\na,b,c\nx,y,z',
  parsed  = parseCSV(text);

console.log(parsed);
// Array [ Object, Object ]

console.log(parsed[0]);
// Object { field1: "a", field2: "b", field3: "c" }
```

### Requirements
1. The CSV is comma `,` separated.
2. Text is delimited by double quotes `"`.
3. Lines are delimited by the newline character `\n`.
4. The first line of the CSV is a header line.

### Caveats
1. The HTML entity `&quot;` will be replaced by a double quote `"`.
2. The text in the header will be used as object attribute names.

### Further Work
There are plans to make this code a little more flexible in the future. These plans include making the following modifications:

1. Add support for CSVs without a header line
2. Allow custom delimiters
3. Refactor to use better attribute naming convention