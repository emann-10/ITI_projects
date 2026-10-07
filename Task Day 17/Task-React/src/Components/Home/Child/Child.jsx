function Child({ UserInfo }) {
    return (
        <div className="container-fluid bg-dark my-5">
            <h2 className="text-center text-light my-10">Child</h2>

            <div className="bg-light p-4">
                <h2 className="my-">
                    <strong>User Info</strong>
                </h2>

                <div className="text-start">
                    <h4>User Name: {UserInfo.userName}</h4>
                    <h4>User Age: {UserInfo.age}</h4>
                    <h4>User Job : {UserInfo.job}</h4>
                </div>
            </div>
        </div>
    );
}

export default Child;