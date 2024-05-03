import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        if(isPending) return;//cooldown
        const blog = {title, body, author}

        setIsPending(true);
        setTimeout(() => {
            fetch('http://localhost:8000/blogs',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(blog)
                })
                .then(res=>{
                    console.log('blog added');
                    navigate('/');
                    setIsPending(false);
                }
            )
        }, 1000);
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Blog title:</label>
                <input 
                    type="text" 
                    id='title'
                    required 
                    value = {title}
                    onChange={(e)=>setTitle(e.target.value)}
                />

                <label htmlFor='body'>Blog body:</label>
                <textarea 
                    id='body'
                    required
                    value = {body}
                    onChange={(e)=>setBody(e.target.value)}
                ></textarea>

                <label htmlFor='author'>Blog Author</label>
                <select 
                    id='author'
                    value = {author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;