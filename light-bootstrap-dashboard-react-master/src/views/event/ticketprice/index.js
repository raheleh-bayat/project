import "./index.css";
export const TicketPrice =() => {
    return (
      <div>
        <h5>Ticket Price</h5>
        <div className="bg-light card-body Div-button">
          <button
            type="button"
            class="btn btn-falcon-default btn-sm "
            className="ticketprice-btn"
          >
            Free
            <span class="d-none d-sm-inline">Ticket</span>
          </button>
          <button
            type="button"
            class="ms-2 btn btn-falcon-primary btn-sm "
            className="ticketprice-btn"
          >
            Paid
            <span class="d-none d-sm-inline">Ticket</span>
          </button>
          <button
            type="button"
            class="ms-2 btn btn-falcon-default btn-sm "
            className="ticketprice-btn"
          >
            Donation
          </button>
        </div>
        <hr></hr>
        <h6 class="fs-0">Pricing Options:</h6>
        <div class="form-check">
          <input
            type="checkbox"
            id="variablePricingCheckbox"
            class="form-check-input"
            checked=""
          />
          <label
            title=""
            for="variablePricingCheckbox"
            class="form-check-label"
            className="ticketprice-text"
          >
            Enable varible pricing
          </label>
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            id="purchaseModeCheckbox"
            class="form-check-input"
          />

          <label
            title=""
            for="purchaseModeCheckbox"
            class="form-check-label"
            className="ticketprice-text"
          >
            Enable multi-option purchase mode.
          </label>
        </div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Option Name</th>
              <th scope="col">Price</th>
              <th scope="col">Default</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
              <input className="ticketprice-table" placeholder="Optional Name"/>
              </td>
              <td>
                <div class="input-group-prepend input-group-sm">
                  <span class="input-group-text" id="inputGroupPrepend">
                    $
                  </span>
                  <input
                    placeholder="Price"
                    aria-label="Dollar amount (with dot and two decimal places)"
                    step="0.01"
                    type="number"
                    class="form-control"
                    value="5"
                    // className="ticketprice-input"
                  ></input>
                </div>
              </td>
              <td>
                <div
                  class="text-center align-middle"
                  className="ticketprice-div-input"
                >
                  {" "}
                  <input
                    type="radio"
                    id="ticketChecked1"
                    class="form-check-input"
                    checked=""
                  ></input>
                </div>
              </td>
              <td class="text-center align-middle">
                <i class="bi bi-x-circle-fill"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x-circle-fill"
                  viewBox="0 0 16 16"
                  className="ticketprice-icon"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>
              <input
                className="ticketprice-table2"
                placeholder="Green gallery"
              />
              </td>

              <td>
                <div class="input-group-prepend input-group-sm">
                  <span class="input-group-text" id="inputGroupPrepend">
                    $
                  </span>
                  <input
                    placeholder="Price"
                    aria-label="Dollar amount (with dot and two decimal places)"
                    step="0.01"
                    type="number"
                    class="form-control"
                    value="5"
                    // className="ticketprice-input"
                  ></input>
                </div>
              </td>
              <td>
                <div
                  class="text-center align-middle"
                  className="ticketprice-div-input"
                >
                  {" "}
                  <input
                    type="radio"
                    id="ticketChecked1"
                    class="form-check-input"
                    checked=""
                  ></input>
                </div>
              </td>
              <td class="text-center align-middle">
                <i class="bi bi-x-circle-fill"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x-circle-fill"
                  viewBox="0 0 16 16"
                  className="ticketprice-icon"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>
              <input
                placeholder="Option Name"
                className="ticketprice-table3"
              />
              </td>
              <td>
                <div class="input-group-prepend input-group-sm">
                  <span class="input-group-text" id="inputGroupPrepend">
                    $
                  </span>
                  <input
                    placeholder="Price"
                    aria-label="Dollar amount (with dot and two decimal places)"
                    step="0.01"
                    type="number"
                    class="form-control"
                    value="5"
                    // className="ticketprice-input"
                  ></input>
                </div>
              </td>
              <td>
                <div
                  class="text-center align-middle"
                  className="ticketprice-div-input"
                >
                  {" "}
                  <input
                    type="radio"
                    id="ticketChecked1"
                    class="form-check-input"
                    checked=""
                  ></input>
                </div>
              </td>
              <td class="text-center align-middle">
                <i class="bi bi-x-circle-fill"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x-circle-fill"
                  viewBox="0 0 16 16"
                  className="ticketprice-icon"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          // class="btn btn-falcon-default btn-sm"
          className=" btn-sm btn-falcon-default ticketprice-btn "
        >
          <i class="bi bi-plus"></i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
          <span class="d-none d-sm-inline">Add item</span>
        </button>
      </div>
    );
}