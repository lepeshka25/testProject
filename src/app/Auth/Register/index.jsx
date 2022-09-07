import React from 'react';
import {BiErrorAlt} from 'react-icons/bi'
import {useDispatch, useSelector} from "react-redux";
import {createNewUser} from "../../../store/auth/auth-actions";
import {useNavigate} from 'react-router'
import {Link} from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/ai";
import cs from './Register.module.scss'

const Register = () => {
	const [inputValue, setInputValue] = React.useState({})
	const [error, setError] = React.useState(false)
	const dispatch = useDispatch()
	const data = useSelector(state => state)
	const navigate = useNavigate()

	if(data?.auth.accessToken){
		navigate('/')
	}

	const mail = ['@gmail.com', '@yandex.ru', '@mail.ru']

	function onSubmit() {
		let boolMail = false;

		for (let i = 0; i < mail.length; i++) {
			if (inputValue.gmail.includes(mail[i])) {
				boolMail = true
			}
		}

		if (inputValue.password === inputValue.password2) {
			if (boolMail) {
				dispatch(createNewUser(inputValue.gmail, inputValue.password, inputValue.names))
				navigate('/')
			} else {
				setError(true)
			}
		} else {
			setError(true)
		}
	}

	return (
		<div className={cs.register}>
			<Link to={'/'} className={cs.home}>
				<AiOutlineArrowLeft/>
			</Link>
			<Link className={cs.navigate} to={'/auth/auth'}>
				Войти
			</Link>
			<div style={error ? {left: '20px'} : {left: '-250px'}} className={cs.modale}>
				<p>Ошибка с данными!</p>
				<BiErrorAlt className={cs.icons}/>
			</div>
			<div className={cs.container_register}>
				<div className={cs.left}>
					<div className={cs.container_left}>
						<div className={cs.logo}>
							<h1>Register</h1>
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
									onInput={event => setInputValue({...inputValue, names: event?.target?.value})}
									type="text"
									placeholder='Имя'
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
								<input
									onInput={event => setInputValue({...inputValue, password2: event?.target?.value})}
									type="password"
									placeholder='пароль'
								/>
							</div>
							<div>
								<button
									onClick={() => onSubmit()}
								>
									зарегистрироваться
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

export default Register;