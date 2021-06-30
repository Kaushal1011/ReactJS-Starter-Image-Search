import React from "react";
import unsplash from "../Api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

function App() {
    const [images, setImage] = React.useState([]);

    React.useEffect(() => {
        unsplash
            .get("/search/photos", {
                params: { query: "Night Sky" },
            })
            .then((response) => {
                if (response.data.results) setImage(response.data.results);
            });
    }, []);

    let onSearchSubmit = async (term) => {
        unsplash
            .get("/search/photos", {
                params: { query: term },
            })
            .then((response) => {
                if (response.data.results) setImage(response.data.results);
            });

        // setImage(response.data.results);
    };

    return (
        <div>
            <SearchBar onSubmit={onSearchSubmit} />
            <ImageList images={images} />
        </div>
    );
}

export default App;

// Class based variant of the same code

// class App extends React.Component {
//   state = { images: [] };

//   onSearchSubmit = async (term) => {
//     const response = await unsplash.get("/search/photos", {
//       params: { query: term },
//     });

//     this.setState({ images: response.data.results });
//   };
//   render() {
//     return (
//       <div>
//         <SearchBar onSubmit={this.onSearchSubmit} />
//         <ImageList images={this.state.images} />
//       </div>
//     );
//   }
// }
