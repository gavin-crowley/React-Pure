import React from 'react'
import './index.css'

const FileList = ({ files }) => (
  <table className="file-list" >
    <tbody>
      {files.map(file => (
        <FileListItem key={file.id} file={file} />
      ))}
    </tbody>
  </table >
)

const FileListItem = ({ file }) => (
  <tr className="file-list-name">
    <FileName file={file.name} />
  </tr>
)

const FileName = ({ file }) => (
  <td className="file-name">{file.name}</td>
)

// const FileIcon = () => (

// )

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


