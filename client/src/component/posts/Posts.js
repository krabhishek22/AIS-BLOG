import React,{useState,useEffect,useCallback} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Post from './Post';
import {getPost} from '../../actions/post';




const Posts = () => {
    const [maxRange, setMaxRange] = useState(6); 
    
  
    const dispatch = useDispatch();
    useEffect(() => {
        
        dispatch(getPost());
        
    }, [dispatch])

    // ------------- Conntion with Action --------------
    const post = useSelector((state) => state.post)
 

    const loadMore = useCallback(() => {
        setMaxRange(prevRange => prevRange + 3);
      },[])
    
    return (
        <>
           <div className="container  ">
            <div className="row my-4">
      
              {
                post.slice(0, maxRange).map((post) =>(
                    <Post post={post}/>
                  ))
              }
              
              <p className="text-center my-5" style={{cursor:"pointer"}} onClick={loadMore}>Load more</p> 
              </div>
              </div>
              
        </>
    )
}

export default Posts

