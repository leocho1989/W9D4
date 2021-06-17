const DomNodeCollection = require("./dom_node_collection");
const matches = document.querySelectorAll("div");


window.$l = (arg)=>{
    if (arg instanceof HTMLElement) { 
        return new DomNodeCollection(arg);}
};

