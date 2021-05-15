import React from 'react';

class Input extends React.Component {

    render() {
        return (
            <div className="field">
                <label for="videos">Video Search</label>
                <input
                    id="videos"
                    name="videos"
                    type="text"
                />
            </div>
        );
    }
}
export default Input;