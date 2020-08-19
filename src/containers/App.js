import React,{Component}from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import {Scroll} from "../components/Scroll";
import "./App.css";



export default class App extends Component{
	constructor(){
		super()
		this.state={
			robots:[],
			searchfield:''
		}
	}
	onSearchChange(event){
		this.setState({searchfield:event.target.value}); 
	}
	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(users=>{
			this.setState({robots:users});
		}).catch(err=>{return console.log(err)});
	}
	render(){
		const {robots,searchfield}= this.state;
		const filteredRobots = robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		if(this.state.robots.length===0){ 
			return <h3> Loading ...........</h3>
		}else{
			return (
			<div className="tc">
				<h1>RoboFriends</h1>
				<SearchBox  searchField={this.state.searchField} searchChange={this.onSearchChange.bind(this)} />
				<Scroll>
				<CardList  robots={filteredRobots} />
				</Scroll>
				</div>
				);
		}
	}
}

