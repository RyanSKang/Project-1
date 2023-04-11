fetch('https://api.spoonacular.com/recipes/random?number=1&apiKey=cd4c0f4ddc2742f3896e1fd0b89f3017')
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(data => {
        console.log(data.recipes[0])
        const dishDiv = $("#DishOfTheWeek")
        const imageUrl = data.recipes[0].image
        console.log(imageUrl)
        const dishTitle = data.recipes[0].title
        const dishUrl = data.recipes[0].sourceUrl
        const dishImage = $("<img>")
        dishImage.attr("src", imageUrl)
        const Title = $("<h4>")
        Title.attr("class", "dishTitle")
        Title.text(dishTitle)
        const link = $("<a>")
        link.attr("href", dishUrl)
        link.text("Go to Recipe")
        dishDiv.append(dishImage)
        dishDiv.append(Title)
        dishDiv.append(link)

    })
    .catch(err => console.error(err));





