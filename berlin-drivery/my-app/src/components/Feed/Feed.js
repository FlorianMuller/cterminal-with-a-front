import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import FeedElement from '../FeedElement/FeedElement';

import './Feed.css'

const Feed = () => {
	const [feed, setFeed] = useState([]);
	const [needColor, setneedColor] = useState(true);

	useEffect(() => {
		Axios.get('http://localhost:8080/climate-feed')
			.then(({data, ...rest}) => {
				setFeed(data)
			})
			.catch((e) => {
				console.error(e);
			});
	}, []);

	useEffect(() => {
		console.log(needColor);
	}, [needColor]);

	return (
		<div>
			<h1 className="title">Climate Feed</h1>
			<label htmlFor="needColor">
				<input
					name="needColor"
					id="needColor"
					type="checkbox"
					value={needColor}
					onChange={(e) => setneedColor(e.target.checked)}
					defaultChecked
				/> use color
			</label>
			<div className="feedList">
				{feed.map(({title, link, description}, index) => {
					return (
						<FeedElement
							key={index}
							title={title}
							link={link}
							needColor={needColor}
						></FeedElement>
					)
				})}
			</div>
		</div>
	);
};

export default Feed;
