function Item1({todoName,date,ondeleteclick}) {
  return (
    <div class="container text-center">
      <div class="row kg-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger" onClick={() => ondeleteclick(todoName)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item1;
