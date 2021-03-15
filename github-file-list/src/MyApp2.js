import React from 'react'
import './index.css'
import Time from './Time';

const FileList = ({ files }) => (
    <table className="file-list">
        <tbody>
            {files.map(file =>
                <FileListItem key={file.id} file={file} />
            )}
        </tbody>
    </table>
);



const FileListItem = ({ file }) => (
    <tr className="file-list-item">
        <FileName file={file} />
        <CommitMessage commit={file.latestCommit} />
        <td className="age">
            <Time time={file.updated_at} />
        </td>
    </tr>
);



function FileIcon({ file }) {
    let icon = 'fa-file-text-o';
    if (file.type === 'folder') {
        icon = 'fa-folder';
    }
    return (
        <td className="file-icon">
            <i className={`fa ${icon}`} />
        </td>
    );
}



function FileName({ file }) {
    return (
        <React.Fragment>
            <FileIcon file={file} />
            <td className="file-name">
                {file.name}
            </td>
        </React.Fragment>
    );
}



function CommitMessage({ commit }) {
    return (
        <td className="commit-message">
            {commit.message}
        </td>
    );
}


function App() {
    return <FileList files={testFiles} />
}

const testFiles = [
    {
        id: 10,
        name: 'src',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },
    {
        id: 11,
        name: 'tests',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },
    {
        id: 12,
        name: 'README',
        type: 'file',
        updated_at: "2016-07-18 21:24:00",
        latestCommit: {
            message: 'Added a readme'
        }
    },
];

export default App


