"use client";
import React from "react";
import { default as ArmorIcon } from "@/assets/svgs/Armor";
import Input from "@/components/Form/Input";
import { useFormContext } from "react-hook-form";

const Armor = () => {
	const { setValue, getValues, unregister } = useFormContext();

	const armor = getValues("defesa") || 10;
	// const des = getValues("attributes") || 5;
	// console.log(des);
	const updateArmorDB = () => {
		const newDefesa = {
			// des: ~~getValues("defesa.des") || 0,
			escudo: getValues("defesa.escudo") || "—",
			escudo_bonus: ~~getValues("defesa.escudo_bonus") || 0,
			escudo_penalidade: ~~getValues("defesa.escudo_penalidade") || 0,
			armadura: getValues("defesa.armadura") || "—",
			armadura_bonus: ~~getValues("defesa.armadura_bonus") || 0,
			armadura_penalidade: ~~getValues("defesa.armadura_penalidade") || 0,
			outros: ~~getValues("defesa.outros") || 0,
			penalidade:
				~~getValues("defesa.armadura_penalidade") +
				~~getValues("defesa.escudo_penalidade"),
			bns_equipamento:
				~~getValues("defesa.escudo_bonus") + ~~getValues("defesa.armadura_bonus"),
			total:
				~~getValues("defesa.bns_equipamento") +
				~~getValues("defesa.outros") +
				10 +
				~~getValues("defesa.des")
		};

		setValue("defesa", {
			...armor,
			...newDefesa
		});
		console.log({ armor });
	};

	return (
		<article className="align-start">
			<section className="grid auto-grid">
				<div style={relativeStyles}>
					<ArmorIcon width={140} height={140} />
					<input
						type="text"
						disabled
						style={absoluteStyles}
						value={getValues("defesa.total") || 10}
					/>
				</div>
				<section className="grid no-shadow no-padding fit-grid">
					{/* <Input id="defesa.des" label={"DES"} value={5} disabled /> */}
					<Input id="defesa.bns_equipamento" label={"Bônus"} disabled />
					<Input id="defesa.penalidade" label={"Penalidade"} disabled />
					<Input id="defesa.outros" label={"Outros"} onChange={updateArmorDB} />
				</section>
				<section className="span2 grid no-shadow no-padding item-3-grid">
					<Input
						id="defesa.escudo"
						label={"Escudo"}
						// inputCss="small"
						onChange={updateArmorDB}
					/>
					<Input
						id="defesa.escudo_bonus"
						label={"Def."}
						// inputCss="small"
						onChange={updateArmorDB}
					/>
					<Input
						id="defesa.escudo_penalidade"
						label={"Pen."}
						// inputCss="small"
						onChange={updateArmorDB}
					/>
					<Input
						id="defesa.armadura"
						label={"Armadura"}
						onChange={updateArmorDB}
					/>
					<Input
						id="defesa.armadura_bonus"
						label={"Def."}
						onChange={updateArmorDB}
					/>
					<Input
						id="defesa.armadura_penalidade"
						label={"Pen."}
						onChange={updateArmorDB}
					/>
				</section>
			</section>
		</article>
	);
};

export default Armor;

const absoluteStyles = {
	backgroundColor: "transparent",
	border: "transparent",
	position: "absolute",
	top: "17%",
	left: "28%",
	zIndex: 2,
	fontSize: "var(--header)",
	fontWeight: "700"
};

const relativeStyles = {
	position: "relative",
	width: "fit-content"
};

const fieldsToReset = [
	"armadura_bonus",
	"escudo_bonus",
	"escudo_penalidade",
	"armadura_penalidade",
	"des",
	"outros",
	"penalidade",
	"total",
	"armadura",
	"escudo",
	"bns_equipamento"
];

{
	/* <section className="no-padding no-shadow margin-null smaller">
						Destreza: <strong>{des}</strong>
					</section>
					<section className="no-padding no-shadow margin-null smaller">
						Bônus: <strong>{getValues("defesa.bns_equipamento")}</strong>
					</section>
					<section className="no-padding no-shadow margin-null smaller">
						Penalidade: <strong>{getValues("defesa.penalidade")}</strong>
					</section> */
}
