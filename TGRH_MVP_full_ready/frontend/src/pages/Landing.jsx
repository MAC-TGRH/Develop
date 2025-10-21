import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Landing(){
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('Loading...')

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/contents`)
      .then(r=>{ setItems(r.data); setStatus('Loaded') })
      .catch(e=>{ console.error(e); setStatus('Could not reach backend') })
  },[])

  return (
    <div style={{padding:20}}>
      <h1>Welcome to TGRH</h1>
      <p>{status}</p>
      <div>
        {items.length===0 && <p>No published content yet.</p>}
        {items.map(c=> (
          <article key={c.id} style={{border:'1px solid #ddd', padding:10, margin:10}}>
            <h3>{c.title}</h3>
            {c.images && c.images.map((u,i)=> <img key={i} src={u} alt="" style={{maxWidth:200}} />)}
            <div dangerouslySetInnerHTML={{__html: c.body}} />
          </article>
        ))}
      </div>
    </div>
  )
}
