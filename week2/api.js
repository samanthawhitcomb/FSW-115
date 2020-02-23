const obj = `{
    "results": [
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who wrote the musical composition, &quot;Rhapsody In Blue&quot;?",
            "correct_answer": "George Gershwin",
            "incorrect_answers": [
                "Irving Berlin",
                "Duke Ellington",
                "Johnny Mandel"
            ]
        },
        {
            "category": "Science: Mathematics",
            "type": "boolean",
            "difficulty": "medium",
            "question": "111,111,111 x 111,111,111 = 12,345,678,987,654,321",
            "correct_answer": "True",
            "incorrect_answers": [
                "False"
            ]
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What name was historically used for the Turkish city currently known as Istanbul?",
            "correct_answer": "Constaninople",
            "incorrect_answers": [
                "H&uuml;davendigar",
                "S&ouml;ğ&uuml;t",
                "Adrianople"
            ]
        },
        {
            "category": "Entertainment: Comics",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In Pre-Super Genesis universe of &quot;Sonic the Hedgehog&quot; comic, what was the name of  Sally Acorn&#039;s brother?",
            "correct_answer": "Elias Acorn",
            "incorrect_answers": [
                "Maximillian Acorn",
                "Alexis Acorn",
                "Frederick Acorn"
            ]
        },
        {
            "category": "Entertainment: Comics",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who created Ultron of Earth-616?",
            "correct_answer": "Henry Pym",
            "incorrect_answers": [
                "Amadeus Cho",
                "Tony Stark",
                "Reed Richards"
            ]
        }
    ]
}`
console.log(JSON.parse(obj))