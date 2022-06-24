import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


function App() {
  return (
    <div>

      <div className="header">
        <span className="header_searchbar">
          <input
            className="search-input"
            type="text"
            placeholder="Search..."
            onKeyPress={(e) => {
              //this.checkEnter(e);
            }}
          />

          <button
            className="search-btn"
            type="submit"
            onClick={(e) => {
              //this.search();
            }}>
            Search
          </button>
        </span>
      </div>

      {/*Intro text */}
      <div className="body">
        <div className="intro">
          <h6 className="intro_text">Search Albums by Artist</h6>
          <img className="intro_loader" alt='loader' src="loader.gif" height="20" width="20"></img>

        </div>
        {/*Albums load here*/}
        <div className="results_albums">
          {/* {this.state.albumList.map((album) => (
            <div className="albums_card">
              <img className="album_art" src={album.artworkUrl100} alt="album art" />
              <p className="album_name">{album.collectionName}</p>
              <p className="album_copyright">{album.copyright}</p>
            </div>
          ))}
           */}
          <Card class="my_card" varient="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
              <CardMedia
                component="img"
                height="194"
                image=""
                alt="Album Image"
              />
              <Typography variant="h5" component="div">
                Album Title
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Album copyright
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>      

          </Card>


          <Card class="my_card" varient="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
              <CardMedia
                component="img"
                height="194"
                image=""
                alt="Album Image"
              />
              <Typography variant="h5" component="div">
                Album Title
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Album copyright
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>      

          </Card>

          <Card class="my_card" varient="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
              <CardMedia
                component="img"
                height="194"
                image=""
                alt="Album Image"
              />
              <Typography variant="h5" component="div">
                Album Title
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Album copyright
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>      

          </Card>

          <Card class="my_card" varient="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
              <CardMedia
                component="img"
                height="194"
                image=""
                alt="Album Image"
              />
              <Typography variant="h5" component="div">
                Album Title
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Album copyright
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>      

          </Card>
          











        </div>
        






      </div>

    </div >

  );
}

export default App;
