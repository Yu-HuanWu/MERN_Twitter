import React from 'react';
import { withRouter } from 'react-router-dom';
import TweetBox from './tweet_box';

class Tweet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tweets: []
        }
    }

    componentWillMount() {
        this.props.fetchTweets();
    }

    componentWillReceiveProps(newState) {
        this.setState({ tweets: newState.tweets });
    }

    render() {
        if (this.state.tweets.length === 0) {
            return (<div>There are no Tw@%#ts</div>)
        } else {
            return (
                <div>
                    <h2>All Tw@%#ts</h2>
                    {this.state.tweets.map(tweet => 
                        (
                        <TweetBox key={tweet._id} text={tweet.text} user={tweet.user}/>
                    ))}
                </div>
            );
        }
    }
}

export default withRouter(Tweet);