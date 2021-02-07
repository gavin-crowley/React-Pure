import React from 'react'
import './index.css'
import Time from './Time';

const FileList = ({ files }) => (
  <div className="file-list">
    {files.map(file =>
      <FileListItem key={file.id} file={file} />
    )}
  </div>
);



const FileListItem = ({ file }) => (
  <div className="file-list-item">
    <FileName file={file} />
    <CommitMessage commit={file.latestCommit} />
    <div className="age">
      <Time time={file.updated_at} />
    </div>
  </div>
);



function FileIcon({ file }) {
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



function FileName({ file }) {
  return (
    <React.Fragment>
      <div className="file-name">
        <FileIcon file={file} />
        {file.name}
      </div>
    </React.Fragment>
  );
}



function CommitMessage({ commit }) {
  return (
    <div className="commit-message">
      {commit.message}
    </div>
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


