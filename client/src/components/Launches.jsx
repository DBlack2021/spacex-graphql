import React from 'react'
import { gql, useQuery } from '@apollo/client';

export default function Launches() {

    const LAUNCHES_QUERY = gql`
        query LaunchesQuery {
            launches {
                flight_number,
                mission_name,
                launch_date_local,
                launch_success
            }
        }
    `

    const { loading, error, data } = useQuery(LAUNCHES_QUERY);

    if (loading) return <p>Loading...</p>
    if(error) return <p>Error 😭</p>

    console.log(data);

    return (
        <div>
            <h1 className="display-4 my-3">Launches</h1>
        </div>
    )
}
