import {Client, Account, Databases} from 'appwrite'


const client = new Client();

client
    .setEndpoint('http://13.233.150.112/v1')
    .setProject('6442c923ef67bba9ec2c');


export const account = new Account(client)

export const databases = new Databases(client, '6442c9bb274b82f6a110')