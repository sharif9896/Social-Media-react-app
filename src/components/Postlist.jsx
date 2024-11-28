
import Welcomemessage from "./Welcomemessage";
import Spinner from "./Spinner";
import CardsofPost from "./CardsofPost";
const Postlist = ({ Postlistitems , Postlistitemsd , fetchings}) => {
    // const Postlistitemsd = (id) =>{
    //     alert(id)
    // }
  return (
    <>
    {fetchings && <Spinner/>}
    { <center>{!fetchings && Postlistitems.length === 0 ?<Welcomemessage></Welcomemessage>:null}</center>}
    {!fetchings && Postlistitems.map(post => <CardsofPost post={post} Postlistitemsd={Postlistitemsd}></CardsofPost>)}
     
    </>
  );
};
export default Postlist;
