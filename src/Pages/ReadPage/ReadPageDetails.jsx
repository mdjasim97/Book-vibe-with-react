import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { getReadsBookStorage } from '../../Utility/ReadListStore';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const ReadsPageDetails = () => {

    const books = useLoaderData()
    const [readsBook, setReadBooks] = useState([])

    useEffect(() => {
        const readStoreBookId = getReadsBookStorage()
        if (books.length > 0) {

            const storeBookData = []

            for (const id of readStoreBookId) {
                const book = books.find(book => book.id === id)
                if (book) {
                    storeBookData.push(book)
                    // console.log(readStoreBookId, book )
                }
            }
            setReadBooks(storeBookData);
        }
    }, [])

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];




    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };




    return (
        <div>
            <BarChart
                width={1350}
                height={600}
                data={readsBook}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="title" />
                <YAxis />
                <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {readsBook.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default ReadsPageDetails;