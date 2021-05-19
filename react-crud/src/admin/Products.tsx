import React, { useEffect, useState } from 'react'
import { Product } from '../interfaces/product'
import Wrapper from './Wrapper'
import { Link } from 'react-router-dom'

const Products = () => {
    const productsUrl = 'http://127.0.0.1:8000/api/products'

    const [products, setProducts] = useState([]);
    useEffect(() => {
        (
            async () => {
                const response = await fetch(productsUrl)
                const data = await response.json()
                console.log(data)
                setProducts(data)
            }
        )()
    }, [])

    const del = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            await fetch(productsUrl + '/' + id, { method: 'DELETE' })
            setProducts(products.filter( (p:Product) => p.id !== id ))
        }
    }

    return (
        <Wrapper>
            <Link to='/admin/products/create'
                className = "btn btn-sm btn-outline-secondary"
            >Add</Link>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Likes</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    products.map((p: Product) => {
                        return (

                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td><img src={p.image} height="180"/></td>
                            <td>{p.title}</td>
                            <td>{p.likes}</td>
                            <td>
                                <button type="button" className="btn btn-outline-secondary btn-sm">
                                    <Link to={`/admin/products/${p.id}/edit`} >Edit</Link>
                                </button>
                                <button type="button" className="btn btn-danger btn-sm"
                                    onClick={() => del(p.id)}
                                >Delete</button>
                            </td>
                        </tr>

                        )
                    })
                }
                </tbody>
                </table>
            </div>
        </Wrapper>
    )
}

export default Products
