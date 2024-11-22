

function DeleteRequest(props) {

    return (
        <>
            <div className="my-3">
                ID: {props.request.registerHome.id}
            </div>
            <div className="my-3">
                Tên mảnh vườn: {props.request.registerHome.name}
            </div>
        </>
    )
}

export default DeleteRequest