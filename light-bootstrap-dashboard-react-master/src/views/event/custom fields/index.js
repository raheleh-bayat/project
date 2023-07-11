import "./index.css";
export const CustomFields =()=>{
    return (
      <div claas="card">
        <h5 class="card-header">Custom Fields</h5>
        <div class="bg-light card-body ">
          <form>
            <div class="row">
              <div class="col">
                <label class="form-label" className="customfields-text">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
              <div class="col-md-6">
                <div>
                  <label class="form-label" className="customfields-text">
                    Type
                  </label>
                  <select
                    aria-label="Default select example"
                    class="form-select form-select-sm"
                  >
                    <option value="text">Text</option>
                    <option value="number">Number</option>
                    <option value="email">Email</option>
                    <option value="password">Password</option>
                    <option value="date">Date</option>
                    <option value="time">Time</option>
                    <option value="url">Url</option>
                    <option value="checkboxes">Checkboxes</option>
                    <option value="radio">Radio Buttons</option>
                    <option value="textarea">Textarea</option>
                    <option value="select">Select</option>
                    <option value="file">File</option>
                  </select>
                </div>
              </div>
            </div>
          </form>

          <div class="col">
            <button
              type="button"
              disabled
              class="btn btn-falcon-defualt btn-sm"
              className="cudtomfield-buton"
            >
              <i class="bi bi-plus"></i>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
              Add item
            </button>
          </div>
        </div>
      </div>
    );
}