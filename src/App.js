import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import Select from 'react-select';
import Geosuggest from 'react-geosuggest';
import { merge } from 'lodash';

import './App.css';
import Marker from './Marker.js';
import { fetchLocations, fetchPolys, flatten } from './utils.js';
import { BASE_URL } from './constants';

export class App extends Component {
    state = {
        locations: [],
        selectedOption: null,
        coordinates: [],
        markers: [],
    }
    
    handleChange = (selectedOption) => {
        this.setState({ selectedOption }, () => {
            const coordinates = flatten(fetchPolys(this.state.locations, selectedOption.value).coordinates)
            const test = flatten([
                {
                latitude: "52.6394052587",
                longitude: "-1.1458618876"
                },
                {
                latitude: "52.6389452755",
                longitude: "-1.1457057759"
                },
                {
                latitude: "52.6383706746",
                longitude: "-1.1455755443"
                },
                {
                latitude: "52.637738214",
                longitude: "-1.1453756586"
                },
                {
                latitude: "52.6372925229",
                longitude: "-1.1452192785"
                },
                {
                latitude: "52.6369615308",
                longitude: "-1.1450608136"
                },
                {
                latitude: "52.6365882521",
                longitude: "-1.1449974537"
                },
                {
                latitude: "52.6361567723",
                longitude: "-1.1448171605"
                },
                {
                latitude: "52.6354495167",
                longitude: "-1.1441945098"
                },
                {
                latitude: "52.6347986756",
                longitude: "-1.1434293643"
                },
                {
                latitude: "52.6341926728",
                longitude: "-1.14292269"
                },
                {
                latitude: "52.6338167018",
                longitude: "-1.1424375394"
                },
                {
                latitude: "52.6338780456",
                longitude: "-1.1418829669"
                },
                {
                latitude: "52.6338773726",
                longitude: "-1.141790037"
                },
                {
                latitude: "52.6338766792",
                longitude: "-1.1416942999"
                },
                {
                latitude: "52.6340579308",
                longitude: "-1.1415716571"
                },
                {
                latitude: "52.6342191009",
                longitude: "-1.1415685043"
                },
                {
                latitude: "52.6343591739",
                longitude: "-1.141507397"
                },
                {
                latitude: "52.6343589941",
                longitude: "-1.1415074006"
                },
                {
                latitude: "52.6344684984",
                longitude: "-1.1414087676"
                },
                {
                latitude: "52.6346199673",
                longitude: "-1.1410346167"
                },
                {
                latitude: "52.6347061353",
                longitude: "-1.1407676902"
                },
                {
                latitude: "52.6347051401",
                longitude: "-1.1407668231"
                },
                {
                latitude: "52.6346178379",
                longitude: "-1.1410385003"
                },
                {
                latitude: "52.6348984684",
                longitude: "-1.1401651744"
                },
                {
                latitude: "52.6336676968",
                longitude: "-1.1390101411"
                },
                {
                latitude: "52.6326918825",
                longitude: "-1.1381898599"
                },
                {
                latitude: "52.6320020572",
                longitude: "-1.1380147166"
                },
                {
                latitude: "52.6318045017",
                longitude: "-1.1377121481"
                },
                {
                latitude: "52.6318090634",
                longitude: "-1.1339851685"
                },
                {
                latitude: "52.6317059877",
                longitude: "-1.1339046038"
                },
                {
                latitude: "52.6317067068",
                longitude: "-1.1339045896"
                },
                {
                latitude: "52.6323140578",
                longitude: "-1.1324152888"
                },
                {
                latitude: "52.6334109367",
                longitude: "-1.1301840833"
                },
                {
                latitude: "52.6341083827",
                longitude: "-1.1292292853"
                },
                {
                latitude: "52.6374262367",
                longitude: "-1.1306963945"
                },
                {
                latitude: "52.6382840262",
                longitude: "-1.1310828531"
                },
                {
                latitude: "52.6390841378",
                longitude: "-1.1312050477"
                },
                {
                latitude: "52.6400853005",
                longitude: "-1.1304254634"
                },
                {
                latitude: "52.6412795053",
                longitude: "-1.1295891086"
                },
                {
                latitude: "52.6413387038",
                longitude: "-1.1295217246"
                },
                {
                latitude: "52.6413387937",
                longitude: "-1.1295217228"
                },
                {
                latitude: "52.6419492906",
                longitude: "-1.1289327826"
                },
                {
                latitude: "52.6425765658",
                longitude: "-1.1284252263"
                },
                {
                latitude: "52.6433310907",
                longitude: "-1.1276793916"
                },
                {
                latitude: "52.6446848996",
                longitude: "-1.126520776"
                },
                {
                latitude: "52.6448174552",
                longitude: "-1.1269897771"
                },
                {
                latitude: "52.6449645475",
                longitude: "-1.1271625904"
                },
                {
                latitude: "52.6450754906",
                longitude: "-1.1271999963"
                },
                {
                latitude: "52.6452169632",
                longitude: "-1.1271714663"
                },
                {
                latitude: "52.6452961141",
                longitude: "-1.1271279166"
                },
                {
                latitude: "52.6453605138",
                longitude: "-1.1270101665"
                },
                {
                latitude: "52.6454623178",
                longitude: "-1.1269298059"
                },
                {
                latitude: "52.6456370795",
                longitude: "-1.1272096737"
                },
                {
                latitude: "52.6458549308",
                longitude: "-1.1276764012"
                },
                {
                latitude: "52.6461459267",
                longitude: "-1.1282364251"
                },
                {
                latitude: "52.6461450398",
                longitude: "-1.1282380686"
                },
                {
                latitude: "52.6461787756",
                longitude: "-1.1283022861"
                },
                {
                latitude: "52.6461387484",
                longitude: "-1.1282260733"
                },
                {
                latitude: "52.6454895298",
                longitude: "-1.129527082"
                },
                {
                latitude: "52.6451239511",
                longitude: "-1.1305244654"
                },
                {
                latitude: "52.6444408763",
                longitude: "-1.1312453679"
                },
                {
                latitude: "52.644213906",
                longitude: "-1.1315800446"
                },
                {
                latitude: "52.6438173084",
                longitude: "-1.1322479589"
                },
                {
                latitude: "52.6434807264",
                longitude: "-1.1332918564"
                },
                {
                latitude: "52.643315581",
                longitude: "-1.1342382113"
                },
                {
                latitude: "52.6434261394",
                longitude: "-1.1336702616"
                },
                {
                latitude: "52.643316615",
                longitude: "-1.134379633"
                },
                {
                latitude: "52.6432326615",
                longitude: "-1.1346643194"
                },
                {
                latitude: "52.6432067431",
                longitude: "-1.1350420035"
                },
                {
                latitude: "52.6432378273",
                longitude: "-1.1353714138"
                },
                {
                latitude: "52.6430967766",
                longitude: "-1.1357042122"
                },
                {
                latitude: "52.6430132527",
                longitude: "-1.1360358766"
                },
                {
                latitude: "52.6427858343",
                longitude: "-1.1363232238"
                },
                {
                latitude: "52.6427067768",
                longitude: "-1.1372678355"
                },
                {
                latitude: "52.6425104327",
                longitude: "-1.1378845802"
                },
                {
                latitude: "52.6422561423",
                longitude: "-1.1384083135"
                },
                {
                latitude: "52.6420332645",
                longitude: "-1.1393084346"
                },
                {
                latitude: "52.6417520028",
                longitude: "-1.14006841"
                },
                {
                latitude: "52.6415867104",
                longitude: "-1.1410145343"
                },
                {
                latitude: "52.6413644939",
                longitude: "-1.142009057"
                },
                {
                latitude: "52.6410278221",
                longitude: "-1.14305295"
                },
                {
                latitude: "52.6407765711",
                longitude: "-1.1440007264"
                },
                {
                latitude: "52.6398933322",
                longitude: "-1.1458367178"
                },
                {
                latitude: "52.6394052587",
                longitude: "-1.1458618876"
                }
                ])
            // const coords = coordinates
            // console.log(coordinates)
            const test2 = test.map(t => Object.values(t))
            console.log(flatten(test2))
            const firstLat = coordinates.splice(0, 2)
            const middle = coordinates.splice(coordinates.length / 2, 2)
            const lastLng = coordinates.slice(-2)
            console.log(firstLat)
            console.log(middle)
            console.log(firstLat.concat(middle))
            axios.get(`${BASE_URL}/crimes-street/all-crime?poly=${flatten(test2)}`)
                .then(response => {
                    console.log('update res', response.data)
                    this.setState({ markers: response.data })
                })
                .catch(error => {
                    console.log(error);
                })
        });
    }

    componentDidMount() {
        axios.get('wpc.json')
            .then(response => {
                const locations = fetchLocations(response);
                this.setState({ locations })
            })
            .catch(error => {
                console.log(error);
            })

        axios.get(`${BASE_URL}/crimes-street/all-crime?poly=52.268,0.543:53.794,3.238:53.130,1.478`)
            .then(response => {
                console.log(response.data)
                this.setState({ markers: response.data })
            })
            .catch(error => {
                console.log(error);
            })
    }

    static defaultProps = {
        center: {
          lat: 52.268,
          lng: 0.543,
        },
        zoom: 10,
    };

    render() {
        const { markers, locations, selectedOption } = this.state;
        
        return (
            <div>
                <div className='nav'>
                    <h2>Police API UK</h2>

                    <p>Quick demo leveraging the <a href='https://data.police.uk/'>https://data.police.uk</a>'s 
                    API to see which area have the most reported crimes.</p>

                    <p>Toggle the data with the filters below coming soon...</p>
                    
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={locations}
                    />
                </div>

                <div style={{ height: '100vh', width: '75%',  float: 'left' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: process.env.PA_GOOGLE_MAPS_API_KEY,
                            libraries: ['places', 'drawing'],
                        }}
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
