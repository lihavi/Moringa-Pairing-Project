import React from "react";
import './feedback.css';

function Studentfeedback() {
  return (
    <div className="containr d-flex justify-content-center pt-3">
      <div className="pt-0">
        <h3 className="lab">
          <u>FEEDBACK</u>
        </h3>

        <div className="card cardp">
          <label htmlFor="formFile" className="form-label">
            Email:
          </label>
          <div className="form-group col-6">
            <input type="email" className="form-control" placeholder="Email" />
            <i className=" input-icon bi bi-envelope"></i>
          </div>
          <div className="mb-3 ">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label pt-4"
            >
              Feedback:
            </label>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: "150px" }}
              ></textarea>
              <label htmlFor="floatingTextarea2">✉️ Leave a feedback </label>
            </div>
            <div className="d-flex pbtn ">
              <button type="submit" className="mt-3 ms-5 btn btn-primary">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studentfeedback;
