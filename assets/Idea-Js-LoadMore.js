let products_on_page = $(".products-on-page");
let next_url = products_on_page.data("next-url");
const load_more_btn = $("#gsloadmore");
const load_more_spinner = $("#gsloaderimg");

function loadMoreProducts() {
  $.ajax({
    url: next_url,
    type: "GET",
    dataType: "html",
    beforeSend: function () {
      load_more_btn.hide();
      load_more_spinner.show();
    },
  }).done(function (next_page) {
    load_more_spinner.hide();

    let new_products = $(next_page).find(".products-on-page");
    let new_url = new_products.data("next-url");

    if (new_url) {
      load_more_btn.show();
    }

    next_url = new_url;
    products_on_page.append(new_products.html());
  });
}
