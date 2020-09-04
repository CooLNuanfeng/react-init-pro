import React, {useState,  useEffect} from 'react'
import http from '@/http/'
import { Button } from 'antd-mobile';

// export default class Detail extends React.Component {
//   render(){
//     console.log(this.props)
//     return (
//       <>
//         <h1>Detail app</h1>
//         <Button type="primary">click</Button>
//       </>
//     )
//   }
//   componentDidMount(){
//     console.log('componentDidMount')
//     http.get('/sg/cms/middleImageConfig.json').then(res=>{
//       console.log(res)
//     })
//   }
// }

function useCustom(page){
  useEffect(()=>{
    console.log('++++++++++++')
  })
}


function PostList({ count = 5 }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let p = document.createElement("p");
    p.innerHTML = `当前文章数量：${count}`;
    document.getElementById('page').append(p);
    return ()=>{
      p.remove()
    }
  });

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await fetch(
        `/posts?_limit=${count}`
      );
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    };
  
    loadPosts();
  },[count]);


  if (loading) return <div>loading...</div>;

  return (
    <ul>
      {posts.slice(0, count).map((post, index) => {
        return <li key={post.id}>{index+1}、 {post.title}</li>;
      })}
    </ul>
  );
}

const Info = ()=> {
  const [showList, setShowList] = useState(false);
  const [postCount, setPostCount] = useState(5);
  return (
    <>
      <button onClick={() => setShowList(!showList)}>
        {showList ? "隐藏" : "显示"}
      </button>
      <button onClick={() => setPostCount(previousCount => previousCount + 1)}>
        增加数量
      </button>
      {showList && <PostList count={postCount} />}
    </>
  )
}

const DetailTitle = () => {
  console.log('title')
  return (
    <h1>Detail app</h1>
  )
}


const Detail = ()=>{
  const [page, setPage] = useState(1)
  useCustom(page)
  return (
    <>
      <DetailTitle/>
      <Info/>
      <div id="page"></div>
      <Button type="primary" onClick={()=>setPage(page+1)}>click</Button>
    </>
  )
}

export default Detail