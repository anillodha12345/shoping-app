import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.scss';
import { toast, ToastContainer } from 'react-toastify';
import Header from '../../components/layout/Header/Header';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { firstname, lastname, email, password, phone, gender, language, date, address, city, image } = data;
    try {
      const templateParams = {
        firstname,
        lastname,
        email,
        password,
        phone,
        gender,
        language,
        date,
        address,
        city,
        image,
      };
      console.log(templateParams);
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  const toastifySuccess = () => {
    toast.success('User Registration Successfully', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  return (
    <>
      <Header />
      <div className='Container mx-auto p-0'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='container-fluid register_from p-0'>
            <div className='row'>
              <div className='col-md-6 mt-4 mb-4 mx-auto from_register '>
                <h3 className='text-center'>Registration Form</h3>
                <div className='row '>
                  <div className='col-lg-6 col-md-6   form_padding mb-1'>
                    <label for='fname'>First Name</label>
                    <br />
                    <input
                      type='text '
                      name='firstname'
                      id='fname'
                      // className='col-lg-12   Field_field'
                      className='form-control   '
                      placeholder='Enter First Name'
                      maxLength='20'
                      {...register('firstname', {
                        required: 'Please enter first Name',
                        minLength: {
                          value: 4,
                          message: 'please enter your fullname minimum 4 character',
                        },
                      })}
                    />

                    {errors.firstname && <div className='error'>{errors.firstname?.message} </div>}
                  </div>
                  <div className='col-lg-6 col-md-6  form_padding mb-1'>
                    <label>Last Name </label>
                    <br />
                    <input
                      type='text'
                      name='lastname'
                      id='Last_Name'
                      // className='col-md-12 Field_field '
                      className='form-control  '
                      placeholder='Enter Last Name'
                      maxLength='20'
                      {...register('lastname', {
                        required: 'Please enter Last Name',
                        minLength: {
                          value: 4,
                          message: 'please enter your fullname minimum 4 character',
                        },
                      })}
                    />
                    {errors.lastname && <div className=' error'> {errors.lastname.message} </div>}
                  </div>
                </div>
                <div className='row '>
                  <div className='col-lg-6 mt-1 col-md-6 form_padding mb-2'>
                    <label>Email </label>
                    <br />
                    <input
                      type='email'
                      name='email'
                      // className='col-md-12  Field_field'
                      className='form-control '
                      placeholder='Enter your Email'
                      {...register('email', {
                        required: 'Please enter Email',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email format',
                        },
                      })}
                    />
                    {errors.email && <div className='  error'> {errors.email.message} </div>}
                  </div>
                  <div className='col-lg-6 mt-1 col-md-6 form_padding mb-1'>
                    <label>Password :- </label>
                    <br />
                    <input
                      type='password'
                      name='password'
                      // className='col-md-12 Field_field '
                      className='form-control '
                      placeholder='Enter your  password'
                      {...register('password', {
                        required: 'Please enter Password',
                        minLength: {
                          value: 4,
                          message: 'Password must have at least 8 characters',
                        },
                        pattern: {
                          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                          message: 'password should contain atleast one number and one special character',
                        },
                      })}
                    />
                    {errors.password && <div className='  error'> {errors.password.message} </div>}
                  </div>
                </div>
                <div className='row   mb-1'>
                  <div className='col-lg-6 mt-2  col-md-6 form_padding mb-2'>
                    <label>Phone No. :- </label>
                    <br />
                    <input
                      type='text'
                      name='phone'
                      // className='col-md-12 Field_field'
                      className='form-control '
                      placeholder='Enter your Phone Number'
                      maxLength='10'
                      {...register('phone', {
                        required: 'Please enter Phone Number',
                        pattern: {
                          value: /^([+]?[s0-9]+)?(d{3}|[(]?[0-9]+[)])?([-]?[s]?[0-9])+$/i,
                          message: 'please Enter your valid phone number 10 digit maximum',
                        },
                      })}
                    />
                    {errors.phone && <div className='  error'> {errors.phone.message} </div>}
                  </div>
                  <div className='col-lg-6 col-md-6 mt-1 mb-2 padding_form  '>
                    <label>Gender: </label>
                    <br />
                    <label>Male </label>
                    &nbsp;
                    <input
                      type='radio'
                      value='male'
                      name='gender'
                      {...register('radio', { required: 'Please enter Gender' })}
                    />{' '}
                    &nbsp;
                    <label>Female</label> &nbsp;
                    <input
                      type='radio'
                      value='female'
                      name='gender'
                      {...register('radio', { required: 'Please enter Gender' })}
                    />
                    &nbsp;
                    <label>other</label>&nbsp;
                    <input
                      type='radio'
                      value='other'
                      name='gender'
                      {...register('radio', { required: 'Please enter Gender' })}
                    />
                    {errors.radio && <div className='form-text error '>{errors.radio.message} </div>}
                  </div>
                </div>
                <div className='row '>
                  <div className='col-lg-6 col-md-6  mt-2 col-md-6form_padding'>
                    <label> Select Language</label>
                    <br />
                    <select
                      className='form-control '
                      {...register('language', {
                        required: 'Please enter Select Language',
                      })}
                      name='language'
                    >
                      <option value=''>----Select your language ----- </option>
                      <option value='html'>HTML</option>
                      <option value='css'>CSS</option>
                      <option value='javascript'>JAVASCRIPT</option>
                      <option value='react js'>REACT JS </option>
                      <option value='next js'>NEXT JS </option>
                    </select>
                    {errors.language && <div className='  error'>{errors.language.message} </div>}
                  </div>

                  <div className='col-lg-6 mt-2 col-md-6 form_padding mb-2 bg-white'>
                    <label>Date </label>
                    <br />
                    <input
                      type='date'
                      className='form-control  '
                      name='date'
                      {...register('date', {
                        required: 'Please enter Date',
                      })}
                    />
                    {errors.date && <div className='is-valid-feedback  error'>{errors.date.message} </div>}
                  </div>
                </div>
                <div className='row '>
                  <div className='col-lg-6 col-md-6 mt-2 form_padding '>
                    <label>Address :- </label>
                    <br />
                    <textarea
                      type='textarea'
                      name='address'
                      rows='2'
                      cols='20'
                      minLength='10'
                      ref={register}
                      className='form-control  '
                      {...register('address', {
                        required: 'This field is required address',
                        minLength: {
                          value: 10,
                          message: 'please enter your Address minimum 10 character',
                        },
                      })}
                    />
                    {errors.address && <div className='  error'>{errors.address.message} </div>}
                  </div>

                  <div className='col-lg-6 col-md-6  mt-2 col-md-6form_padding'>
                    <label> Select City</label>
                    <br />
                    <select
                      className='form-control   mt-2'
                      {...register('city', {
                        required: 'Please enter city',
                      })}
                      name='city'
                    >
                      <option value=''>----Select your City----- </option>
                      <option value='guna'>GUNA</option>
                      <option value='bhopal'>BHOPAL</option>
                      <option value='gwalior'>GWALIOR</option>
                      <option value='ujjain'>UJJAIN</option>
                    </select>
                    {errors.city && <div className='  error'>{errors.city.message} </div>}
                  </div>
                </div>
                <div className='row mt-2 '>
                  <div className='col-lg-6 col-md-6 col-sm-6  mt-3 form_padding'>
                    <label>Select a file:</label>
                    <br />
                    <input
                      type='file'
                      name='image'
                      className='form-control  '
                      {...register('image', {
                        required: 'Please enter Image',
                        validate: {
                          lessThan10MB: (files) => files[0]?.size < 1000000 || 'Please Select 1Kb to 1MB',
                          acceptedFormats: (files) =>
                            ['image/jpeg', 'image/png', 'image/gif'].includes(files[0]?.type) || 'Only PNG, JPEG e GIF',
                        },
                      })}
                    />
                    {errors.image && <div className='  text-field  error'>{errors.image.message} </div>}
                  </div>

                  <div className='row mt-5 button_submit col-sm-6  col-md-6 col-lg-6 justify-content-center'>
                    <div className='col-lg-6  col-md-6  col-sm-6 form_padding '>
                      <button type='submit' value='submit'>
                        submit
                      </button>
                      <ToastContainer />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Contact;

// {
//   // /*; */
// }
// {
//   /* <i class='fa fa-exclamation-circle' aria-hidden='true'></i>; */
// }
