import React from "react";


const ChildComponent = (props) => {

    return (
        <div className="child">
            <h2>Child Component</h2>
            <button onClick={props.ClickHandel}>Show Module</button>
            {
                props.showModal && (
                    <div>
                        <h3>Modal Content</h3>
                        <p>This is the modal content.</p>
                    </div>

                )
            }
        </div>
    );
}

export default ChildComponent;