const Details = ({formData, setFormData}) => {
    return (
        <div className="container-fluid mx-auto">
            <h1 className="text-center text-3xl mt-5">
                Your Details
            </h1>
            <div className="container mx-auto">
                <p className="pt-5">
                    <span>
                    First name :
                    </span>
                    <span className="pl-3">
                        { formData.firstName }
                    </span>
                </p>
                <p className="pt-5">
                    <span>
                    Last name :
                    </span>
                    <span className="pl-3">
                        { formData.lastName }
                    </span>
                </p>
                <p className="pt-5">
                    <span>
                    Email :
                    </span>
                    <span className="pl-3">
                        { formData.email }
                    </span>
                </p>
                <p className="pt-5">
                    <span>
                    Gender :
                    </span>
                    <span className="pl-3">
                        { formData.gender }
                    </span>
                </p>
                <p className="pt-5">
                    <span>
                    Address :
                    </span>
                    <span className="pl-3">
                        { formData.address }
                    </span>
                </p>
                <p className="pt-5">
                    <span>
                    Bio :
                    </span>
                    <span className="pl-3">
                        { formData.bio }
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Details;