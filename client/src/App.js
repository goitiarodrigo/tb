import TableData from "./pages/TableData";


function App() {
    return (
        <div className="f-flex flex-column mb-3">
            <div className="w-100 p-2 mt-3 bg-danger">
                <span className="fs-5 fw-bold text-light">React Test App</span>
            </div>
            <TableData />
        </div>
    );
}

export default App;
