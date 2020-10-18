
import React, { useState, useEffect, Fragment } from 'react';

import HashLoader	 from "react-spinners/HashLoader";
import { css } from "@emotion/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop:'10%'
    },
}))



const SpinLoader = (props) => {
    const { history } = props;
    const classes = useStyles();

    const override = css`
  display: block;
  margin:  auto;
  border-color: red;
  align: center;
  margin-top:'100px';
`;
 const[loading,setLoading]= useState(true);

 useEffect(() => {
    const timer = setTimeout(() => {
        if(sessionStorage.getItem('isLogin')=="" || sessionStorage.getItem('isLogin')==null || sessionStorage.getItem('isLogin') != "true" || sessionStorage.getItem('isLogin')==undefined ){
            history.push('/login');
        }else{
            setLoading(false);
            history.push('/dashboard');
        }

        
      }, 3000);
      return () => clearTimeout(timer);
   
},  );



    return (
        // <Loader
        // type="Puff"
        // color="#00BFFF"
        // height={100}
        // width={100}
        // timeout={3000} //3 secs
        // />
    <div className={classes.root}>
    <HashLoader	
          css={override}
          size={150}
          color={"#123abc"}
          loading={loading}
        /></div>

    );

};
export default SpinLoader;