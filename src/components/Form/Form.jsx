"use client";
import { useEffect, useState } from "react";
import React from "react";
import { addData } from "@/firebase/firestore/addData";
import { useParams } from "next/navigation";
import useDataStore from "@/store/useDataStore";
import { useForm, FormProvider } from "react-hook-form";

const Form = ({ children, onSubmit = null, buttonText = "Salvar", ...props }) => {
	const params = useParams();
	const decodedCharName = decodeURIComponent(params.name);
	const { getCharacterByName, currentChar } = useDataStore();
	const methods = useForm({
		mode: "onChange",
		resetOptions: {
			keepDirtyValues: true
		},
		shouldUnregister: true,
		defaultValues: currentChar
	});

	useEffect(() => {
		console.log(decodedCharName);
		getCharacterByName(decodedCharName);
	}, [decodedCharName, getCharacterByName]);

	useEffect(() => {
		methods.reset(currentChar);
	}, [currentChar]);

	// useEffect(() => {
	// 	console.log(decodedCharName);
	// 	getCharacterByName(decodedCharName);
	// 	methods.reset(currentChar);
	// }, [decodedCharName]);

	const watchAllFields = methods.watch();
	console.log({ watch: watchAllFields });

	const handleChanges = async (data, e) => {
		if (e) {
			e.preventDefault && e.preventDefault();
			e.persist && e.persist();
		}
		console.log("click");
		try {
			e.preventDefault();
			console.log("Validation succeeded:", data);
			const { error } = await addData("characters", data.charName, {
				uid: 123,
				lastUpdate: new Date(),
				...data
			});
			error ? alert(error.message) : alert("Ficha salva!");
		} catch (error) {
			if (error.name === "ValidationError") {
				const validationErrors = error.inner.reduce((errors, err) => {
					return { ...errors, [err.path]: err.message };
				}, {});

				console.error("Validation errors:", validationErrors);
			} else {
				console.error("Other error:", error);
			}
		}
	};

	return (
		<FormProvider {...methods}>
			<form {...props}>
				{children}
				<footer>
					<button
						type="submit"
						onSubmit={methods.handleSubmit(
							onSubmit ? onSubmit : handleChanges
						)}
					>
						{buttonText}
					</button>
				</footer>
			</form>
		</FormProvider>
	);
};

export default Form;
