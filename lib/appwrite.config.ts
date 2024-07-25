import * as sdk from 'node-appwrite'

export const {
    PROJECT_ID, API_KEY, DATABASE_ID, PATIENT_COLLECTION_ID, DOCTOR_COLLECTION_ID, APPOINTMENT_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
    NEXT_PUBLIC_ENDPOINT: ENDPOINT
} = process.env;

const client = new sdk.Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('668e9f61001dc02d8030')
    .setKey('b234c3cf40ea8869a0cefe72421b82814e46bd038b3fc35720785e4be679c1f76ecd984cdba183161ea5a8b2e02a089903553ce975ae6adf0a5337f4f62f01bbace2b2960fd919fc0a546df79f1e1a326eb8286bc3d436d9ac80384f0bfaa2728827d747b4f6fe42e211efba8a51dce59f3b75bc9033b7aa72435c30e5d3b420');

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
