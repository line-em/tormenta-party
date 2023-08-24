"use client";
import React from 'react';
import Login from '@/components/login';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, AuthProvider, useFirebaseApp } from 'reactfire';

function Page() {
	const app = useFirebaseApp(); 
	const firestore = getFirestore(app);
    const auth = getAuth(app);
	return (
		<AuthProvider sdk={auth}>
			<FirestoreProvider sdk={firestore}>
				<Login />
			</FirestoreProvider>
		</AuthProvider>
	);
}

export default Page;
