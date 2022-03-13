const React = require("react");
const Default = require("./layouts/default");

function Index({ breads }) {
  return (
    <Default title={"title"}>
      <h2>Index Page</h2>
      {breads.map((bread, index) => {
        return (
          <li key={index}>
            <a href={`/breads/${index}`}>{bread.name}</a>
          </li>
        );
      })}
      <div className='newButton'>
        <a href='/breads/new'>
          <button>Add a new bread</button>
        </a>
      </div>
    </Default>
  );
}

module.exports = Index;