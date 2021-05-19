import React, { SyntheticEvent, useEffect, useState } from 'react'
import Wrapper from './Wrapper'
import { Redirect } from 'react-router-dom'
import { PropsWithRef } from 'react'
import { Product } from '../interfaces/product'

const ProductsEdit = (props: PropsWithRef<any>) => {
    const productsUrl = 'http://127.0.0.1:8000/api/products'

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        (
            async () => {
                const response = await fetch(productsUrl + '/' + props.match.params.id)
                const product: Product = await response.json()
                setTitle(product.title)
                setImage(product.image)
            }
        )()
    }, [])

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()

        await fetch(productsUrl + '/' + props.match.params.id, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, image }),
        })
        setRedirect(true)
    }

    if (redirect) {
        return <Redirect to={'/admin/products'} />
    }
    return (
        <Wrapper>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" name="title"
                        defaultValue={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input type="text" className="form-control" name="image"
                        defaultValue={image}
                        onChange={e => setImage(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </Wrapper>
    )
}

export default ProductsEdit
