/* A satellite image of the Pacific Ocean consists of green and blue pixels, representing land and water. The Pacific ocean is large, and mostly blue; but contains islands, which are green. Islands themselves may contain blue pixels, which are lakes.
A frontend presents the image to a user, who can click on it. When the user clicks on a green pixel, a popup will appear that displays the number of lakes in that island. This UI code already exists: the problem of this question is to write the backend function that will return the value to display.
As an example, consider an image (20 pixels wide by 8 tall) that is mostly blue; but contains 3 green rectangles:
• On the left of the image there is a horizontal line of three green pixels, from coordinates (2, 2) to (4, 2). This is an island with no lakes
• In the middle is a 3×3 square of green pixels (coordinates (5, 4) to (7, 6)) where the center pixel (6, 5) is water. This is an island with 1 lake
• On the right is a green rectangle (coordinates (11, 3) to (16, 5)) where three internal pixels are water: (12, 4), (14, 4), and (15, 4). This forms an island with two lakes

Here's a plain text version of this table that can be pasted into the Virtual Interview doc:
11 11 1 1 1 1 1 1
01234567890123456789
2
..xxx
Assuming a function, count lakes (image, coord) -› integer:
• count lakes (image, (2, 2)) - 0
• count lakes (image, (6,6)) -> 1
• count_lakes (image, (12,5)) -> 2

Ideas: 
  -go right and down to find rec size

*/