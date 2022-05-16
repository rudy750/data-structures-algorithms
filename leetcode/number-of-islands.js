//this really helped https://www.youtube.com/watch?v=cFnUDdi6DeE

const numIslands = (grid) => {
  let islands = 0; //this will hold the island count
  for (let i = 0; i < grid.length; i++) {
    //we loop over the outer array (it contains other arrays in it forming a grid)
    for (let j = 0; j < grid[i].length; j++) {
      //loop throuch each element in the inner array
      islands += getIsland(grid, i, j); //pass the array to a recursive function that will count all the related nodes
    }
  }
  return islands;
};

const getIsland = (grid, i, j) => {
  //check of the boundaries to see if we reached the end return 0 if true
  if (
    i < 0 || //this means that we went outside of the index of the array (it would be -1)
    i >= grid.length || //we reached the bottom of the array that countains the arrays in it
    j < 0 || // we went past the index
    j >= grid[i].length || //we got to the end of the array
    +grid[i][j] == 0 //we are at a 0 (water) so we left land * the + in +grid[i][j] changes the string to an int
  )
    return 0;

  grid[i][j] = 0;

  getIsland(grid, i + 1, j);
  getIsland(grid, i - 1, j);
  getIsland(grid, i, j + 1);
  getIsland(grid, i, j - 1);

  return 1;
};

console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
  ])
);

console.log(
  numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
  ])
);
