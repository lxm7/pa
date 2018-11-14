import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

import './App.css';
import Marker from './Marker.js';

class App extends Component {
    state = { markers: [] }

    componentDidMount() {
        axios.get('https://data.police.uk/api/crimes-street/all-crime?poly=52.268,0.543:52.794,0.238:52.130,0.478')
            .then(response => {
                console.log(process.env.GOOGLE_MAPS_API_KEY)
                console.log(process.env.REACT_APP_DEV_API_URL)

                this.setState({ markers: response.data })
            })
            .catch(error => {
                console.log(error);
            })
        
        // axios.get(process.env.GOOGLE_MAPS_API_KEY)
        //     .then(response => {
        //         console.log(response.data)
        //         this.setState({ key: response.data })
        //     })
    }

    static defaultProps = {
        center: {
          lat: 52.268,
          lng: 0.543,
        },
        zoom: 10,
    };

    render() {
        const { markers, key } = this.state;
        return (
            <div>
                <div className='nav'>
                    <h2>Police API UK</h2>

                    <p>Quick demo leveraging the <a href='https://data.police.uk/'>https://data.police.uk</a>'s 
                    API to see which area have the most reported crimes.</p>

                    <p>Toggle the data with the filters below coming soon...</p>
                </div>

                <div style={{ height: '100vh', width: '75%',  float: 'left' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                    {markers && markers.map(m => {
                        return (
                            // path='M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z'>
                            <Marker    
                                key={m.id}
                                lat={m.location.latitude}
                                lng={m.location.longitude}
                                text={m.location.street.name}
                            />                            
                        )
                    })}
                        
                    </GoogleMapReact>
                </div>
            </div>
            
        );
    }
}

export default App;
