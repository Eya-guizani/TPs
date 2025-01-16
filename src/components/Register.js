import React, { useState} from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import"./from.css";

const Register = () => {
    const [fromData, setFormData] = useState ({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    });
    const [errors, setErrors] =useState({});
    const[message,setMessage] =useState("");
    const navigate = useNavigate();

    const handleChange =(e) => {
        setFormData ({
            ...FormData ,
            [e.target.name]: e.target.value,
        });
        setErrors({});
    };

    const handleSubmit = async (e) => {
        e.preventDefault ();
        
        if(FormData.password.trim() !== FormData.confirmPassword.trim()) {
            setErrors ({confirmPassword : "Passwords do not match "});
            return;
        }

        try {
            const response = await axios.post("http://localhost:8000/api/books/register", FormData);

            setMessage(response.data.message);
            setTimeout(() => {
                navigate ("/login");
            },1000);
        } catch (err) {
            if (err.response && err.response.data.errors) {
                const fieldErrors ={};
                Object.keys(err.response.data.errors).forEach((key) => {
                    fieldErrors[key] =err.response.data.errors[key];
                });
                setErrors(fieldErrors);
            }else {
                setErrors({general :" Error during registration "});
            }
        }
    };
}