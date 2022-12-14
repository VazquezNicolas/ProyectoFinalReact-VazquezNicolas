import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import { useState, useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import { getDoc, doc} from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemDetailContainer = ({ setCart}) => {
    const[product, setProduct] = useState()
    const[loading, setLoading] = useState(true)

    const { productId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {

        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(response => {

            const data = response.data()
            const productAdapted = { id: response.id, ...data }
            setProduct(productAdapted)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading){
    return (<h1>Cargando...</h1>)
    }

    return(
        <div className='ItemDetailContainer'>
            <button className='Option' onClick={() => navigate(-1)}>Back</button>
            { <ItemDetail {...product}/>}
        </div>
    )
}

export default ItemDetailContainer