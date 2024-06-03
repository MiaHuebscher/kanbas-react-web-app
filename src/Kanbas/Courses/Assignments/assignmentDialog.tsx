export default function AssignmentDialog({ dialogTitle, assignmentId, deleteAssignment } : 
    { dialogTitle: any; assignmentId: string; deleteAssignment: (assignmentId: string) => void; }) {
      if (!assignmentId) return null;
      return (
        <div>
          <div id={`wd-delete-assignment-dialog-${assignmentId}`} className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    {dialogTitle} </h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    No </button>
                  <button onClick={() => deleteAssignment(assignmentId)} type="button" data-bs-dismiss="modal" className="btn btn-danger">
                    Yes </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}