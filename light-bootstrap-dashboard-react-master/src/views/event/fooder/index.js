import "./index.css"

export const Fooder =() =>{

    return (
      <div class="col">
        
            <div class="flex=between-center row ">
              <div class="col-md">
                <h5 class="mb-2 md-mb-2">Nice Job! You're almost done</h5>
              </div>
              <div class="col-auto">
                <button
                  type="submit"
                  class="me-2 btn btn-falcon-default btn-sm"
                  className="fooder-button"
                >
                  Save
                </button>
                <button
                  type="button"
                  class="btn btn-falcon-primary btn-sm"
                  className="fooder-button2"
                >
                  Make your event live
                </button>
              </div>
            </div>
              </div>
    );
}