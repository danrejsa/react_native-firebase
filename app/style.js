'use strict'
let React = require('react-native');
let {StyleSheet} = React;
const constants = {
	actionColor: '#3cb371'


}

module.exports = StyleSheet.create({

	container: {
		backgroundColor:'#f2f2f2',
		flex:1
	},
	listview: {
		flex:1

	},


	li: {
		backgroundColor:'#b3ffd9',
		borderBottomColor:'#eee',
		borderColor:'transparent',
		borderWidth:1,
		paddingTop: 14,
		paddingLeft: 10,
		paddingBottom: 16,
		marginTop: 10

	},
	liD: {
		backgroundColor:'#ffd9b3',
		borderBottomColor:'#eee',
		borderColor:'transparent',
		borderWidth:1,
		paddingTop: 14,
		paddingLeft: 10,
		paddingBottom: 16,
		marginTop: 10

	},
	liF: {
		backgroundColor:'#ffb3b3',
		borderBottomColor:'#eee',
		borderColor:'transparent',
		borderWidth:1,
		paddingTop: 14,
		paddingLeft: 10,
		paddingBottom: 16,
		marginTop: 10

	},

	li2: {
		backgroundColor:'#df80ff',
		borderBottomColor:'#eee',
		borderColor:'transparent',
		borderWidth:1,
		//width:350,
		alignSelf:'baseline',
		marginLeft:20,
		marginRight:20,
		paddingTop: 14,
		paddingLeft: 10,
		paddingBottom: 16,
		marginTop: 10,
		borderRadius: 15,


	},
	
	liText2: {
		color:'#fff',
		fontSize: 16
	},


	liContainer: {
		flex:2
	},

	navbar: {
		alignItems:'center',
		backgroundColor:'#00bfff',
		borderBottomColor:'#eee',
		borderColor:'transparent',
		//borderWidth:1,
		justifyContent:'center',
		height:44,		
		flexDirection: 'row'
	},

	navbarTitle: {
		color: '#fff',
		fontSize: 15,
		fontWeight: "500",
		height:35,

	},

	toolbar: {
		backgroundColor:'#16234A',
		height:35,
		//borderWidth:1,
		
	},

	 liText: {
	 	color:'#333',
	 	fontSize: 16
	 },

center: {
	textAlign: 'center'
},

actionText: {
	color: '#00bfff',
	fontSize: 16,
	textAlign: 'center',
	justifyContent:'center',

},

action: {

	//backgroundColor:'#0099ff',
		//borderColor:'transparent',
		borderColor:'#00bfff',
		width:160,		
		borderWidth:1,
		paddingTop: 10,		
		paddingBottom: 10,		
		marginLeft: 100,
		borderRadius: 25,
		justifyContent:'center',
		
		

},
save: {
	marginTop: 20,
	color: '#fff',
	fontSize: 16,
	textAlign: 'center',
	justifyContent:'center',
	backgroundColor: 'green',
	height:25,	
		

},

cancel: {
	marginTop: 10,
	color: '#fff',
	fontSize: 16,
	textAlign: 'center',
	justifyContent:'center',
	backgroundColor: 'red',
	height:25,
		
},

t1: {
textAlign: 'center',

marginTop: 120,	
},
t2: {
textAlign: 'center',


},
action1: {
	
		backgroundColor:'#0080ff',
			borderColor:'transparent',
			width:200,
			marginTop: 55,		
			borderWidth:1,
			paddingTop: 10,		
			paddingBottom: 10,		
			marginLeft: 80,
			color: '#fff',
			fontSize: 16,
			textAlign: 'center',
			justifyContent:'center',		
			borderRadius: 25,
			
},

action2: {	
	
			borderColor:'transparent',
			width:200,	
			marginTop: 15,	
			borderWidth:1,
			color: '#fff',
			fontSize: 16,
			textAlign: 'center',
			justifyContent:'center',
			backgroundColor: '#ff0040',
			paddingTop: 10,		
			paddingBottom: 10,		
			marginLeft: 80,
			borderRadius: 25,
},
action3: {
	
		//backgroundColor:'#0099ff',
			//borderColor:'transparent',
			borderColor:'#00bfff',
			width:200,		
			borderWidth:1,
			paddingTop: 10,		
			paddingBottom: 10,		
			//marginLeft: 50,
			borderRadius: 25,
			//justifyContent:'center',
			marginTop:50,
			alignItems:'center',
			
			
	
	},
	action4: {
		
			//backgroundColor:'#0099ff',
				//borderColor:'transparent',
				borderColor:'#00bfff',
				width:200,		
				borderWidth:1,
				paddingTop: 10,		
				paddingBottom: 10,		
				//marginLeft: 50,
				borderRadius: 25,
				//justifyContent:'center',
				marginTop:15,
				alignItems:'center',

				
				
		
		},
		action5: {
			
				//backgroundColor:'#0099ff',
					//borderColor:'transparent',
					borderColor:'#00bfff',
					width:300,		
					borderWidth:1,
					paddingTop: 10,		
					paddingBottom: 10,		
					marginLeft: 28,					
					//borderRadius: 25,
					//justifyContent:'center',
					marginTop:7,
					alignItems:'center',
	
					
					
			
			},
			
});