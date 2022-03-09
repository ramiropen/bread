const React = require('react')
const Default = require('./layouts/Default')

// function Index () {
//     return (
//       <Default>
//         <h2>Index Page</h2>
//       </Default>
//     )
// }

// module.exports = Index
// -----------------------------------

function Index ({breads})  {
    return (
      <Default>
        <h2>Index Page</h2>
        <p>I have {breads[0].name} bread!</p>
      </Default>
    )
}

// {
//     breads.map((bread, index)=> {
//       return (
//         <li key={index}>
//           {bread.name}
//         </li>
//       )
//     })
//   }
// ----------------------------------

{
    breads.map((bread, index)=> {
      return (
        <li key={index}>
          <a href={`/breads/${index}`}>
            {bread.name}
          </a>
        </li>
      )
    })
  }