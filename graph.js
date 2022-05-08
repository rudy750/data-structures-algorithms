const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK']
];

//the graph
const adjacencyList = new Map();

//add node

function addNode(airport) {
  adjacencyList.set(airport, []);
}

//add edge, undirected
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

//create the graphs

airports.forEach(addNode);

routes.forEach((route) => addEdge(...route));

console.log(adjacencyList);

//bfs

function bfs(start) {
  //build a queue for the starting point of the search
  //from the starting node visit all the children until we find what we are looking for (airports here) continue in layers until found

  // in javascript this is represented as a queue in an array where the first item in is the first item out
  const queue = [start];
  //avoid visiting the same nodes this will keep track with Set . Basically an array with only unique values
  const visited = new Set();
  //while it has item grab the first item with shift
  while (queue.length > 0) {
    const airport = queue.shift(); //mutates the queue by removing the first item
    const destinations = adjacencyList.get(airport); //grab all the edges for the node
    for (const destination of destinations) {
      if (destination === 'BKK') console.log('Found It');
      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        console.log(destination);
      }
    }
  }
}

bfs('PHX');

function dfs(start, visited = new Set()) {
  visited.add(start);
  const destinations = adjacencyList.get(start);
  for (const destination of destinations) {
    if (destination === 'BKK') {
      console.log(`DFS found Bangkok`);
      return;
    }
    if (!visited.has(destination)) {
      dfs(destination, visited);
    }
  }
}

dfs('PHX');
