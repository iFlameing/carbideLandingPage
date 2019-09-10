import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Footer.css";
import Typography from "@material-ui/core/Typography";


export default function footer() {
  return (
    <div id="contact">
      <div id="icon">
        <Grid container spacing={3}>
          <Grid item xs={12}  sm={4} md={4} lg={4} xl>
            <Typography variant="h6" gutterBottom>
              Head Office
            </Typography>
            <Typography paragraph>
              Cabin K, SMVDU-TBIC, 2nd Floor,
              <br />
              Academic Block, SMVDU, Katra,
              <br /> Jammu & Kashmir 182320
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl>
            <Typography variant="h6" gutterBottom>
              Corporate Office
            </Typography>
            <Typography>
              SSCO Tower, 3 rd Floor,d-2/28,
              <br /> Vibhuti Khand, Gomti Nagar,
              <br /> Lucknow, Uttar Pradesh -226010
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl>
            <Typography variant="h6" gutterBottom>
              Contact Details
            </Typography>
            <Typography>
              Phone No.: +918803341721,+918574306321
              <br />
              Landline: 0522-3594337
              <br />
              Email ID:
              <a href="mailto:flydexautomobiles@gmail.com">
                {" "}
                flydexautomobiles@gmail.com
              </a>
              <br />
              <br />
            </Typography>
          </Grid>
        </Grid>
      </div>
      <footer className="copyright">
        <div className="icons">
          <a href="https://www.facebook.com/flydexautomobiles/"
            id="icon1"
            className="fa fa-facebook"
          ></a>
          <a href="https://www.instagram.com/flydexautomobiles/"
            id="icon2"
            className="fa fa-instagram"></a>
          <a href="#" id="icon4" className="fa fa-twitter"></a>

          <a
            href="mailto:flydexautomobiles@gmail.com"
            id="icon3"
            className="fa fa-envelope"
          ></a>
        </div>
        <p>
          © 2019 <a href="flydexautomobiles.com">Flydex Automobiles.</a> All
          Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
