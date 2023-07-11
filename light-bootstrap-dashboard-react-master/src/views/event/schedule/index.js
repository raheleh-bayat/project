import {Button} from "../button/index"
import "./index.css";

export const Schedule = () => {
    return (
      <div>
        <h5>Schedule</h5>
        <form>
          <div class="form-group schedule-div">
            <div className="schedule-icon">
              <i class="bi bi-x-circle-fill"></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-circle-fill"
                viewBox="0 0 16 16"
                className="schedule-icon"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
              </svg>
            </div>
            <label
              for="exampleInputEmail1"
              class="form-label"
              className="schedule-text"
            >
              Title
            </label>
            <input
              type="Title"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Title"
            />
          </div>

          <div class="row">
            <div class="col">
              <label
                for="scheduleStartDate"
                class="form-label"
                className="schedule-text"
              >
                Start Date
              </label>
              <input type="text" class="form-control" placeholder="d/m/y" />
            </div>
            <div class="col">
              <label for="scheduleStartend" className="schedule-text">
                Start Time
              </label>
              <input type="text" class="form-control" placeholder="H:i" />
            </div>
          </div>

          <div class="row">
            <div class="col">
              <label
                for="scheduleStartDate"
                class="form-label"
                className="schedule-text"
              >
                End Date
              </label>
              <input type="text" class="form-control" placeholder="d/m/y" />
            </div>
            <div class="col">
              <label
                for="scheduleEndTime"
                class="form-label"
                className="schedule-text"
              >
                EndTime
              </label>
              <input type="text" class="form-control" placeholder="H:i" />
            </div>
          </div>

          <div className="bg-light card-body Div-button">
            <button type="button" class="btn btn-falcon-default btn-sm " className="schedule-button">
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
        </form>
      </div>
    );
}