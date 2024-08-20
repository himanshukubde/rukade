import React from 'react'

const Client = () => {
  return (
    <div>
     <div className="page-content">
  {/*breadcrumb*/}
  <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
    <div className="breadcrumb-title pe-3">Clients</div>
    <div className="ps-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 p-0">
          <li className="breadcrumb-item">
            <a href="javascript:;">
              <i className="bx bx-home-alt" />
            </a>
          </li>
         
        </ol>
      </nav>
    </div>
    <div className="ms-auto">
      <div className="btn-group">
        <button type="button" className="btn btn-primary">
          Settings
        </button>
        <button
          type="button"
          className="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {" "}
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <div
          className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end"
          style={{}}
        >
          {" "}
          <a className="dropdown-item" href="javascript:;">
            Action
          </a>
          <a className="dropdown-item" href="javascript:;">
            Another action
          </a>
          <a className="dropdown-item" href="javascript:;">
            Something else here
          </a>
          <div className="dropdown-divider" />{" "}
          <a className="dropdown-item" href="javascript:;">
            Separated link
          </a>
        </div>
      </div>
    </div>
  </div>
  {/*end breadcrumb*/}
  <div className="card">
    <div className="card-body">
      <div className="d-lg-flex align-items-center mb-4 gap-3">
        <div className="position-relative">
          <input
            type="text"
            className="form-control ps-5 radius-10"
            placeholder="Search Order"
          />{" "}
          <span className="position-absolute top-50 product-show translate-middle-y">
            <i className="bx bx-search" />
          </span>
        </div>
        <div className="ms-auto">
          <a
            href="javascript:;"
            className="btn btn-primary radius-10 mt-2 mt-lg-0"
          >
            <i className="bx bxs-plus-square" />
            Add New Client
          </a>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table mb-0">
          <thead className="table-light">
            <tr>
              <th>Order#</th>
              <th>Company Name</th>
              <th>Status</th>
              <th>Total</th>
              <th>Date</th>
              <th>View Details</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <div>
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      aria-label="..."
                    />
                  </div>
                  <div className="ms-2">
                    <h6 className="mb-0 font-14">#OS-000354</h6>
                  </div>
                </div>
              </td>
              <td>Gaspur Antunes</td>
              <td>
                <div className="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3">
                  <i className="bx bxs-circle me-1" />
                  FulFilled
                </div>
              </td>
              <td>$485.20</td>
              <td>June 10, 2020</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary btn-sm radius-10 px-4"
                >
                  View Details
                </button>
              </td>
              <td>
                <div className="d-flex order-actions">
                  <a href="javascript:;" className="">
                    <i className="bx bxs-edit" />
                  </a>
                  <a href="javascript:;" className="ms-3">
                    <i className="bx bxs-trash" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <div>
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      aria-label="..."
                    />
                  </div>
                  <div className="ms-2">
                    <h6 className="mb-0 font-14">#OS-000986</h6>
                  </div>
                </div>
              </td>
              <td>Gaspur Antunes</td>
              <td>
                <div className="badge rounded-pill text-info bg-light-info p-2 text-uppercase px-3">
                  <i className="bx bxs-circle align-middle me-1" />
                  Confirmed
                </div>
              </td>
              <td>$650.30</td>
              <td>June 12, 2020</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary btn-sm radius-10 px-4"
                >
                  View Details
                </button>
              </td>
              <td>
                <div className="d-flex order-actions">
                  <a href="javascript:;" className="">
                    <i className="bx bxs-edit" />
                  </a>
                  <a href="javascript:;" className="ms-3">
                    <i className="bx bxs-trash" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <div>
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      aria-label="..."
                    />
                  </div>
                  <div className="ms-2">
                    <h6 className="mb-0 font-14">#OS-000536</h6>
                  </div>
                </div>
              </td>
              <td>Gaspur Antunes</td>
              <td>
                <div className="badge rounded-pill text-warning bg-light-warning p-2 text-uppercase px-3">
                  <i className="bx bxs-circle align-middle me-1" />
                  Partially shipped
                </div>
              </td>
              <td>$159.45</td>
              <td>June 14, 2020</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary btn-sm radius-10 px-4"
                >
                  View Details
                </button>
              </td>
              <td>
                <div className="d-flex order-actions">
                  <a href="javascript:;" className="">
                    <i className="bx bxs-edit" />
                  </a>
                  <a href="javascript:;" className="ms-3">
                    <i className="bx bxs-trash" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <div>
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      aria-label="..."
                    />
                  </div>
                  <div className="ms-2">
                    <h6 className="mb-0 font-14">#OS-000678</h6>
                  </div>
                </div>
              </td>
              <td>Gaspur Antunes</td>
              <td>
                <div className="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3">
                  <i className="bx bxs-circle align-middle me-1" />
                  FulFilled
                </div>
              </td>
              <td>$968.40</td>
              <td>June 16, 2020</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary btn-sm radius-10 px-4"
                >
                  View Details
                </button>
              </td>
              <td>
                <div className="d-flex order-actions">
                  <a href="javascript:;" className="">
                    <i className="bx bxs-edit" />
                  </a>
                  <a href="javascript:;" className="ms-3">
                    <i className="bx bxs-trash" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <div>
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      aria-label="..."
                    />
                  </div>
                  <div className="ms-2">
                    <h6 className="mb-0 font-14">#OS-000457</h6>
                  </div>
                </div>
              </td>
              <td>Gaspur Antunes</td>
              <td>
                <div className="badge rounded-pill text-info bg-light-info p-2 text-uppercase px-3">
                  <i className="bx bxs-circle align-middle me-1" />
                  Confirmed
                </div>
              </td>
              <td>$689.50</td>
              <td>June 18, 2020</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary btn-sm radius-10 px-4"
                >
                  View Details
                </button>
              </td>
              <td>
                <div className="d-flex order-actions">
                  <a href="javascript:;" className="">
                    <i className="bx bxs-edit" />
                  </a>
                  <a href="javascript:;" className="ms-3">
                    <i className="bx bxs-trash" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <div>
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      aria-label="..."
                    />
                  </div>
                  <div className="ms-2">
                    <h6 className="mb-0 font-14">#OS-000685</h6>
                  </div>
                </div>
              </td>
              <td>Gaspur Antunes</td>
              <td>
                <div className="badge rounded-pill text-info bg-light-info p-2 text-uppercase px-3">
                  <i className="bx bxs-circle align-middle me-1" />
                  Confirmed
                </div>
              </td>
              <td>$478.60</td>
              <td>June 20, 2020</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary btn-sm radius-10 px-4"
                >
                  View Details
                </button>
              </td>
              <td>
                <div className="d-flex order-actions">
                  <a href="javascript:;" className="">
                    <i className="bx bxs-edit" />
                  </a>
                  <a href="javascript:;" className="ms-3">
                    <i className="bx bxs-trash" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <div>
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      aria-label="..."
                    />
                  </div>
                  <div className="ms-2">
                    <h6 className="mb-0 font-14">#OS-000356</h6>
                  </div>
                </div>
              </td>
              <td>Gaspur Antunes</td>
              <td>
                <div className="badge rounded-pill text-warning bg-light-warning p-2 text-uppercase px-3">
                  <i className="bx bxs-circle align-middle me-1" />
                  Partially shipped
                </div>
              </td>
              <td>$523.30</td>
              <td>June 21, 2020</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary btn-sm radius-10 px-4"
                >
                  View Details
                </button>
              </td>
              <td>
                <div className="d-flex order-actions">
                  <a href="javascript:;" className="">
                    <i className="bx bxs-edit" />
                  </a>
                  <a href="javascript:;" className="ms-3">
                    <i className="bx bxs-trash" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <div>
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      aria-label="..."
                    />
                  </div>
                  <div className="ms-2">
                    <h6 className="mb-0 font-14">#OS-000875</h6>
                  </div>
                </div>
              </td>
              <td>Gaspur Antunes</td>
              <td>
                <div className="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3">
                  <i className="bx bxs-circle align-middle me-1" />
                  FulFilled
                </div>
              </td>
              <td>$960.20</td>
              <td>June 24, 2020</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary btn-sm radius-10 px-4"
                >
                  View Details
                </button>
              </td>
              <td>
                <div className="d-flex order-actions">
                  <a href="javascript:;" className="">
                    <i className="bx bxs-edit" />
                  </a>
                  <a href="javascript:;" className="ms-3">
                    <i className="bx bxs-trash" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <div>
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      aria-label="..."
                    />
                  </div>
                  <div className="ms-2">
                    <h6 className="mb-0 font-14">#OS-000658</h6>
                  </div>
                </div>
              </td>
              <td>Gaspur Antunes</td>
              <td>
                <div className="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3">
                  <i className="bx bxs-circle align-middle me-1" />
                  FulFilled
                </div>
              </td>
              <td>$428.10</td>
              <td>June 25, 2020</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary btn-sm radius-10 px-4"
                >
                  View Details
                </button>
              </td>
              <td>
                <div className="d-flex order-actions">
                  <a href="javascript:;" className="">
                    <i className="bx bxs-edit" />
                  </a>
                  <a href="javascript:;" className="ms-3">
                    <i className="bx bxs-trash" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <div>
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      aria-label="..."
                    />
                  </div>
                  <div className="ms-2">
                    <h6 className="mb-0 font-14">#OS-000689</h6>
                  </div>
                </div>
              </td>
              <td>Gaspur Antunes</td>
              <td>
                <div className="badge rounded-pill text-warning bg-light-warning p-2 text-uppercase px-3">
                  <i className="bx bxs-circle align-middle me-1" />
                  Partially shipped
                </div>
              </td>
              <td>$876.60</td>
              <td>June 26, 2020</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary btn-sm radius-10 px-4"
                >
                  View Details
                </button>
              </td>
              <td>
                <div className="d-flex order-actions">
                  <a href="javascript:;" className="">
                    <i className="bx bxs-edit" />
                  </a>
                  <a href="javascript:;" className="ms-3">
                    <i className="bx bxs-trash" />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
 
    </div>
  )
}

export default Client
