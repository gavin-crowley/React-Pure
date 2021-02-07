import React from 'react'
import './index.css'
import Time from './Time'

const FileList = ({ files }) => {
    return (
        <table class="file-list">
            <tbody>
                {files.map((file) =>
                    <FileListItem key={file.id} file={file} />
                )}
            </tbody>
        </table>
    );
}

const FileListItem = ({ file }) => {
    return (
        <tr class="file-list-item">
            <FileIcon file={file} />
            <FileName file={file} />
            <CommitMessage file={file} />
            <Time file={file} />
        </tr>
    );
}

const FileIcon = ({ file }) => {
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

const FileName = ({ file }) => {
    return (
        <td class="file-name">
            {file.name}
        </td>
    );
}

const CommitMessage = ({ file }) => {
    return (
        <td class="commit-message">
            {file.latestCommit.message}
        </td>
    );
}

const MyApp = () => {
    return (
        <FileList files={testFiles} />
    );
}

export default MyApp;

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