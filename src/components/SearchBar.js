import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment container" style={{ marginTop: "10px" }}>
        {
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <label>Image Search</label>
              <input
                text="search bar"
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
            </div>
          </form>
        }
      </div>
    );
  }
}

export default SearchBar;

// functional variant of the code above

// function searchBar(props){

//   const [term,setTerms]=React.useState("");
//   onFormSubmit = (event) => {
//     event.preventDefault();
//     props.onSubmit(term);
//   };

//   render() {
//     return (
//       <div className="ui segment container" style={{ marginTop: "10px" }}>
//         {
//           <form className="ui form" onSubmit={onFormSubmit}>
//             <div className="field">
//               <label>Image Search</label>
//               <input
//                 text="search bar"
//                 value={this.state.term}
//                 onChange={(e) => setTerm(e.target.value) }
//               />
//             </div>
//           </form>
//         }
//       </div>
//     );
//   }
// }
