import React from "react";
import ReactDOM from "react-dom/client";


const Title = () => (
<a href="/">
  <img
   className="logo" 
   alt="logo"
   src="https://img.freepik.com/premium-vector/food-logo-design-with-leaf-creative-concept-premium-vector_526458-2675.jpg?semt=ais_hybrid&w=740"
   /> 
   </a>  
);


// Composing Components
const Header = () => {
return(
    <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
  );
};

//Config Driven UI

const restrautList = [

   

];

const RestrauntCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
}) => {
    return (
        <div className="card">
            <img
              src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,W_508,h_320,c_fill/" +
                cloudinaryImageId
              }
            />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    );;
}


// props - properties
const Body = () => {
    return (
    <div className="restaurant-list">
        {restrautList.map((restaurant) => {
            return <RestruntCard {...restaurant.data} key={restaurant.data.id} />
        })}
    </div>
    ); 
};

const Footer = () => {
    return <h4>Footer</h4>;
};

const AppLayout = () =>{
    return(
     <React.Fragment>
       <Header/>
       <Body/>
       <Footer/>
     </React.Fragment>
    );
};

 

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root.

//async defer .
root.render(<AppLayout />);



/**Header
               - Logo
               - Nav Items(Right Side)
               - Cart
            Body
               - Search bar
               - RestrauntList
                   - RestaurantCard (Many cards)
                        - Image
                        - Name
                        - Rating
                        - Cusines
            Footer
                - links
                - copyright
                
        */