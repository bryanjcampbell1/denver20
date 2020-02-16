import React from "react";

import { Button, Table} from 'react-bootstrap';



let myLoan1 = { borrower: '0xD95b9a6Aa9A26F15b51F6FEef8af90478d2E24B2',
				loanID: 'ktckt66gg88hu9',
				borrowAmount: '10 ETH',
				returnAmount: '11 ETH',
				repayDate: '2/21/20',
				defaultStatus: false
}

let myLoan2 = { borrower: '0xD95b9a6Aa9A26F15b51F6FEef8af90478d2E24B2',
				loanID: 'wryjywjry',
				borrowAmount: '1 ETH',
				returnAmount: '2 ETH',
				repayDate: '2/19/20',
				defaultStatus: false
}

let myLoan3 = { borrower: '0xD95b9a6Aa9A26F15b51F6FEef8af90478d2E24B2',
				loanID: 'wr6jetjetjj',
				borrowAmount: '8 ETH',
				returnAmount: '10 ETH',
				repayDate: '2/20/20',
				defaultStatus: false
}

let myLoans = [myLoan1, myLoan2, myLoan3];

export default class MyLoans extends React.Component{
	constructor(props) {
		super(props);


		//FOR EACH OF MY LOANS
		// 1) query loan data
		// 2) check for default of contract 






		this.state = {  account: '', 
		                value1: '',
		                value2: '',
		                myLoans: myLoans,
		              };


	  }

    componentWillMount(){
      
    }






	render() {
		return (

			<div>
              <Table hover>
                <tbody>
                  {this.state.myLoans.map((row, key) => (
                    <tr key={key}>
                      
                      <td>  Borrowing {row.borrowAmount}</td>
                      <td>  Returning {row.returnAmount}</td>
                      <td> Repayment Date {row.repayDate}</td>
                        
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

        );
	}
}

