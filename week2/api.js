 var newP = `{
    "response_code": 0,
    "results": [
        {
            "category": "Animals",
            "type": "boolean",
            "difficulty": "easy",
            "question": "Kangaroos keep food in their pouches next to their children.",
            "correct_answer": "False",
            "incorrect_answers": [
                "True"
            ]
        },
        {
            "category": "Animals",
            "type": "boolean",
            "difficulty": "easy",
            "question": "A bear does NOT defecate during hibernation. ",
            "correct_answer": "True",
            "incorrect_answers": [
                "False"
            ]
        },
        {
            "category": "Animals",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What is Grumpy Cat&#039;s real name?",
            "correct_answer": "Tardar Sauce",
            "incorrect_answers": [
                "Sauce",
                "Minnie",
                "Broccoli"
            ]
        }
    ]
}`


var obj = JSON.stringify(newP)
document.body.innerHTML = obj

// wanted to try and use JSON.parse() but couldnt seem to get it to Work.
// var obj = JSON.parse(newP)
// document.body.innerHTML = obj