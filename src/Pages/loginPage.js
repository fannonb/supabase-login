import React from 'react'
import {createClient} from '@supabase/supabase-js';
import {Auth, ThemeSupa} from '@supabase/auth-ui-react';
import { useNavigate } from 'react-router-dom';

const supabase = createClient("https://medyqvjbagafskphgcdz.supabase.co",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lZHlxdmpiYWdhZnNrcGhnY2R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0MzgwNzgsImV4cCI6MTk5MjAxNDA3OH0.xN6bLHA2DCRwWND1I5uDm87iRcDbQT2NsLWw_apizHc")


const Login = () => {

    const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async (event)=>{
        if (event !== 'SIGNED_OUT') {
            //forward to success URL
            navigate("/success")
        } else {
            //forward to localhost:3000
            navigate("/")
        }
    })

  return (
    <div className="App">
      <header className="App-header">
        <Auth 
            supabaseClient={supabase}
            appearance ={{theme: ThemeSupa}}
            theme ="dark"
            providers={["discord"]}
        />
      </header>
    </div>
  )
}

export default Login
