'use client'
import CharacterList from "@/components/CharacterList";
import SectionHeading from "@/components/Headings/SectionHeading";
import Referencias from "@/components/Referencias";
import Link from "next/link";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, AuthProvider, useFirebaseApp } from 'reactfire';

export default function Home() {
	const app = useFirebaseApp(); 
	const firestore = getFirestore(app);
    const auth = getAuth(app);
	return (
		<AuthProvider sdk={auth}>
			<FirestoreProvider sdk={firestore}>
				<section>
					<SectionHeading icon={"sword"}>Aventureiros</SectionHeading>
					<CharacterList />
					{/* <Link href="/ficha/anisha">xx</Link> */}
					{/* <SectionHeading icon={"clips"}>Recursos Adicionais</SectionHeading>
					<Referencias /> */}
				</section>
			</FirestoreProvider>
		</AuthProvider>
	);
}
