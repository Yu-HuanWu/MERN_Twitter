import React from 'react';

class TweetBox extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.text}</h3>
                <h4>by {this.props.user}</h4>
            </div>
        );
    }
}

export default TweetBox;