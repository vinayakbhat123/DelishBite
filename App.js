const newEle = React.createElement(             // newEle is an object yet 
    "div", 
    {id:"parent"},[           //  attribute       
    React.createElement(
        "div",
        {id:"child1"},[
        React.createElement("h1",{},"This is an child1 html tag"),
        React.createElement("h2",{},"This is an  child1 h2 tag")
    ]),
     React.createElement(
        "div",
        {id:"child2"},[
        React.createElement("h1",{},"This is an chid2 html tag"),
        React.createElement("h2",{},"This is an  child2 h2 tag")
    ])
]
);   //children 

console.log(newEle);   // object
const root = ReactDOM.createRoot(document.getElementById("root"));        
root.render(newEle);