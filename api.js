const button1 = document.getElementById("sam");
button1.style.fontSize = "100px"
button1.style.margin = "50px"
button1.style.backgroundColor = "blue"
button1.style.padding = "15px"
button1.addEventListener("click", function(){

axios.get("https://api.vschool.io/samwhitcomb/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = response.data[i].title
            document.body.append(h1);
            (i == 0 ? h1.style.color = "red":
            i === 1 ? h1.style.color ="pink":
            h1.style.color = "violet")

            const h4 = document.createElement('h4')
            h4.textContent = "$" + response.data[i].price
            document.body.append(h4);

            const p = document.createElement('p')
            p.textContent = response.data[i].completed
            document.body.append(p);

            const img = document.createElement('img')
            img.src = response.data[i].imgUrl
            document.body.append(img)
        }
    })
    .catch(error=> console.log(error))
})
const button2 = document.getElementById("samantha");
button2.style.fontSize ="100px"
button2.style.margin = "10px"
button2.style.backgroundColor = "yellow"
button2.style.marginLeft = "100px"

// button1.textContent = "My First list";
button2.addEventListener("click", function(){

axios.get("https://api.vschool.io/samanthawhitcomb/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = response.data[i].title
            document.body.append(h1);
            h1.style.color ="purple"
            h1.style.textAlign = "center"

            const h3 = document.createElement('h3')
            h3.textContent = response.data[i].description
            document.body.append(h3);
            h3.style.color = "green"
            h3.style.textAlign = "center"

            const h4 = document.createElement('h4')
            h4.textContent = "$" + response.data[i].price
            document.body.append(h4);
            h4.style.color = "blue"
            h4.style.textAlign = "center"

            const p = document.createElement('p')
            p.textContent = response.data[i].completed
            document.body.append(p);
            p.style.textAlign = "center"

            const img = document.createElement('img')
            img.src = response.data[i].imgUrl
            document.body.append(img)
        }
    })
    .catch(error=> console.log(error))
})
document.body.style.backgroundColor = "grey"