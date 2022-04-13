import { useState } from 'react';
import { Link } from 'react-router-dom';
import personal from '../img/personal.jpg'

const UserForm = ({formData, setFormData}) => {

    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
    }

    return (
        <div className="container-fluid mx-auto">
            <div className="container mx-auto">
                <div className="flex justify-center px-6">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div
                            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                            style={{backgroundImage: `url(${personal})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
                        ></div>
                        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                                            First Name
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="firstName"
                                            type="text"
                                            placeholder="First Name"
                                            required
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({...formData, firstName:e.target.value})}
                                        />
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                                            Last Name
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="lastName"
                                            type="text"
                                            placeholder="Last Name"
                                            required
                                            value={formData.lastName}
                                            onChange={(e) =>setFormData({...formData, lastName:e.target.value})}
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email:e.target.value})}
                                    />
                                </div>
                                <div className="mb-4">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="gender">
                                            Gender
                                        </label>
                                        <select name="gender" id="gender" className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                        required
                                        value={formData.gender}
                                        onChange={(e) => setFormData({...formData, gender:e.target.value})}
                                        >
                                            <option hidden> --Select Gender-- </option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="address">
                                            Address
                                        </label>
                                        <textarea className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" name="addres" id="" cols="30" rows="5" required
                                        value={formData.address}
                                        onChange={(e) => setFormData({...formData, address:e.target.value})}
                                        ></textarea>
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="bio">
                                            Bio
                                        </label>
                                        <textarea className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" name="bio"
                                        placeholder='Let us know a bit about you'
                                        id="" cols="30" rows="5" required
                                        value={formData.bio}
                                        onChange={(e) => setFormData({...formData, bio:e.target.value})}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            {
                                isPending && <div>
                                    Form submission successful, click
                                    <Link to='/user-form/details' className='text-red-500 px-1 text-lg'>
                                        here
                                    </Link>
                                     to view details
                                </div>
                            }
                            </form>
                        </div>
                    </div>
                </div>
		</div>
        </div>
    );
}

export default UserForm;