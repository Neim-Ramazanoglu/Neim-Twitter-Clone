import React, { Component } from 'react';
import { Tweet } from '../tweet';

 
class TweetList extends Component {
    constructor(props) {
        super(props);
      }
      render() {
    return (
        <div>
            {
                this.props.tweets.map((tweet, index) => (
                    <Tweet key={index} {...tweet} />
                ))
            }
        </div>
    );
   }
}

export default TweetList;