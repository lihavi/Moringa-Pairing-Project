
import React from 'react'

function Messaging() {
  return (
    <div className="containr d-flex justify-content-center pt-3">
    <div className="pt-0">
      <h3 className="lab">
        <u>MESSAGING</u>
      </h3>

      <div className="card cardp">
        <label htmlFor="formFile" className="form-label">
          Email:
        </label>
        <div className="form-group col-6">
          <input type="email" className="form-control" placeholder="Email" />
          <i className=" input-icon bi bi-envelope"></i>
        </div>

        <label htmlFor="formFile" className="form-label">
          Email:
        </label>
        <div className="form-group col-6">
          <input type="email" className="form-control" placeholder="Email" />
          <i className=" input-icon bi bi-envelope"></i>
        </div>

      </div>
    </div>
  </div>
  )
}

export default Messaging

