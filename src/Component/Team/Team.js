import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./Team.css";
class Team extends Component {
  render() {
    return (
      <div className="t">
        <div className="mission">
          <Grid item xs={6} lg={4} xl={3}>
            <Paper elevation={4}>
              <h2 className="mission1">OUR TEAM</h2>
            </Paper>
          </Grid>{" "}
        </div>
        <Grid container>
          <Grid item xs={12} sm>
            <Paper>
              {" "}
              <div className="paper">
                <h2>Akash Srivastava</h2>
                <p>Co-founder</p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm>
            <Paper>
              {" "}
              <div className="paper">
                {" "}
                <h2>Aman Srivastava</h2>
                <p>Co-founder</p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm>
            <Paper>
              {" "}
              <div className="paper">
                {" "}
                <h2>Raj Kumar Srivastava</h2>
                <p>Director</p>
              </div>
            </Paper>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm>
            <Paper>
              {" "}
              <div className="paper">
                <h2>Anand Kumar Srivastava</h2>
                <p>Director</p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm>
            <Paper>
              {" "}
              <div className="paper">
                {" "}
                <h2>Ajay Kumar Srivastava</h2>
                <p>Director</p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm>
            <Paper>
              {" "}
              <div className="paper">
                {" "}
                <h2>Arvind Singh</h2>
                <p>Marketing Head</p>
              </div>
            </Paper>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm>
            <Paper>
              {" "}
              <div className="paper">
                <h2>Ashish Kumar Shukla</h2>
                <p>Project Engineer</p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm>
            <Paper>
              {" "}
              <div className="paper">
                {" "}
                <h2>Vivek Pandey</h2>
                <p>Project Engineer</p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm>
            <Paper>
              {" "}
              <div className="paper">
                {" "}
                <h2>Ramit Mam</h2>
                <p>Company Secretary</p>
              </div>
            </Paper>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm>
            <Paper>
              {" "}
              <div className="paper">
                <h2>Vikas Kumar Pal</h2>
                <p>Project Engineer</p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm>
            <Paper>
              {" "}
              <div className="paper">
                {" "}
                <h2>Rithik Nayyar</h2>
                <p>Project Engineer</p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm>
            <Paper>
              {" "}
              <div className="paper">
                {" "}
                <h2>Ashutosh Pandey</h2>
                <p>Project Engineer</p>
              </div>
            </Paper>
          </Grid>{" "}
        </Grid>
      </div>
    );
  }
}
export default Team;
