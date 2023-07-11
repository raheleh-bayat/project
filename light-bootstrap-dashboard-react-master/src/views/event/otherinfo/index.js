import "./index.css"
export const Info = () => {
  return (
    // <div className="info-body">
    //   <form>
    //     <div class="form-group">
    //       <label for="formGroupExampleInput">OtherInfo</label>
    //       <br></br>
    //       <br></br>
    //       <label className="evenvtdetails-text">Organizere</label>
    //       <input
    //         type="text"
    //         class="form-control"
    //         id="formGroupExampleInput"
    //         placeholder="Example input"
    //       />
    //       <br></br>
    //       <div class="form-group">
    //         <label for="exampleInputEmail1" className="evenvtdetails-text">
    //           Sponsors
    //         </label>
    //         <input
    //           type="email"
    //           class="form-control"
    //           id="exampleInputEmail1"
    //           aria-describedby="emailHelp"
    //           placeholder="Enter email"
    //         />
    //       </div>

    //       <div class="form-group">
    //         <label for="exampleInputEmail1" className="evenvtdetails-text">
    //           Event Type
    //         </label>
    //         <input
    //           type="email"
    //           class="form-control"
    //           id="exampleInputEmail1"
    //           aria-describedby="emailHelp"
    //           placeholder="Enter email"
    //         />
    //       </div>

    //       <div class="form-group">
    //         <label for="exampleInputEmail1" className="evenvtdetails-text">
    //           Event Topic
    //         </label>
    //         <input
    //           type="email"
    //           class="form-control"
    //           id="exampleInputEmail1"
    //           aria-describedby="emailHelp"
    //           placeholder="Enter email"
    //         />
    //       </div>
    //       <div class="form-group">
    //         <label
    //           for="exampleFormControlInput1"
    //           className="evenvtdetails-text"
    //         >
    //           Tags
    //         </label>
    //         <input
    //           type="email"
    //           class="form-control"
    //           id="exampleFormControlInput1"
    //           placeholder="name@example.com"
    //         />
    //       </div>

    //       <div class="col-md-4 mb-3"></div>
    //     </div>
    //   </form>
    // </div>
    <div class="sticky-slidebar">
      <div class="card">
        <h5 class="card-header">Other Info</h5>
        <div class="bg-light card-body">
          <div class="mb-3">
            <div class="d-flex flex-betweeb-center">
              <label class="form-label">Organizere</label>
              <button
                type="button"
                class="p-0 btn btn-link btn-sm"
                className="info-button btn-link p-0"
              >
                Add new
              </button>
            </div>

            <div class="css-b62m3t-container">
              <span
                id="react-select-20-live-region"
                class="css-75pg0cj-allyText"
              ></span>
              <span
                aria-live="polite"
                aria-atomic="false"
                aria-relevant="additions text"
                class="css-7pg0cj-a11yText"
              ></span>
              <div class="react-select__control css-13cymwt-control">
                <div class="react-select__value-container react-select__value-container--is-multi css-hlgwow">
                  <div
                    class="react-select__input-container css-19bb58m"
                    data-value=""
                  >
                    <select className="info-dive-section">
                      <option value="0" className="info-select-option">
                        Select Organizere...
                      </option>
                      <option value="1">Audi</option>
                      <option value="2">BMW</option>
                      <option value="3">Citroen</option>
                      <option value="4">Ford</option>
                      <option value="5">Honda</option>
                      <option value="6">Jaguar</option>
                      <option value="7">Land Rover</option>
                      <option value="8">Mercedes</option>
                      <option value="9">Mini</option>
                      <option value="10">Nissan</option>
                      <option value="11">Toyota</option>
                      <option value="12">Volvo</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <div class="d-flex flex-between-center">
              <label class="form-label">Sponsors</label>
              <button
                type="button"
                class="p-0 btn btn-link btn-sm"
                className="info-button btn-link p-0"
              >
                Add new
              </button>
            </div>
            <div class=" css-b62m3t-container">
              <span
                id="react-select-21-live-region"
                class="css-7pg0cj-a11yText"
              ></span>
              <span
                aria-live="polite"
                aria-atomic="false"
                aria-relevant="additions text"
                class="css-7pg0cj-a11yText"
              ></span>
              <div class="react-select__control css-13cymwt-control">
                <div class="react-select__value-container react-select__value-container--is-multi css-hlgwow">
                  <div
                    class="react-select__placeholder css-1jqq78o-placeholder"
                    id="react-select-21-placeholder"
                  ></div>
                  <div
                    class="react-select__input-container css-19bb58m"
                    data-value=""
                  >
                    <select className="info-dive-section">
                      <option value="0" className="info-select-option">
                        Select Sponsors...
                      </option>
                      <option value="1">Audi</option>
                      <option value="2">BMW</option>
                      <option value="3">Citroen</option>
                      <option value="4">Ford</option>
                      <option value="5">Honda</option>
                      <option value="6">Jaguar</option>
                      <option value="7">Land Rover</option>
                      <option value="8">Mercedes</option>
                      <option value="9">Mini</option>
                      <option value="10">Nissan</option>
                      <option value="11">Toyota</option>
                      <option value="12">Volvo</option>
                    </select>
                  </div>
                </div>
                <div class="react-select__indicators css-1wy0on6">
                  <span class="react-select__indicator-separator css-1u9des2-indicatorSeparator"></span>
                  <div
                    class="react-select__indicator react-select__dropdown-indicator css-1xc3v61-indicatorContainer"
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
              <div>
                <input name="sponsors" type="hidden" value="" />
              </div>
            </div>
          </div>

          <div class="mb-3">
            <div class="d-flex flex-between-center">
              <label class="form-label">Event Type</label>
            </div>
            <div class=" css-b62m3t-container">
              <span
                id="react-select-21-live-region"
                class="css-7pg0cj-a11yText"
              ></span>
              <span
                aria-live="polite"
                aria-atomic="false"
                aria-relevant="additions text"
                class="css-7pg0cj-a11yText"
              ></span>
              <div class="react-select__control css-13cymwt-control">
                <div class="react-select__value-container react-select__value-container--is-multi css-hlgwow">
                  <div
                    class="react-select__input-container css-19bb58m"
                    data-value=""
                  >
                    <select className="info-dive-section">
                      <option value="0" Sponsors>
                        Select Event Type...
                      </option>
                      <option value="1">Audi</option>
                      <option value="2">BMW</option>
                      <option value="3">Citroen</option>
                      <option value="4">Ford</option>
                      <option value="5">Honda</option>
                      <option value="6">Jaguar</option>
                      <option value="7">Land Rover</option>
                      <option value="8">Mercedes</option>
                      <option value="9">Mini</option>
                      <option value="10">Nissan</option>
                      <option value="11">Toyota</option>
                      <option value="12">Volvo</option>
                    </select>
                  </div>
                </div>
                <div class="react-select__indicators css-1wy0on6">
                  <span class="react-select__indicator-separator css-1u9des2-indicatorSeparator"></span>
                  <div
                    class="react-select__indicator react-select__dropdown-indicator css-1xc3v61-indicatorContainer"
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
              <div>
                <input name="sponsors" type="hidden" value="" />
              </div>
            </div>
          </div>

          <div class="mb-3">
            <div class="d-flex flex-between-center">
              <label class="form-label">Event Topic</label>
            </div>
            <div class=" css-b62m3t-container">
              <span
                id="react-select-21-live-region"
                class="css-7pg0cj-a11yText"
              ></span>
              <span
                aria-live="polite"
                aria-atomic="false"
                aria-relevant="additions text"
                class="css-7pg0cj-a11yText"
              ></span>
              <div class="react-select__control css-13cymwt-control">
                <div class="react-select__value-container react-select__value-container--is-multi css-hlgwow">
                  <div
                    class="react-select__input-container css-19bb58m"
                    data-value=""
                  >
                    <select className="info-dive-section">
                      <option value="0" Event Type>
                        Select Event Topic...
                      </option>
                      <option value="1">Audi</option>
                      <option value="2">BMW</option>
                      <option value="3">Citroen</option>
                      <option value="4">Ford</option>
                      <option value="5">Honda</option>
                      <option value="6">Jaguar</option>
                      <option value="7">Land Rover</option>
                      <option value="8">Mercedes</option>
                      <option value="9">Mini</option>
                      <option value="10">Nissan</option>
                      <option value="11">Toyota</option>
                      <option value="12">Volvo</option>
                    </select>
                  </div>
                </div>
                <div class="react-select__indicators css-1wy0on6">
                  <span class="react-select__indicator-separator css-1u9des2-indicatorSeparator"></span>
                  <div
                    class="react-select__indicator react-select__dropdown-indicator css-1xc3v61-indicatorContainer"
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
              <div>
                <input name="sponsors" type="hidden" value="" />
              </div>
            </div>
          </div>

          <div class="mb-3">
            <div class="d-flex flex-between-center">
              <label class="form-label">Tags</label>
              <button
                type="button"
                class="p-0 btn btn-link btn-sm"
                className="info-button btn-link p-0"
              >
                Add new
              </button>
            </div>
            <div class=" css-b62m3t-container">
              <span
                id="react-select-21-live-region"
                class="css-7pg0cj-a11yText"
              ></span>
              <span
                aria-live="polite"
                aria-atomic="false"
                aria-relevant="additions text"
                class="css-7pg0cj-a11yText"
              ></span>
              <div class="react-select__control css-13cymwt-control">
                <div class="react-select__value-container react-select__value-container--is-multi css-hlgwow">
                  <div
                    class="react-select__input-container css-19bb58m"
                    data-value=""
                  >
                    <select className="info-dive-section">
                      <option value="0" className="info-select-option">
                        Select Tags...{" "}
                      </option>
                      <option value="1">Audi</option>
                      <option value="2">BMW</option>
                      <option value="3">Citroen</option>
                      <option value="4">Ford</option>
                      <option value="5">Honda</option>
                      <option value="6">Jaguar</option>
                      <option value="7">Land Rover</option>
                      <option value="8">Mercedes</option>
                      <option value="9">Mini</option>
                      <option value="10">Nissan</option>
                      <option value="11">Toyota</option>
                      <option value="12">Volvo</option>
                    </select>
                  </div>
                </div>
                <div class="react-select__indicators css-1wy0on6">
                  <span class="react-select__indicator-separator css-1u9des2-indicatorSeparator"></span>
                  <div
                    class="react-select__indicator react-select__dropdown-indicator css-1xc3v61-indicatorContainer"
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
              <div>
                <input name="sponsors" type="hidden" value="" />
              </div>
            </div>
          </div>

          <div class="border-dashed border-bottom my-3"></div>
          <h6>Listing Privacy </h6>

          <div class="mb-3 form-check">
            <input
              name="privacy"
              type="radio"
              id="publicPage"
              class="form-check-input"
              value="publicPage"
              checked=""
            />
            <label
              for="publicPage"
              class="mb-0 form-label fw-semi-bold form-check-label"
            >
              Public page:
            </label>
            <div class="form-text mt-0">
              Discoverable by anyone on Falcon, our distribution partners, and
              search engines.
            </div>
          </div>

          <div class="mb-3 form-check">
            <input
              name="privacy"
              type="radio"
              id="privatePage"
              class="form-check-input"
              value="privatePage"
            />
            <label
              for="privatePage"
              class="mb-0 form-label fw-semi-bold form-check-label"
            >
              Private page:
            </label>
            <div class="form-text mt-0">
              Accessible only by people you specify.
            </div>
          </div>

          <div class="border-dashed border-bottom my-3"></div>
          <h6>Remaining Tickets</h6>
          <div class="form-check">
            <input
              name="remainingTickets"
              type="checkbox"
              id="remainingTickets"
              class="form-check-input"
            />
            <label title="" for="remainingTickets" class="form-check-label">
              Show the number of remaining tickets.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
