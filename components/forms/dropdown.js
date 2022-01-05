const Dropdown = (props) => (
  <div class="mb-3">
    <label for={props.id} className="form-label">
      {props.title}
    </label>
    <select className="form-select" aria-label={props.label}>
      <option selected>Seçiniz</option>
      {props.children}
    </select>
  </div>
);

export default Dropdown;
