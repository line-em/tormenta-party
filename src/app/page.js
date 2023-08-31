"use client";
import useAuth from "../store/useAuth";
import { useRouter } from "next/navigation";
import SectionHeading from "@/components/Headings/SectionHeading";
import Input from "@/components/Form/Input";
import Form from "@/components/Form/Form";
import "../styles/floating-input.css";
import "../styles/checkbox.css";

function Page() {
	const { isLoggedIn, error, login, signOut } = useAuth();
	const router = useRouter();
	const handleLogin = async (data) => {
		await login(data.email, data.password);
	};

	isLoggedIn && router.push("/aventura");

	console.log({ isLoggedIn: isLoggedIn });
	return (
		<section className="no-shadow align-start">
			<SectionHeading icon="user">Login</SectionHeading>
			<Form onSubmit={handleLogin} className="section-style" buttonText="Login">
				<Input id="email" label={"Email"} />
				<Input id="password" label={"Senha"} type="password" />
			</Form>
			{error && (
				<p>
					<strong>Error:</strong> {error}
				</p>
			)}
			{isLoggedIn && <button onClick={signOut}>Sign Out</button>}
		</section>
	);
}

export default Page;
