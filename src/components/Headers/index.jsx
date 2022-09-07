import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import cs from './Headers.module.scss'

const Headers = () => {
	const users = useSelector(state => state?.auth)

	return (
		<div className={cs.headers}>
			<div className={cs.logo}>
				<h1>
					<Link className={cs.link} to={'/'}>
						LOGO
					</Link>
				</h1>
			</div>

			{
				users?.accessToken
					? <div className={cs.container_info_user}>
							<img
								className={cs.avatar}
								src={
								users.photoURL
									? users.photoURL
									: 'http://cdn.onlinewebfonts.com/svg/img_264570.png'
							}
								alt=""
							/>
						</div>
					: <div className={cs.container_link}>
						<Link
							className={cs.link}
							to={'/auth/auth'}
						>
							войти
						</Link>
						<span>|</span>
						<Link
							className={cs.link}
							to={'/auth/register'}
						>
							регистрация
						</Link>
					</div>
			}
		</div>
	);
};

export default Headers;