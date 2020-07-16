import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import BathtubOutlinedIcon from "@material-ui/icons/BathtubOutlined";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const StyledToggleButtonGroup = withStyles(theme => ({
	grouped: {
		margin: theme.spacing(1),
		border: "none",
		padding: theme.spacing(0, 3),
		"&:not(:first-child)": {
			borderRadius: theme.shape.borderRadius,
			color: "#000",
			backgroundColor: "#0001"
		},
		"&:first-child": {
			borderRadius: theme.shape.borderRadius,
			color: "#000",
			backgroundColor: "#0001"
		}
	}
}))(ToggleButtonGroup);
class Bathdrooms extends React.Component {

	render(){
		return (
			<div className="take-order--toggle-button-group">
				<Grid container>
					<Grid>
						<BathtubOutlinedIcon />
					</Grid>
					<Grid>
						<Typography>How many bathrooms do you have?</Typography>
					</Grid>
				</Grid>
	
				<StyledToggleButtonGroup
				
					aria-label="bathrooms"
				>
					<ToggleButton
						name="bathrooms"
						value="0"
						aria-label="no bathroom"
					>
						<span className="MuiTouchRipple-root">1</span>
					</ToggleButton>
					<ToggleButton
						name="bathrooms"
						value="1"
						aria-label="one bathroom"
					>
						<span className="MuiTouchRipple-root">2+</span>
					</ToggleButton>
				
				</StyledToggleButtonGroup>
			</div>
		);
	}
}

export default Bathdrooms;