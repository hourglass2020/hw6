import React, { useState } from 'react'

const NewContactForm = () => {
    const [fullname, setFullname] = useState("");
    const [city, setCity] = useState("");
    const [resume, setResume] = useState("");
    const [projectCount, setProjectCount] = useState("");
    const [messagesCount, setMessagesCount] = useState(0);
    const [viewsCount, setViewsCount] = useState(0);
    const [barColor, setBarColor] = useState("blue");

    return (
        <div className="titleBox container">
            <h2>Insert new contact</h2>
            <br />

            <form className="wrapper">
                <div>
                    <label>Fullname</label>
                    <input type="text" onChange={(e) => setFullname(e.target.value)}></input>
                </div>

                <div>
                    <label>City</label>
                    <input type="text" onChange={(e) => setCity(e.target.value)}></input>
                </div>

                <div>
                    <label>Projects Count</label>
                    <select onChange={(e) => {
                        setBarColor(e.target.value);
                    }}>
                        <option value="red">Red</option>
                        <option value="yellow">Yellow</option>
                        <option value="blue">Blue</option>
                    </select>
                </div>

                <div>
                    <label>Resume</label>
                    <textarea type="text" onChange={(e) => setResume(e.target.value)}></textarea>
                </div>

            </form>

        </div>
    );
}

export default NewContactForm;