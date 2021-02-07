import React from 'react'

const FileIcon = ({ file }) => {
    let icon = 'fa-file-text-o';
    if (file.type === 'folder') {
        icon = 'fa-folder';
    }
    return (
        <span className="file-icon">
            <i className={`fa ${icon}`} />
        </span>
    );
}

export default FileIcon;