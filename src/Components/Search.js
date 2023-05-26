export const Search = () =>{
    return(
        <form onSubmit={console.log("submitted")}>\
            <input className="search-field" type="search" placeholder="Search Anything"/>
      <button  className="search-button" >Search</button>
        </form>
        
    )
}