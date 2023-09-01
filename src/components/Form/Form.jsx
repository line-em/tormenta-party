"use client";
import { useEffect, useState } from "react";
import React from "react";
import { addData } from "@/firebase/firestore/addData";
import { useParams } from "next/navigation";
import useDataStore from "@/store/useDataStore";
import { useForm, FormProvider, get } from "react-hook-form";

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

	const watchAllFields = methods.watch();
	console.log({ watch: watchAllFields });

	const handleChanges = async (data, e) => {
		if (e) {
			e.preventDefault && e.preventDefault();
			e.persist && e.persist();
		}
		console.log("save");
		try {
			e.preventDefault();
			console.log("Validation succeeded:", data);
			const { error } = await addData("characters", currentChar.charName, {
				uid: 123,
				lastUpdate: new Date(),
				...data
			});
			if (error) {
				alert(error.message)
			} else { 
				alert("Ficha salva!");
				getCharacterByName(decodedCharName);
			}
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
			<form onSubmit={methods.handleSubmit(onSubmit ? onSubmit : handleChanges)} {...props}>
				{children}
				<footer>
					<button type="submit" disabled={Object.keys(watchAllFields).length === 0}>
						{buttonText}
					</button>
				</footer>
			</form>
		</FormProvider>
	);
};

export default Form;
