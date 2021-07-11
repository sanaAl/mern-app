import React,{useEffect,useState} from 'react'

const Home = () => {
    const [userName , setUserName] =useState('');
    const [show,setShow] = useState(false);
    const userHome = async() =>{
        try{
           const res = await fetch("/getdata",{
              method: "GET"  ,
              headers :{          
                  "Content-Type" : "application/json"
              }, 
            });
            const data = await res.json();
            console.log(data);
            setUserName(data.name);
            setShow(true);
    
        } catch(err){
            console.log(err);
        }
    }
    
    useEffect(() => {
      userHome();
    }, []);
    return (  
    <>
        <div className="home-page">
            <div className="home-div">
                <h1 className="pt-5"> Hey! </h1>
                <h1>{userName}</h1>
                <h2>{show ? 'You are back' : "Creative Person!"}</h2>
            </div>
            
        </div>
        </>
    )
}

export default Home
