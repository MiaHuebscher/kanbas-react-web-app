import GradesToolbar from "./GradesToolbar";

export default function Grades() {
    return (
        <div id="wd-grades">
            <GradesToolbar />
            <div className="table-responsive p-5">
                <table className="table">
                <thead className="table-light">
                    <tr>
                        <th className="w-50">Student Name</th><th>A1 SETUP Out of 100</th>
                        <th>A2 HTML<br />Out of 100</th><th>A3 CSS<br />Out of 100</th>
                        <th>A4 BOOTSTRAP<br />Out of 100</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-danger">Jane Adams</td><td>100%</td>
                        <td>96.67%</td><td>92.18%</td><td>66.22%</td>
                    </tr>
                    <tr className="table-light">
                        <td className="text-danger">Christina Allen</td><td>100%</td>
                        <td>100%</td><td>10%</td><td>100%</td>
                    </tr>
                    <tr>
                        <td className="text-danger">Samreen Ansari</td><td>100%</td>
                        <td>100%</td><td>10%</td><td>100%</td>
                    </tr>
                    <tr className="table-light">
                        <td className="text-danger">Mia Huebscher</td><td>100%</td>
                        <td><input type="number" className="form-control" defaultValue={100}>
                            </input></td><td>100%</td><td>100%</td>
                    </tr>
                    <tr>
                        <td className="text-danger">Han Bao</td><td>100%</td>
                        <td>96.67%</td><td>100%</td><td>100%</td>
                    </tr>
                    <tr className="table-light">
                        <td className="text-danger">Siran Cao</td><td>100%</td>
                        <td>100%</td><td>100%</td><td>100%</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    )
}