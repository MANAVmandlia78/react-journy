function Item1(){
    let itemName = "Butter Milk"
    let date = " 4/10/2026"
return <div class="container text-center">
          <div class="row kg-row">
            <div class="col-6">
              {itemName}
            </div>
            <div class="col-4">
              {date}
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
}

export default Item1;