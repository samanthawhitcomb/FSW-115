axios.get(" https://api.vschool.io/samiwhitcomb/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = response.data[i].title
            document.body.append(h1);
            (i == 0 ? h1.style.textDecoration = "line-through":
            h1.style.color ="purple")

            const h3 = document.createElement('h3')
            h3.textContent = response.data[i].description
            document.body.append(h3);

            const h4 = document.createElement('h4')
            h4.textContent = response.data[i].price
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
    // axios.get(" https://api.vschool.io/samiwhitcomb/todo/5e5c5d7bf468d266b6c88e5b")
    // .then(response => console.log(response.data))
    // .catch(error=> console.log(error))