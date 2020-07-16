import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		"& > *": {
			margin: theme.spacing(7, 0, 0, 7)
		}
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3)
	},
	large: {
		width: theme.spacing(15),
		height: theme.spacing(15)
	}
}));

export default function ImageAvatars() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Avatar alt="Remy Sharp" className={classes.large} />
		</div>
	);
}
