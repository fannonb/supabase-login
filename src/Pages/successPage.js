import React from 'react'
import {createClient} from '@supabase/supabase-js';
import {Auth, ThemeSupa} from '@supabase/auth-ui-react';
import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react'

const supabase = createClient("https://medyqvjbagafskphgcdz.supabase.co",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lZHlxdmpiYWdhZnNrcGhnY2R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0MzgwNzgsImV4cCI6MTk5MjAxNDA3OH0.xN6bLHA2DCRwWND1I5uDm87iRcDbQT2NsLWw_apizHc")



const Success = () => {

    const [user,setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function getUseData () {
            await supabase.auth.getUser().then((value)=>{
                if(value.data?.user) {
                    console.log(value.data.user)
                    setUser(value.data.user);
                }
            })
        }
        getUseData();
    }, [])

    async function signOutUser(){
        const {error} = await supabase.auth.signOut();
        navigate("/")
    }

  return (
    <div className="App">
      <header className="App-header">
      {Object.keys(user).length !== 0 ? 
      
      <>
        <h2>Success </h2>
       <button onClick={()=> signOutUser()}> Sign Out </button>
      </>
      :
      <>
        <h1> User is not logged in </h1>
        <button onClick={()=>{navigate("/")}}> Go back home </button>
      </>
      }
       
      </header>
    </div>
  )
}

export default Success
