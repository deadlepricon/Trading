import {useRouter} from 'next/router'

function DetailPage() {
    const router = useRouter();
  
    const chartId = router.query.chartId;
    //send request to backend APi to fetcth
    //the chart info
  
  
    return <h1>hi </h1>
    }
    
export default DetailPage;