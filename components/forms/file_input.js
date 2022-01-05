const FileInput = (props) => (
  <div class="mb-3">
    <label for={props.id} class="form-label">
      {props.label}
    </label>
    <input class="form-control" type="file" id={props.id} />
  </div>
);

export default FileInput;
