import { useContext } from "react";
import { useRef } from "react";
import { Postlistitem } from "../store/ContextStoreitems";

const CreatePost = () => {
    let postitle = useRef();
    let postcontent = useRef();
    let posttag = useRef();
    let postreact = useRef();
    let postid = useRef();
    let {addpost} = useContext(Postlistitem);
    const getvalues = () =>{
        let id = postid.current.value;
        let title = postitle.current.value;
        let body = postcontent.current.value;
        let tags = posttag.current.value.split(" ");
        let reaction = postreact.current.value;
        
        fetch('https://dummyjson.com/posts/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId: id ,
            title: title,
            body: body,
            tags: tags,
            reaction: reaction,
          })
        })
        .then(res => res.json())
        .then((post) => addpost(post));


        postid.current.value = "";
        postitle.current.value = "";
        postcontent.current.value = "";
        posttag.current.value = "";
        postreact.current.value = "";
    }
  return (
    <>  <div className="raja mainadda" >
        <div className="mb-3 gap">
          <label htmlFor="Posttitle" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
              placeholder=" Enter Your Title"
              ref={postitle}
          />
         
        </div>
        <div className="mb-3 gap">
          <label htmlFor="Postcontent" className="form-label">
          Post Content
          </label>
          <textarea
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder=" Enter Your Content"
            ref={postcontent}
          />
        </div>
        <div className="mb-3 gap">
          <label htmlFor="Postid" className="form-label">
          Post Id
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder=" Enter Your Id"
            ref={postid}
          />
        </div>
        <div className="mb-3 gap">
          <label htmlFor="Posttags" className="form-label">
            Enter Your Tags Here
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            aria-describedby="emailHelp"
            placeholder=" Enter your tags using Space"
            ref={posttag}
          />
         
        </div>
        <div className="mb-3 gap">
          <label htmlFor="Posttags" className="form-label">
            Enter Your Reactions Here
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            aria-describedby="emailHelp"
            placeholder=" Enter your Reactions"
            ref={postreact}
          />
         
        </div>
        
        <button type="submit" className="btn btn-primary" onClick={getvalues}>
          Submit
        </button>
        </div>
    </>
  );
};
export default CreatePost;
