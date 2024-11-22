
function UpdateRequest(props) {
    return (
        <>
            <div className="my-3">
                ID: {props.request.registerHome.id}
            </div >
            <div className="my-3">
                Tên mảnh vườn: {props.request.registerHome.name}
            </div>
            <div className="my-3">
                Loại cây trồng: {props.request.registerHome.type}
            </div>
            <div className="my-3">
                Vị trí: {props.request.registerHome.location}
            </div>
            <div className="my-3">
                Diện tích: {props.request.registerHome.area} hecta
            </div>
        </>
    )
}

export default UpdateRequest