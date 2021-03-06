import React from 'react';
import TweetBox from '../tweets/tweet_box';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tweets: []
        }
    }

    componentWillMount() {
        // console.log(this.props.currentUser.id)
        this.props.fetchUserTweets(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({ tweets: newState.tweets });
    }

    render() {
        if (this.state.tweets.length === 0) {
            return (<div>This user has no Tw@%#ts</div>)
        } else {
            return (
                <div>
                    <h2>All of This User's Tw@%#ts</h2>
                    {this.state.tweets.map(tweet => (
                        <TweetBox key={tweet._id} text={tweet.text} user={this.props.currentUser.handle}/>
                    ))}
                </div>
            );
        }
    }
}

export default Profile;
