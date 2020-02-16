import React from "react";

import { Button, Nav, Navbar} from 'react-bootstrap';


let loser1 = { 	name: 'James Regie',
				address: '12 Tafts Ave, Denver CO',
				phoneNumber: '598-838-0002',
				socialSecurity: '029-92-8264',
				
}

let loser2 = { name: 'Oliver Guy',
				address: '109 Stuart St., Boston MA',
				phoneNumber: '910-993-0192',
				socialSecurity: '819-92-4583',
}

let loser3 = { name: 'James Regie',
				address: '12 Mohal Rd, New York  NY',
				phoneNumber: '474-910-7847',
				socialSecurity: '884-27-2884',
}

let losers = [loser1, loser2, loser3];







export default class WallOfShame extends React.Component{

	constructor(props) {
		super(props);


		//QUERY Enigma FOR LIST OF ALL DEFAUTERS 






		this.state = {  account: '', 
		                value1: '',
		                value2: '',
		                value3: '',
		                defauledUsers: losers,
		              };


	  }

    componentWillMount(){
      
    }



	render() {
		return(
			<div>
				<div style={{display:'flex', justifyContent:'center'}}><h1>Wall Of Shame</h1></div>
				{this.state.defauledUsers.map((row, key) => (
					<div style={{margin:30, padding:20, backgroundColor:'pink'}}>
						<div style={{display:'flex', justifyContent:'center'}}><h3>{row.name}</h3></div>
						<div style={{display:'flex', justifyContent:'center'}}><h3>{row.address}</h3></div>
						<div style={{display:'flex', justifyContent:'center'}}><h3>Phone: {row.phoneNumber}</h3></div>
						<div style={{display:'flex', justifyContent:'center'}}><h3>SSN: {row.socialSecurity}</h3></div>
					</div>

                  ))}

			</div>

		);
		return <h1>WallOfShame</h1>
	}
}
