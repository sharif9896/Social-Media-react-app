import { useContext, useEffect, useState } from "react";
import Postlist from "./Postlist";
import { Postlistitem } from "../store/ContextStoreitems";

const Post = () => {
  let { Postlistitems, deletepost, fetching } = useContext(Postlistitem);
  

  // }
  return (
    <>
      <Postlist
        Postlistitems={Postlistitems}
        fetchings={fetching}
        Postlistitemsd={deletepost}
      ></Postlist>
    </>
  );
};
export default Post;
