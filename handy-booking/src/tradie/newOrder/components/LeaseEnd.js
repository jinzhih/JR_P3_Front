import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		"& > *": {
			marginLeft: theme.spacing(1),
			width: theme.spacing(29),
			height: theme.spacing(6.5)
		}
	}
}));
class LeaseEnd extends React.Component {
	
	render(){
		return (
			<div className="take-order--checkbox">
				<div >
					<Paper elevation={0}>
						<FormControlLabel
							control={
								<Checkbox
									
								/>
							}
							label="This is a move out clean"
						/>
					</Paper>
				</div>
			</div>
		);
	}
}
export default LeaseEnd;
