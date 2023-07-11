
import "../event/Event.css";
import { Schedule } from "./schedule/index";
import { EventDetails } from "./EventDetails/index"
import { TicketPrice } from "./ticketprice/index";
import { UploadPhotos } from "./uploadphoto/index";
import {CustomFields} from "./custom fields/index"
import {Fooder} from "./fooder/index";
import {Info} from "./otherinfo/index"
const Event = () => {
  return (
    <div>
      <div class="row">
        <div class="col-8 event-counter">
          <EventDetails />

          <div className="event-counter ">
            <TicketPrice />
          </div>

          <div className="event-counter">
            <Schedule />
          </div>

          <div className="event-counter">
            <UploadPhotos />
          </div>

          <div className="event-counter">
            <CustomFields />
          </div>
        </div>

        <div class="col-4 event-counter">
          <Info />
        </div>
      </div>
      <div className="event-counter">
        <Fooder />
      </div>
    </div>
  );
};
export default Event;
