import Post from '../post/Post';
import Share from '../share/Share';
import {Posts} from '../../DummyData.js'

import './feed.css';


const Feed = () => {
    return <>
        <div className="feed">
           <div className="feedWrapper">
            <Share />
                {
                    Posts.map((post) => {
                        return <Post key={post.id} post = {post} />
                    })
                }
           </div>
        </div>
    </>
}

export default Feed