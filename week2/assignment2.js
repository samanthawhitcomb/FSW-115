const obj = {
    "response_code": 0,
    "results": [
        {
            "category": "Science & Nature",
            "type": "multiple",
            "difficulty": "easy",
            "question": "How many planets are in our Solar System?",
            "correct_answer": "Eight",
            "incorrect_answers": [
                "Nine",
                "Seven",
                "Ten"
            ]
        },
        {
            "category": "Politics",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which president erased the national debt of the United States?",
            "correct_answer": "Andrew Jackson",
            "incorrect_answers": [
                "Ronald Reagan",
                "John F. Kennedy",
                "Franklin Roosevelt"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which of these is NOT the name of an album released by American rapper Viper?",
            "correct_answer": "The Life of Pablo",
            "incorrect_answers": [
                "Kill Urself My Man",
                "You&#039;ll Cowards Don&#039;t Even Smoke Crack",
                "Yo Wife Handcuffin&#039; Me"
            ]
        }
    ]
}
// var list = document.createElement("ul")
// document.body.append(list)

// // var listItem = document.createElement("li")
// // listItem.map(obj) 
// // list.append(listItem)

// var listItem = document.createElement("li")
// listItem.map(obj) 
// list.append(listItem)

// var newObj = JSON.parse(obj);
// document.getElementById("demo").innerHTML = objNew;

// var newObj = JSON.stringify(obj)
// var list = newObj.map(newObj => {
//     newObj.push(newObj.results)
// })
// document.getElementById("demo").innerHTML = list;
// document.getElementById("demo").innerHTML = newObj;

// function getQuestions(item) {
//     let q = [item.question];
//     return q;
// };
// question = obj.results.map(getQuestions);
//     for(i = 0; i < question.length; i++) {
//     let addQuestions = document.getElementById("question");
//     let li = document.createElement("li");
//     li.textContent = question[i];
//     addQuestions.append(li)};


    // function getQuestion(item) {
    //     var question = [item.results];
    //     return question;
    //   }
      
    //   function myFunction() {
    //     document.getElementById("demo").innerHTML = obj.map(getQuestion);
    //   }
//ctrl+D(to select all objects at the same time)
// var newArr = ["Sience & Nature", "Politics", "Entertainment: Music"]

var list = document.createElement("ul")
document.body.append(list)
    for (var i = 0; i < obj.results.length; i++){
        var li = document.createElement("li");
        li.textContent = obj.results[i].question;
        list.append(li);
    }
