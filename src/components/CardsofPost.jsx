import { MdDelete } from "react-icons/md";
const CardsofPost = ({post , Postlistitemsd}) =>{

    return (
        <>
        
        <div className="card mycard " style={{width: "30rem"}}><div className="card-body ">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => Postlistitemsd(post.id)}>
        <MdDelete />
  </span>
        <h5 className="card-title ">{post.title}</h5>
        <p className="card-text">
          {post.body}
        </p>
        {post.tags.map(val => <span class="badge text-bg-primary gaps">{val}</span>)}
        <div class="alert alert-success bot" role="alert">
        The Post has been reacted by {post.reaction} Peoples.
</div>
      </div></div> 
        </>
    );
}
export default CardsofPost;