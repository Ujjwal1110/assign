import nav from "./components/navbar.js";
document.getElementById("navbar").innerHTML=nav();


// const url ="https://www.themealdb.com/api.php?ref=apilist.fun";
    let url = `https://masai-mock-api.herokuapp.com/coffee/menu`;
    const getData = async () =>{
    const api =await fetch (url)
    const data1 =await api.json();
    appendData(data1.menu.data);
    };
    const appendData = (data) => {
        document.getElementById("container").innerHTML="";
        data.forEach((coffee) => {
       const title=document.createElement("h2");
       const img =document.createElement("img");
       const div = document.createElement("div");
       title.textContent=coffee.title;
       img.src=coffee.image;
       div.setAttribute("class", "coffee_div");
       div.append(title, img);
       document.querySelector("#container").append(div);
        });
    }
    getData();

    