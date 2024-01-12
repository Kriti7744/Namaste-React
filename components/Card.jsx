import { img_cdn_url } from "../src/config";

export const RestaurantCard=({name,cuisines,cloudinaryImageId,avgRating})=>{
     const displayedCuisines =
     cuisines.length > 2 ? cuisines.slice(0, 2).join(", ") + "..." : cuisines.join(", ");
        const styleCard={
       width:"220px",
       height:"300px",
       padding:"10px",
       margin:"7px",
       textAlign:"center",
     };
   
     const styleImg={
       width:"200px",
       height:"200px",
       marginBottom:"px",
       borderRadius:"10px"
     }
    return (
    <div  style={styleCard}>
      <img src={img_cdn_url+ 
     cloudinaryImageId} 
     style={styleImg}/> 
     <h3>{name}</h3>
      <h4>
     {displayedCuisines}
     </h4> 
     <h5>{avgRating}</h5> 
    </div>
    )
   }
   