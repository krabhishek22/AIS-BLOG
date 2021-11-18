import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import img from '../../images/wr.jpeg';
import {  useDispatch } from 'react-redux';
import { getOnePost } from '../../actions/post';

const Post = ({post}) => {
    //const [id, setId] = useState();
    const dispatch = useDispatch();

    
    

    // ADD 
    const shorten = post.content ? post.content.substring(0, 100)+'... ' : '';
    
    return (
   
        <div className="col-md-4 col-12 col-xxl-4 mb-4 ">
        <div class="card " >
              <img src={img} className="card-img-top" />
               <div className="card-body">
                  <h4 className="card-title text-center text-capitalize">{post.title}</h4>
                  <h5 className="card-text tags mt-4" ><strong>Tags : </strong> {post.tags} </h5>
                  <div>
                      <p className="text-muted">{shorten}<span><Link to={`/blogPost/${post.id}`}  blog={post} onClick = {() => dispatch(getOnePost(post.id))}>Read more</Link></span> </p>
                  </div>
                
              </div>
             
          </div>
        </div>
            
      
    
    )
}

export default Post
