import{Card,CardContent}from "@mui/material"
import Typogtaphy from "@mui/material/Typography"
function MyCard(){
    return(
<Card sx={{ maxWidth:300}}>
    <CardContent >
        <Typogtaphy variant="h1">Welcome To My Card!!</Typogtaphy>
        <Typogtaphy>This is an example card</Typogtaphy>

    </CardContent>
</Card>
    );
}
export default MyCard;