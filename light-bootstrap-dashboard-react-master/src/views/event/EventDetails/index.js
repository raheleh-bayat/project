import "./index.css";
export const EventDetails=()=>{
    return (
      <>
        <form>
          <div class="form-group">
            <label for="formGroupExampleInput">Event Details</label>
            <br></br>
            <br></br>
            <label className="evenvtdetails-text">Event Title</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Example input"
            />
            <div class="form-row">
              <div class="form-group col-md-6">
                <br></br>
                <label for="inputEmail4" className="evenvtdetails-text">
                  Start Date
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
              <div class="form-group col-md-6">
                <br></br>
                <label for="inputPassword4" className="evenvtdetails-text">
                  Start Time
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4" className="evenvtdetails-text">
                  End Date
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4" className="evenvtdetails-text">
                  End Time
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4" className="evenvtdetails-text">
                  Registration Deadline
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4" className="evenvtdetails-text">
                  Timezone
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Timezone"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4" className="evenvtdetails-text">
                  Venue
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Venue"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4" className="evenvtdetails-text">
                  Address
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Address"
                />
              </div>

              <div class="col-md-4 mb-3">
                <label for="validationCustom01" className="evenvtdetails-text">
                  City
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  placeholder="City"
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-4 mb-3">
                <label for="validationCustom02" className="evenvtdetails-text">
                  State
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom02"
                  placeholder="State"
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-4 mb-3">
                <label
                  for="validationCustomUsername"
                  className="evenvtdetails-text"
                >
                  Country
                </label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class=""></span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustomUsername"
                    placeholder="country"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <label>Description</label>
        <textarea
          rows="6"
          name="description"
          id="description"
          class="form-control"
        ></textarea>
      </>
    );
}