# fasttablesort
Client script function to sort a table by 4 groupings as fast as possible - plain javascript only

User case: a table of data is built up with a string value that contains a location.  The location string is static in length and format.
Location string has been converted into numbers for sorting comparison. 

Current Issue:  While I can sort on 3 groupings, I need to add a fourth and fifth element to the sort while maintaining speed.  
I would also like to avoid continuing loops and mutliple nested if statements, but I don't believe there is a way around that.
