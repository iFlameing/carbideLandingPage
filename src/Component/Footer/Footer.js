import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Footer.css";
import Typography from "@material-ui/core/Typography";

export default function footer() {
  return (
    <div id="contact" style={{ marginTop: 10 }}>
      <div id="icon">
        <Grid container>
          <Grid item xs={12} sm={4} md={4} lg={4} xl>
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
              <a id="mail" href="mailto:inifo@flydexautomobiles.com">
                {" "}
                info@flydexautomobiles.com
              </a>
              <br />
              <br />
            </Typography>
          </Grid>
        </Grid>
      </div>
      <footer className="copyright">
        <p>
          © 2019 <a href="flydexautomobiles.com">Flydex Automobiles.</a> All
          Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
