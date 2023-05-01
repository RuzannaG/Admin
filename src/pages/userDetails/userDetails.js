import { Link, useParams } from "react-router-dom"


export const UserDetails=({list})=>{

    const params=useParams();
    // console.log(params)

    const searchUser=list?.find((i)=> i.id === +params.id)
    console.log(params.id)
    console.log(list)
    console.log(searchUser)
    return(
        
         
            <div className="userDetail"> 
                <ul class="SG">
                                <li class="sgLi">

                                    <div><img  className="img" src={searchUser.logo}/></div>
                                    <li> {searchUser?.name}</li>
                                    <li> {searchUser?.age}</li>
                                    <li> {searchUser?.email}</li>
                                    <li> {searchUser?.name}</li>

                                </li>
                            </ul>

            {/* <Link to={`userDetails/${searchUser?.name}`}> user name</Link> */}
           
            
            
            </div>
            
            
    )
 }