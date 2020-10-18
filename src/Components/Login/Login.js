import React from 'react';
import {Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {validate}  from '../services'


export default function Login(props){

    const [loging, setLogin] = React.useState({
        username:"",
        password:""
    });

    function handleChange(e){
        setLogin({
            ...loging,
            [e.target.name]:(e.target.value)
        })
    }

    async function handleOnClick(e){
        const result = await validate(loging);
        sessionStorage.setItem("isLogin",result);
        
        props.history.push('/')
        window.location.reload();
    }

    return(
        <div style={{marginTop:'10px' , marginBottom : '20px' , display : 'flex' , justifyContent : 'center'}}>
            <form  noValidate autoComplete="off">
                <TextField id="outlined-search" value={loging.username} onChange={(e)=>handleChange(e)} name="username" label="Username" type="username" variant="outlined" />
                <br/><br/>
                <TextField id="outlined-search" value={loging.password} onChange={(e)=>handleChange(e)} name="password" label="Password" type="password" variant="outlined" />
                <br/>
                <Button style={{marginTop : '10px' , marginLeft : '10px', borderRadius : '50px', width : '180px'}} color="primary" variant="contained"  onClick={(e) => handleOnClick(e)}>Login</Button>
                <br/>
                <h7>Forgot Password?</h7>

            </form>
        </div>
    );

}


