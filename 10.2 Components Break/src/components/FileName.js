import React from 'react'
import FileIcon from './FileIcon'

const FileName = ({ file }) => {
    return (
        <React.Fragment>
            <div className="file-name">
                <FileIcon file={file} />
                {file.name}
            </div>
        </React.Fragment>
    );
}

export default FileName;