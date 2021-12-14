/* eslint-disable react/prop-types */
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import { Key, ReactChild, ReactFragment, ReactPortal } from 'react';

interface UsersProps{ 
    dataUsers: Array<any>;
}

export default function Users(props: { dataUsers: any; }) {
    // eslint-disable-next-line react/prop-types
    const {dataUsers} = props;
    const router = useRouter();

    console.log(dataUsers);
    return (
        <Layout pageTitle="Users Page">
            {dataUsers.map((user: { id: Key | null | undefined; name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; email: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
                <div key={user.id} onClick={() => router.push(`/user/${user.id}`)}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </Layout>
         
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();
    return {
        props: {
            dataUsers: dataUsers,
        }
    }
    
}
