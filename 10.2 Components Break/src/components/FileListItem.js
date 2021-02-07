import React from 'react'
import FileName from './FileName'
import CommitMessage from './CommitMessage'
import Time from '../Time'

const FileListItem = ({ file }) => (
    <div className="file-list-item">
        <FileName file={file} />
        <CommitMessage commit={file.latestCommit} />
        <div className="age">
            <Time time={file.updated_at} />
        </div>
    </div>
);

export default FileListItem;