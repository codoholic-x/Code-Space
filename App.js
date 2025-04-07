import React from "react";
import ReactDOM from "react-dom/client";


const Title = () => (
<h1 id="title" key="h2">
    Hunting React
</h1>
);

// React component.
// - Functional component -New -I'll use this of the time.
// Name of component starts with capital letter - it's not mandatory.

const HeaderComponent = () => {
return(
    <div>
        <Title />
        <h1>Hunting React function Component</h1>
        <h2>This is h2 tage</h2>
    </div>
  );
};

 

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root.

//async defer .
root.render(<HeaderComponent />);