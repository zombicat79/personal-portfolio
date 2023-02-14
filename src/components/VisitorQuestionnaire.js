import React, {useState} from 'react';

function VisitorQuestionnaire() {
    const [name, setName] = useState("");
    const [org, setOrg] = useState("");

    const handleInput = (event) => {
        const {id, value} = event.target;
        if (id === "name-input") {
            setName(value);
        } else {
            setOrg(value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Info submitted: ", name, " ", org)
    }
    
    return (
        <div className="questionnaire u-viewport-center">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="questionnaire__inputWrapper">
                    <label className="questionnaire__inputLabel">Your name:</label>
                    <input className="questionnaire__input" id="name-input" name="name-input" value={name} onChange={(e) => handleInput(e)} />
                </div>
                
                <div className="questionnaire__inputWrapper">
                    <label className="questionnaire__inputLabel">Your organization:</label>
                    <input className="questionnaire__input" id="org-input" name="org-input" value={org} onChange={(e) => handleInput(e)} />
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default VisitorQuestionnaire;