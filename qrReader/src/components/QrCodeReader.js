import React, {useState} from 'react';
import {Grid, Button} from '@material-ui/core';
import QrReader from 'react-qr-reader';


function QrCodeReader() { 
  const [scanResultWebCam, setScanResultWebCam] =  useState('');
  const [clickOn, setClickOn] = useState(true);
  const [btnOn, setbtnOn] = useState("On");
  const [scannerDisplay, setscannerDisplay] = useState("none");

  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {

    if (result){
         setScanResultWebCam(result);
    }
   }
   const scannerOn = (result) => {
    if (result){
      setClickOn(false);
      setbtnOn("Off");
      setscannerDisplay("block")
    } else {
      setClickOn(true);
      setbtnOn("On");
      setscannerDisplay("none")
    }
    
  }
   
  return (
    <Grid container spacing={2}> 
        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
            <h3>QR Code Scanner</h3>
            <Button  variant="contained" color="primary" onClick={() => scannerOn(clickOn)}>Scanner {btnOn}</Button>
            <QrReader
                delay={300}
                style={{width: '100%', marginTop:"10px",display:scannerDisplay}}
                onError={handleErrorWebCam}
                onScan={handleScanWebCam}
                legacyMode = {clickOn}
            />
            <h3>Scanned: {scanResultWebCam}</h3>
        </Grid>
    </Grid>
  );
}

export default QrCodeReader;
