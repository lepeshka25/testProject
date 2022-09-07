import React from 'react';
import Headers from "../../../components/Headers";
import cs from './Main.module.scss'

const Main = () => {
	return (
		<div className={cs.main}>
			<Headers/>
		</div>
	);
};

export default Main;