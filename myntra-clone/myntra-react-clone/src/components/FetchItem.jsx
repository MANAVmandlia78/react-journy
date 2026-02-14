import React from 'react'
import { useSelector } from 'react-redux'

const FetchItem = () => {
 const fetchStatus = useSelector(store => store.fetchStatus);
 return <>
 <div>
   Fetch Done: {fetchStatus.fetchDone}
   currently Fetching: {fetchStatus.currentlyFetching}
 </div>
 </>
}

export default FetchItem