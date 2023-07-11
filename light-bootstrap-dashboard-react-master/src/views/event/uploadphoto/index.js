import "./index.css"
export const UploadPhotos =() =>{
    return (
      <div class="mb-3 card">
        <h5 class="card-header">Upload Photos</h5>
        <div class="bg-light card-body">
          <div role="presentation" tabIndex="0" class="dropzone-area py-6">
            <input
              name="uploadedFiles"
              accept="image/*,.jpeg,.png,.jpg"
              multiple type="file"
              tabIndex="-1"
              className="uploadphotos-display"
            />
            <div class="d-flex justify-content-center">
              <img
                src="https://falconreact.prium.me/static/media/cloud-upload.4358f33e4cb30fb3b9c8865f74335508.svg"
                alt=""
                width="25"
                class="me-2"
              />
              <p class="fs-0 mb-0 text-700">Drop your images here</p>
            </div>
          </div>
        </div>
      </div>
    );
}