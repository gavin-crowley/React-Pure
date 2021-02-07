import React from 'react'

const CommitMessage = ({ commit }) => {
    return (
        <div className="commit-message">
            {commit.message}
        </div>
    );
}

export default CommitMessage;