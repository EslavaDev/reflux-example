import Reflux from 'reflux';
import Actions from '../actions/Actions'
import * as HTTP from '../services/http';


class AppStore extends Reflux.Store{
    constructor(){
        super();
        this.listenables = Actions;
        this.state={
            count: 0
        }
    }
    addOne(){
        let newCount= this.state.count + 1;
        this.setState({count: newCount})
    }

    minusOne(){
        let newCount= this.state.count - 1;
        this.setState({count: newCount})
    }
}

export default AppStore;