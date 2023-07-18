import React, { useState } from "react";
const Contact = () => {
  const [Data ,setData]=useState({
    fullname:'',
    phone:'',
    email:'',
    msg:''
  });
  const InputEvevnt=(event)=>{
    const {name,value}=event.target;
    setData((preVal)=>{
      return {
        ...preVal,
        [name]:value,
      }
    })
  }
  const FormSubmit=(e)=>{
      e.preventDefault();
      alert(`
      My Name is ${Data.fullname} My Mobile Number is ${Data.phone}`
      );
  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={FormSubmit}>
              <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" 
                className="form-control" 
                id="name"
                name='fullname'
                value={Data.fullname}
                onChange={InputEvevnt}
                placeholder="Enter Your Name" />
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="number" 
                className="form-control" 
                id="phone"
                name='phone'
                value={Data.phone}
                onChange={InputEvevnt} 
                placeholder="Enter Your Mobile Number" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" 
                className="form-control" 
                id="exampleInputEmail1"
                name='email'
                value={Data.email}
                onChange={InputEvevnt} 
                placeholder="Enter Your Email"/>
              </div>
              <div class="form-group">
                <label for="textarea">Message</label>
                <textarea className="form-control" 
                id="textarea" 
                rows='3' 
                cols='6'
                  name='msg'
                  value={Data.msg}
                  onChange={InputEvevnt}
                />
              </div>
              <br />
              <div className="col-12">
              <button type="submit" className="btn btn-outline-primary">Submit</button>
              </div>
              <br />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact;
