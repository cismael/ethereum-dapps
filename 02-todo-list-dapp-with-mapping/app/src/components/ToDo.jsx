import React from 'react';

// Import utils
import formatDate from '../utils/formatDate';
import formatBytesToString from '../utils/formatBytesToString';

export default class ToDo extends React.PureComponent {  
    state = { dataKey: null };

    componentDidMount() {
        const { index, drizzle } = this.props;
        let dataKey = drizzle.contracts.ToDo.methods["getTask"].cacheCall(index);
        //let dataKey = drizzle.contracts.ToDo.methods.getTask.cacheCall(index);
        this.setState({ dataKey });
    }

    render() {
        const { index, drizzleState } = this.props;
        const displayData = drizzleState.contracts.ToDo.getTask[this.state.dataKey];
        
        return (
            <>
                <tr key={index}>
                    <td>{displayData && displayData.value[0]}</td>
                    <td>{displayData && formatDate(displayData.value[1])}</td>
                    <td>{displayData && formatBytesToString(displayData.value[3])}</td>
                    <td>{displayData && formatBytesToString(displayData.value[4])}</td>
                    <td>{displayData && displayData.value[5]}</td>
                    <td>{displayData && formatDate(displayData.value[2])}</td>
              </tr>
            </>
        );
    }
}