import React from 'react';
import {Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";



export default function Login(props){

    return(
        <div style={{marginTop:'10px' , marginBottom : '20px' , display : 'flex' , justifyContent : 'center'}}>
            <form  noValidate autoComplete="off">
                <TextField id="outlined-search" label="Username" type="username" variant="outlined" />
                <br/><br/>
                <TextField id="outlined-search" label="Password" type="password" variant="outlined" />
                <br/>
                <Button style={{marginTop : '10px' , marginLeft : '10px', borderRadius : '50px', width : '180px'}} color="primary" variant="contained">Login</Button>
                <br/>
                <h7>Forgot Password?</h7>

            </form>
        </div>
    );

}


