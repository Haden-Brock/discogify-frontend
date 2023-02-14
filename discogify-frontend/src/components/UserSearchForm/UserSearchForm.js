import React, {useState} from 'react'
import './UserSearchForm.css';

function DiscogsUserSearchForm({ handleUserSearchFormSubmit }) {
	const [username, setUsername] = useState('');

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		handleUserSearchFormSubmit(username);
	}

	return (
		<form className="form" onSubmit={handleSubmit}>
			<input 
				type="text" 
				placeholder="Discogs username"
				minLength="1"
				maxLength="40"
				value={username} 
				name="text" 
				className="form__input form__input_type_username"
				onChange={handleUsernameChange}
				required
			/>
			<span className="username__input-error form__input-error"></span>
			<button className="form__submit" type="submit">
				Search
			</button>
		</form>
	);
}

export default DiscogsUserSearchForm;