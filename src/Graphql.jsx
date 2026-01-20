import {gql} from "@apollo/client";
import { useQuery } from "@apollo/client/react";


const GETCountries=gql `query{
countries{
code,
name }
}`
function Graphql(){
    const{data,loading,error}=useQuery(GETCountries);

    if(loading)return <p>loading</p>
    if(error)return <p>error</p>
    return(
<ul>
    {data.countries.map(city=>{
        return <li key={city.code}>{city.name}</li>
    })}
</ul>
    )
}

export default Graphql;