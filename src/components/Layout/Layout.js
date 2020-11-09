import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
import Toolbar from '../Navigationitems/Toolbar/Toolbar';
import SideDrawer from '../Navigationitems/SideDrawer/SideDrawer'
class Layout extends Component {
    state={
      showSideDrawer: true
    }
  SideDrawerClosedHandler=()=> {
    this.setState({showSideDrawer: false})

  }
  SideDrawerToggleHandler=()=>{
  //   this.setState((prevState)=>{
  //     return {showSideDrawer: !prevState.showSideDrawer};
  // });
  console.log("1", this.state.showSideDrawer);
  this.setState({showSideDrawer: !this.state.showSideDrawer},()=>{
    console.log("2", this.state.showSideDrawer);
  }
    )
  
}

  render(){
    const {showSideDrawer}=this.state
    return(
    <Aux>
      <Toolbar drawerclicked={this.SideDrawerToggleHandler}/>
    <SideDrawer open={showSideDrawer} closed={this.SideDrawerClosedHandler}/>
    <main className="Content">
      {this.props.children}
    </main>
    </Aux>
    
  );
    }
}
export default Layout;
