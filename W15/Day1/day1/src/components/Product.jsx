import { useParams } from "react-router-dom";
const Product = (props) => {

    const params = useParams();
    console.log(params);
    return (
        <div>
        <h1>iPhone</h1>
        </div>
    );
    }

export default Product;