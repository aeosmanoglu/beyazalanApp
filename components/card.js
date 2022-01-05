const Card = (props) => (
  <div class="card">
    <div class="card-body">
      <p class="card-title h5 mb-3">{props.title}</p>
      <p class="card-text">{props.children}</p>
    </div>
  </div>
);

export default Card;
