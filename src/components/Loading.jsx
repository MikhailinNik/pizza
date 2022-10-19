import React from 'react';
import ContentLoader from 'react-content-loader';

const Loading = () => (
	<ContentLoader
		className="pizza-block"
		speed={2}
		width={280}
		height={456}
		viewBox="0 0 280 456"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb">
		<circle cx="130" cy="130" r="130" />
		<rect x="1" y="271" rx="5" ry="5" width="275" height="24" />
		<rect x="0" y="302" rx="5" ry="5" width="275" height="84" />
		<rect x="0" y="408" rx="5" ry="5" width="88" height="26" />
		<rect x="125" y="397" rx="5" ry="5" width="150" height="44" />
	</ContentLoader>
);

export default Loading;
