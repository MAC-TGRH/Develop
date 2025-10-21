import React, {useState} from 'react'
import axios from 'axios'

function ImageUploader({onUploaded}){
  const [file,setFile]=useState(null); const [loading,setLoading]=useState(false)
  const submit=async ()=>{
    if(!file) return;
    setLoading(true);
    const form=new FormData(); form.append('image', file);
    const url = `${import.meta.env.VITE_API_URL.replace('/api','')}/api/uploads/image`
    const res = await axios.post(url, form, { headers: {'Content-Type':'multipart/form-data'} })
    onUploaded(res.data.url); setLoading(false)
  }
  return (
    <div>
      <input type="file" onChange={e=>setFile(e.target.files[0])} />
      <button onClick={submit} disabled={loading||!file}>{loading?'Uploading...':'Upload'}</button>
    </div>
  )
}

export default function AdminContent(){
  const [title,setTitle]=useState(''); const [slug,setSlug]=useState(''); const [body,setBody]=useState(''); const [images,setImages]=useState([])
  const create=async ()=>{
    await axios.post(`${import.meta.env.VITE_API_URL}/contents`, { title, slug, body, images, status: 'published' })
    alert('Created'); setTitle(''); setSlug(''); setBody(''); setImages([])
  }
  return (
    <div style={{padding:20}}>
      <h2>Admin Content</h2>
      <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} /><br/>
      <input placeholder="Slug" value={slug} onChange={e=>setSlug(e.target.value)} /><br/>
      <textarea placeholder="Body (HTML allowed)" value={body} onChange={e=>setBody(e.target.value)} /><br/>
      <ImageUploader onUploaded={(u)=>setImages(prev=>[...prev,u])} />
      <div>{images.map((u,i)=>(<img key={i} src={u} style={{maxWidth:120}} alt="" />))}</div>
      <button onClick={create}>Publish</button>
    </div>
  )
}
