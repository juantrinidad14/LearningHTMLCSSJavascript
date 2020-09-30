console.log(dishes)
let dishesListDiv = document.getElementById("dishesListDiv")
let courseTitle = document.getElementById("courseTitle")

// Defining the button for sorting//

let fullButton = document.getElementById("fullStartersButton")
let starterButton = document.getElementById("fullMenuButton")
let entreeButton = document.getElementById("fullEntreesButton")
let dessertButton = document.getElementById("fullDessertsButton")


// for(let index =0: index < dishes.lenth.length; index++)
//     let dishes = speakers[index]

// filter through the dishes and the course the matches the button that is being clicked//
// strictly = is ===
let getDishes = (course) => {
    if(course === 'Full Menu') {
        return dishes
    } else { 
        return dishes.filter((dish) => dish.course === course)

        }
}

/// Function to write to the page each time a button is clikced.  It will write the full menu when fullmenubutton is clicked it will write desert when fulldesertmenu button is clicked

let writeCourseToDOM = (course) => {
    
    let displayDishes = getDishes(course)

    let mapDishes = displayDishes.map(dish => {

        let dishDiv = 
        `
        <div class="courseDiv">
                        <div class="courseImg">
                            <img src="${dish.imageURL}" />
                        </div>
                        <div class="courseTitleDescrip">
                            <h2>${dish.title}</h2>
                            <p>${dish.description}</p>
                        </div>
                        <div class="coursePrice">
                            <p>\$${dish.price}</p>
                        </div>
                    </div>
         `
         return dishDiv
    } )

    // update the title

    courseTitle.innerHTML = course

    //write the course down

    dishesListDiv.innerHTML = mapDishes.join("")


}

writeCourseToDOM("Desserts")

// for full button

fullButton.addEventListener("click", function(){
    writeCourseToDOM("Starters")

})

//Need to finish eventlistner for each button that matches course example: desserts, starters,
// line 68 71 is the full button that display button when clicked so use that to complete the next button


starterButton.addEventListener("click", function(){
    writeCourseToDOM("Full Menu")

})

entreeButton.addEventListener("click", function(){
    writeCourseToDOM("Entrees")

})

dessertButton.addEventListener("click", function(){
    writeCourseToDOM("Desserts")

})



