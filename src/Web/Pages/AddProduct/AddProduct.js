import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../Firebase/useAuth';
import './AddProduct.css';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user}=useAuth();

    const onSubmit = data => {
        data.email = user.email;
        data.username  = user.displayName;
        data.imageURL =user.photoURL;
        console.log(data);

        axios.post('https://jobs-window-server.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-product">
            <div>
            <h1 className="my-5 text-secondary">Post Your Job For Hiring</h1>
            <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
                <div>
                <input {...register("job_title", { required: true, maxLength: 100 })} placeholder="Job Title" />
                <input {...register("company_name", { required: true, maxLength: 100 })} placeholder="Company Name" />
                <input {...register("location", { required: true, maxLength: 100 })} placeholder="Location" />
                <input {...register("type_of_job", { required: true, maxLength: 100 })} placeholder="Type Of Job" />
                <input {...register("time", { required: true, maxLength: 100 })} placeholder="Time" />
                <textarea {...register("job_description")} placeholder="Job Description" />
                </div>
                <div>
               
                <textarea {...register("skills")} placeholder="Skills required" />
                <input type="number" {...register("total_employee")} placeholder="Total Employee In Your Company" />
                <input {...register("company_logo")} placeholder="Company Logo" />
                <input {...register("job_links", { required: true})} placeholder="Job Links For Apply" />
                {/* <input {...register("tag", { required: true, maxLength: 30 })} placeholder="Tag" /> */}
                <input className="btn btn-primary" type="submit" value="Post" />
                </div>
                
            </form>
            </div>
        </div>
    );
};

export default AddProduct;