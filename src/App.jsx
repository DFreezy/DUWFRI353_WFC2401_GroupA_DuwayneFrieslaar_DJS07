// Import the CSS file for styling
import "./index.css";

// Import the Header component
import Header from "./Header.jsx";

// Import the Meme component
import Meme from "./Meme.jsx";

// Define the App component as a function
function App() {
  // The component's JSX content is returned
  return (
    // The outer div with the class "App"
    <div className="App">
      {/* Render the Header component */}
      <Header />

      {/* Render the Meme component */}
      <Meme />
    </div>
  );
}

// Export the App component as the default export
export default App;
