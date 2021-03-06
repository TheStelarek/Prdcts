import React, { ChangeEventHandler, ReactElement } from 'react';
import cx from 'classnames';
import styles from './Input.module.scss';

interface InputProps {
	id: string;
	label?: string;
	placeholder: string;
	hasIcon?: ReactElement;
	type?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	value?: string | number;
}

const Input: React.FC<InputProps> = ({ id, label, placeholder, hasIcon, type, onChange, value }) => (
	<label htmlFor={id}>
		{label && label}
		<div className={styles.wrapper}>
			<input
				id={id}
				type={type}
				className={cx(styles.input, !hasIcon && styles.inputIcon)}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
			/>
			{hasIcon && <span className={styles.icon}>{hasIcon}</span>}
		</div>
	</label>
);

export default Input;
