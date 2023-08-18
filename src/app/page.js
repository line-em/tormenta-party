"use client";
import React from "react";
import signIn from "@/firebase/auth/signin";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import SectionHeading from "@/components/Headings/SectionHeading";
import "@/styles/floating-input.css";

function Page() {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const { user } = useAuthContext()
	const router = useRouter();

	React.useEffect(() => {
        if (user) router.push("/aventura")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

	const handleForm = async (event) => {
		event.preventDefault();
		const { error } = await signIn(email, password);

		error && alert(error.message);
	};
	return (
		<section className="no-shadow align-start">
			<SectionHeading icon="user">Login</SectionHeading>
			<form onSubmit={handleForm} className="section-style">
				<div className="floating-label">
					<input
						onChange={(e) => setEmail(e.target.value)}
						required
						type="email"
						name="email"
						id="email"
						className="floating-input"
						placeholder=" "
					/>
					<label htmlFor="email" className="floating-text">
						Email
					</label>
				</div>
				<div className="floating-label">
					<input
						onChange={(e) => setPassword(e.target.value)}
						required
						type="password"
						name="password"
						id="password"
						placeholder="******"
						className="floating-input"
					/>
					<label htmlFor="password" className="floating-text">
						Password
					</label>
				</div>
				<button type="submit">Sign in</button>
			</form>
		</section>
	);
}

export default Page;
