function MyRecipiesComponent ({label, image, calories, ingredientLines}){


    return(<div>
        <div className="container">
        <h2>{label}</h2></div>
        <div className="container">
       <img className="tasty" src = {image} alt = 'pic'/></div>

<ul  className="list">
    {ingredientLines.map((ingredient,index) => (
       
        <li key={index} >✅ {ingredient}</li>
         ))}
</ul>


     <div className="container">
       <p>{calories.toFixed()} Calories</p>
       </div>
    </div>)
}

export default MyRecipiesComponent;