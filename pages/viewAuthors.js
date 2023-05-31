import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthors = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <div class="mt-5">
       <i id="edit-book-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-book--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
   </div>
   <div class="text-white ms-5 details">
     <h5>${obj.title} by ${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
     Author Email: <a href="mailto:${obj.email}">${obj.email}</a>
     <p>${obj.description || ''}</p>
     <hr>
     <p>${obj.sale ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> 
       $${obj.price}` : `$${obj.price}`}</p>      
      </div>
    </div>`;

  renderToDOM('#view', domString);

  console.warn();
  let domString2 = '';
  obj.bookObject.forEach((item) => {
    domString2 += `
    <div class="card">
      <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
      <div class="card-body" style="height: 180px;">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
          <hr>
          <i class="btn btn-success fas fa-eye" id="view-book-btn--${item.firebaseKey}"></i>
          <i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
          <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
      </div>
    </div>`;
    renderToDOM('#store', domString2);
  });
};

export default viewAuthors;
