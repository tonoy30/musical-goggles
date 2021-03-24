import React from "react";
import {
	Container,
	Form,
	FormButton,
	FormContent,
	FormH1,
	FormInput,
	FormLabel,
	FormWrapper,
	Icon,
	Text,
} from "./SigninElements";

const Signin = () => {
	return (
		<Container>
			<FormWrapper>
				<Icon to="/">dolla</Icon>
				<FormContent>
					<Form>
						<FormH1>Sign in to your account</FormH1>
						<FormLabel>Email</FormLabel>
						<FormInput type="email" required />
						<FormLabel>Password</FormLabel>
						<FormInput type="password" required />
						<FormButton type="submit">Continue</FormButton>
						<Text>Forget Password</Text>
					</Form>
				</FormContent>
			</FormWrapper>
		</Container>
	);
};

export default Signin;
