const React = require("react");
const Default = require("./layout/default");

function Index({ breads }) {
  return (
    <Default title={'title'}>
      <h2>Index Page</h2>
      {breads.map((bread, index) => {
        return (
          <li key={index}>
            <a href={`/breads/${index}`}>{bread.name}</a>
          </li>
        );
      })}
    </Default>
  );
}

module.exports = Index;