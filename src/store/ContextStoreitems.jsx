import { useEffect, useReducer, useState } from "react";
import { createContext } from "react";

export const Postlistitem = createContext([
  {
    Postlistitems: [],
    fetching: [],
    addpost: () => {},
    deletepost: () => {},
  },
]);

const TheaterReducer = (state, action) => {
  
  let currentitem = state;
  if (action.type === "NEW_ADD") {
    // console.log(action.payload.post.id)
    currentitem = [
      {
        id: action.payload.post.id,
        title: action.payload.post.title,
        body: action.payload.post.body,
        tags: action.payload.post.tags,
        reaction: action.payload.post.reaction,
      },
      ...state,
    ];
  } 
    else if(action.type === "NEW_ADDINITIAL"){
        currentitem = action.payload.posts;
    }  
    else if (action.type === "NEW_DELETE") {
        currentitem = state.filter((val) => val.id !== action.payload.post);
  }
  return currentitem;
};
const ContextStoreitems = ({ children }) => {
    let [fetching, setfetching] = useState(false);
    // const fetchfunc = () =>{
   
  let [Postlistitems, dispatchpost] = useReducer(TheaterReducer, []);
//   let [fetch, setfetch] = useState(false);
  const addpost = (post) => {
    // console.log(post)
    let additem = {
      type: "NEW_ADD",
      payload: {
        post,
      },
    };
    dispatchpost(additem);
  };
  const addinitialpost = (posts) => {
    // console.log(id)
    let additem = {
      type: "NEW_ADDINITIAL",
      payload: {
        posts,
      },
    };
    dispatchpost(additem);
  };

 

  const deletepost = (id) => {
    let delitem = {
      type: "NEW_DELETE",
      payload: {
        id,
      },
    };
    dispatchpost(delitem);
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setfetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {addinitialpost(data.posts);
      setfetching(false);}
    );
    
    return () =>{
      controller.abort();
    }
  }, []);

  return (
    <>
      <Postlistitem.Provider
        value={{
          Postlistitems,
          fetching,
          addpost,
          deletepost,
        }}
      >
        {children}
      </Postlistitem.Provider>
    </>
  );
};
export default ContextStoreitems;
