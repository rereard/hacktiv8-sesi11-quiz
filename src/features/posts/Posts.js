import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from './postsSlice'
import ReactLoading from "react-loading"
import {useEffect} from 'react'

const Posts = () => {
    const state = useSelector((state) => state.posts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, []);
    return(
        <>
            {state.isPending ? (
                <div className="flex flex-col justify-center items-center w-screen h-screen">
                    <ReactLoading type="spinningBubbles" color="#000" width={120} height={150}/>
                    <h3 className="text-xl font-medium">Loading Data...</h3>
                </div>
            ) : (
                <div className="flex flex-col items-center w-screen mt-10 mb-8">
                    <h1 className="mb-10 text-4xl w-2/4 md:text-left text-center">User Post</h1>
                    {state.posts.map((post) => (
                        <div key={post.id} className="border-2 border-slate-400 rounded-lg md:w-2/4 w-9/12 flex flex-col flex-wrap p-3 mb-5">
                            <div className="border-b-2">
                                <h2 className="md:text-2xl font-medium text-xl">{post.title}</h2>
                                <h4 className="text-slate-400 md:text-lg mt-2 text-base">{post.name}</h4>
                            </div>
                            <p className="mt-3">{post.body}</p>
                        </div>
                    ))}
                </div>
            )}
            {state.errorMessage && (
                alert(state.errorMessage)
            )}
        </>
    )
}
export default Posts