import React, { useState, useEffect } from 'react';

import './FeedElement.css'

const colors = ["white", "#ff0000", "#00ff00", "#ffff00", "#0000ff", "#ff00ff", "#00ffff"];

const FeedElement = (props) => {
	const [color] = useState(colors[getRandomInt(colors.length)]);
	const [colorStyle, setColorStyle] = useState(
		props.needColor ? {color: color} : {}
	);

	useEffect(() => setColorStyle(
		props.needColor ? {color: color} : {}
	), [props.needColor]);

	return (
		<div className="elem">
			<a 
				className="feedLink"
				href={props.link}
				target="_blank"
				style={colorStyle}
			>
				{props.title}
			</a>
		</div>
	);
};

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
  }

export default FeedElement;
