const Input = (props) => (
  <div class="mb-3">
    <label for={props.id} className="form-label">
      {props.label}
    </label>
    <input
      type={props.type}
      className="form-control"
      id={props.id}
      placeholder={props.placeholder}
    />
  </div>
);

export default Input;
