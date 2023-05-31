import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const renderFavorites = (array) => {
  clearDom();
  let domString = '';
  array.forEach((item) => {
    domString += `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${item.email}</h6>
          <hr>
          <i class="btn btn-success fas fa-eye" id="view-author-btn--${item.firebaseKey}"></i>
          <i class="fas fa-edit btn btn-info" id="update-author--${item.firebaseKey}"></i>
          <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${item.firebaseKey}"></i>
          
        </div>
      </div>
      `;
  });
  renderToDOM('#view', domString);
};

export default renderFavorites;
