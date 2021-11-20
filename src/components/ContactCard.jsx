import React from 'react';


const ContactCard = (props) => {
    return (
        <div className="cardbox" >
            <div style={{ height: 2, background: props.barColor }}></div>
            <br />
            <img
                src={props.avatar}
                alt="Avatar"
                style={{ width: 100 }}
            />
            <div className="">
                <h4>{props.fullname}</h4>
                <h5>{props.city}</h5>
                <p style={{ fontSize: 17 }}>{props.resume}</p>
            </div>
            <div className="form-inline" style={{ justifyContent: 'center' }}>
                <div className="form-box" style={{ textAlign: 'center', width: 70 }}>
                    <h6>Projects</h6>
                    <p>250</p>
                </div>
                <div className="form-box" style={{ textAlign: 'center', width: 70 }}>
                    <h6>Views</h6>
                    <p>250</p>
                </div>
                <div className="form-box" style={{ textAlign: 'center', width: 70 }}>
                    <h6>Messages</h6>
                    <p>250</p>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;