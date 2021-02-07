import React from 'react'
import FileListItem from './FileListItem'

const FileList = ({ files }) => (
    <div className="file-list">
        {files.map(file =>
            <FileListItem key={file.id} file={file} />
        )}
    </div>
);

export default FileList;