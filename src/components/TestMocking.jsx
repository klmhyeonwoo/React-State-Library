import React, { useState } from 'react'

const Item = ({ name, age }) => {
    return (
        <li>
            name : {name} / age : {age}
        </li>
    )
}

const url = "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json?id=react";

export default function TestMocking() {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const handleClick = () => {
        fetch(url)
            .then((res) => {
                return res.json()
            })
            .then((item) => {
                if (item.errorMessage) {
                    throw new Error(item.errorMessage);
                }
                setData(item.data);
            })
            .catch((error) => {
                setError(`Something is wrong : ${error}`);
            })
    }

    const handleClick2 = () => {
        fetch('/login')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
            })
    }


    if (error) {
        return <p> {error} </p>
    }

    return (
        <div>
            <button onClick={handleClick}>
                데이터 가져오기
            </button>
            <br />
            <button onClick={handleClick2}>
                모킹 확인하기
            </button>
            {data && (
                <ul>
                    {data.people.map((item) => (
                        <Item
                            key={`${item.name}-${item.age}`}
                            name={item.name}
                            age={item.age}
                        />
                    ))}
                </ul>
            )}
        </div>
    )
}
