import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";

import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [failure, setFailure] = useState(false);
  const [page, setPage] = useState(1);
  // https://json-server-mocker-masai.herokuapp.com/candidates
  // http://localhost:3000/candidates
  useEffect((page) =>{
    // pagemovt(page)
  },[page])

// var pagemovt ;

  useEffect(() => {
    // lists fetched[1]
    // get requested
    // page under params

    axios({
       method: "get",
       url:"https://json-server-mocker-masai.herokuapp.com/candidates",
       params: {
        _page:page,
        _limit:5
       }
     })

     .then((e) =>{
      setData(e.data);
     })
     .catch((e) =>{
      setFailure(true);
      // for any failure
     })
  },[])
  // is data coming = y/n = yes
  console.log(data);

  function AdjustPage(page){
      setPage(page+1);
  }

  return (
    <div className="App">
      <div>
        <div id="loading-container">...Loading</div>
        <Button id="SORT_BUTTON" title={`Sort by Ascending Salary`} />
        <Button disabled={page===1} onClick={()=>AdjustPage} title="PREV" id="PREV" />
        <Button onClick={()=>setPage(page+1)} id="NEXT" title="NEXT" />
      </div>
      {/* data mapped */}
    {data.map((item) => <CandidateCard key = {item.id} {...item}/>)}
    </div>
  );
}
