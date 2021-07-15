import React,{useState} from 'react';

export const Topform = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [imgg, setImgg] = useState("");

    
    
    const submit=(e)=>{
        e.preventDefault();
        if(!imgg)
        {
            alert("please upload image");
        }
        else if(!title)
        {
            alert("Enter image Title");
        }
        else if(!desc)
        {
            alert("Enter desc of the uploaded image");
        }
        else
        {
            addTodo(imgg,title,desc);
            setImgg("");
            setTitle("");
            setDesc("");
        }
    }
    return (
        
            <div className="container  my-3">
                <h4>Fill up the form and see the magic..!!</h4>
                <form onSubmit={submit}>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" placeholder="Enter img title" id="title" /><br/>
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" placeholder="Enter img desc" id="desc" /><br/>
                <input type="file" value={imgg} onChange={(e)=>{setImgg(e.target.value)}}  id="file"/><br/><br/>
                <button className="btn-success btn-sm" type="submit">Add Image</button><hr width="100%"/>
                
                </form>
            </div>
        
    )
}

