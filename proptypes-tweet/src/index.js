import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import moment from 'moment'
import PropTypes from 'prop-types'


function Avatar({ hash }) {
    const url = `https://www.gravatar.com/avatar/${hash}`;
    return (
        <img
            src={url}
            className="avatar"
            alt="avatar"
        />
    );
}

function Message({ text }) {
    return (
        <div className="message">
            {text}
        </div>
    );
}

function Author({ author }) {
    const { name, handle } = author;
    return (
        <span className="author">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    );
}

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">
            {timeString}
        </span>
    );
};

const ReplyButton = () => (
    <i className="fa fa-reply reply-button" />
);

// function Count({ count }) {
//     if (count > 0) {
//         return (
//             <span className="retweet-count">
//                 {count}
//             </span>
//         );
//     } else {
//         return null;
//     }
// }

function getRetweetCount(count) {
    if (count > 0) {
        return (
            <span className="retweet-count">
                {count}
            </span>
        );
    } else {
        return null;
    }
}
const RetweetButton = ({ count }) => (
    <span className="retweet-button">
        <i className="fa fa-retweet" />
        {getRetweetCount(count)}
        {/* <Count count={count} /> */}

    </span>
);

const LikeButton = ({ count }) => (
    <span className="like-button">
        <i className="fa fa-heart" />
        {count > 0 &&
            <span className="like-count">
                {count}
            </span>}
    </span>
);

// const LikeButton = ({ count }) => (
//     <span className="like-button">
//         <i className="fa fa-heart" />
//         <span className="like-count">
//             {count ? count : null}
//         </span>
//     </span>
// );

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button" />
);

function Tweet({ tweet }) {
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar} />
            <div className="content">
                <Author author={tweet.author} /><Time time={tweet.timestamp} />
                <Message text={tweet.message} />
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton count={tweet.retweets} />
                    <LikeButton count={tweet.likes} />
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    );
}

const testTweet = {
    // message: 22,
    message: "Something about cats.",
    gravatar: "3c76215a8eecd571601b122a4f1ede2b",
    author: {
        handle: "catperson",
        name: "Gavin C"
    },
    likes: 2,
    retweets: 24,
    // timestamp: 13
    timestamp: "2016-07-30 21:24:37"
}

LikeButton.propTypes = {
    count: PropTypes.number
};
RetweetButton.propTypes = {
    count: PropTypes.number
};
Time.propTypes = {
    time: PropTypes.string
};
Message.propTypes = {
    text: PropTypes.string
};
Author.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired
    }).isRequired
};
Avatar.propTypes = {
    hash: PropTypes.string
};
// Tweet.propTypes = {
//     tweet: PropTypes.shape({
//         message: PropTypes.string.isRequired,
//         gravatar: PropTypes.string.isRequired
//     }).isRequired
// }


ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector('#root'))
