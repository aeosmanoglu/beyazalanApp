const TextArea = (props) => (
  <div class="mb-3">
    <label for={props.id} className="form-label">
      {props.label}
    </label>
    <textarea
      className="form-control"
      id={props.id}
      rows={props.rows}
      placeholder={props.placeholder}
    ></textarea>
  </div>
);

export default TextArea;
