import React from 'react';
import {Link} from "react-router-dom";
import {BiErrorAlt} from "react-icons/bi";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {onAuthFunction} from "../../../store/auth/auth-actions";
import cs from './Auth.module.scss'

const Auth = () => {
	const [inputValue, setInputValue] = React.useState({})
	const [error, setError] = React.useState(false)
	const dispatch = useDispatch()
	const data = useSelector(state => state)
	const navigate = useNavigate()

	if(data?.auth?.accessToken){
		navigate('/')
	}

	function onSubmit() {
		dispatch(
			onAuthFunction(inputValue.gmail , inputValue.password , setError)
		)
	}

	return (
		<div className={cs.auth}>
			<Link to={'/'} className={cs.home}>
				<AiOutlineArrowLeft/>
			</Link>
			<Link className={cs.navigate} to={'/auth/register'}>
				зарегистрироваться
			</Link>
			<div style={error ? {left: '20px'} : {left: '-250px'}} className={cs.modale}>
				<p>Ошибка с данными!</p>
				<BiErrorAlt className={cs.icons}/>
			</div>
			<div className={cs.container_auth}>
				<div className={cs.left}>
					<div className={cs.container_left}>
						<div className={cs.logo}>
							<h1>Войти</h1>
						</div>
						<div className={cs.container_inputs}>
							<div>
								<input
									onInput={event => setInputValue({...inputValue, gmail: event?.target?.value})}
									type="email"
									placeholder='Почта'
								/>
							</div>
							<div>
								<input
									onInput={event => setInputValue({...inputValue, password: event?.target?.value})}
									type="password"
									placeholder='пароль'
								/>
							</div>
							<div>
								<button
									onClick={() => onSubmit()}
								>
									войти
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className={cs.right}>
					<img src="https://yt3.ggpht.com/ytc/AKedOLQLEeP4tM_RKdw00p_8uwrYP_y1vIvEmilxFjyB=s900-c-k-c0x00ffffff-no-rj"
					     alt=""/>
				</div>
			</div>
		</div>
	);
};

export default Auth;