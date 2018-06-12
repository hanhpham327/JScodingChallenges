
function create2dGrid(size){
    const grid=[];
    for (var i=0;i<grid.length;i++){
        grid.push()
        console.log(grid[i].join(' '))
        for (var k;i>0;i--){
            grid[i].push()        
        }   
    }
    
 
        // loop is to insert what the length of the array is based on the size parameter
        // when i is less than 0 we will return the grid
    return grid;
        
}
// printGrid(create2dGrid(5))

function createSpiral(n){
    // we will receive a range from 1 to infinity
    const spiral=create2dGrid(n);
    let currentNumber=1;
    // starts at one because all of the inputs in the given range of N starts from 1 to infinity
    let rowI=0;
    // rowI determines which row we are on
    let columnJ=0;
    // columnJ determines which column we are on
    let directionRow=0;
    // the spiral starts incrementing at row 0 
    let directionColumn=1;
    // the spiral starts with incrementing 1 column
    for(var k=currentNumber;k<=n*n;k++){
        spiral[rowI][columnJ]=k;
        // this adds 1 in the very top left corner
        // k will keep incrementing until one of the if condition is met
        if (columnJ+directionColumn===n||rowI+directionRow===n||columnJ+directionColumn===-1||spiral[rowI+directionRow][columnJ+directionColumn]){
        // columnJ+directionColumn===n condition doesn't let you go out of bounds(n+1 column position)
        // rowI+directionRow===n condition doesn't let you go out of bounds ( n+1 column position)
        // spiral[rowI+directionRow][columnJ+directionColumn] a position that you already seen before
            const placeholderDR=directionRow;
            // create a variable to store direction row
            directionRow=directionColumn;
            // this is the pattern when changing between column / row per direction
            // after moving one direction (i.e. the first direction of going right, we will change the direction row and direction column)
            directionColumn=-placeholderDR
            // this is the pattern when changing between column / row per direction
        }
        rowI+=directionRow;
        // change the value of directionRow when entered in the if statement
        columnJ+=directionColumn;
        // change the value of directionColumn when entered in the if statement
    }
    return spiral
}



printGrid(createSpiral(5))