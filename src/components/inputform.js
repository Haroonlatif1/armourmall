import React, { useContext, useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import  { contextz } from "./context";
import Errorpop from "./inputformpop"
import "./inputform.css"
const Inputform = () => {
    const bb=useContext(contextz)
    const {newarrival}=bb
    const {setnewarrival}=bb
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(""); 
    const [quantity, setquantity] = useState(1); 
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };
  const [image,setimage]=useState(null)
    const handleImageChange = (e) => {

        const img =e.target.files[0]
        setimage(img);
        if (img) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setimage(reader.result);
            };
            reader.readAsDataURL(img);
          }
    };
    const handleSubmit = (e) => {
        if (title.length !== 0 && description.length !== 0 && price.length !== 0 && image.length !== 0)
        { e.preventDefault();
            setnewarrival([
                ...newarrival,
                {
                    id: Date.now().toString(),
                    title: title,
                    desc: description,
                    price: price,
                    quantity:quantity,
                    imag:image
                },
            ]);
            setTitle("");
            setDescription("");
            setPrice(""); 
            setimage('')
           
        }
        else{
            e.preventDefault()
           setPaymentSuccessModalOpen(true)
           setTimeout(() => {
            setPaymentSuccessModalOpen(false)
           }, 3000);
       }
    };
    const [paymentSuccessModalOpen, setPaymentSuccessModalOpen] = useState(false); //error popup control

    return (
<><div className='bg-dark'><div className="container p-3">
                <Card>
                <Form className="custom-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Product Title"
                    name="title"
                    value={title}
                    onChange={handleTitleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Price</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Product Price"
                    name="price"
                    value={price}
                    onChange={handlePriceChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="Description"
                    name="description"
                    value={description}
                    onChange={handleDescriptionChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Product Image</Form.Label>
                <Form.Control
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={handleImageChange}
                />
            </Form.Group>
            <Button variant="success" type="submit">
                Submit
            </Button>
        </Form>
                </Card>
            </div></div><Errorpop isOpen={paymentSuccessModalOpen}/>
            </>
    );
};

export default Inputform;
