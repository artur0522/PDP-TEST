document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.product-desc-info-container').forEach(element => {
        var product_content = element.querySelector('.product-desc-info-content');
        var product_full_content = element.querySelector('.product-desc-info-full-content');
        var read_more_btn = element.querySelector('.product-desc-info-read-more-btn')

        if(product_full_content.clientHeight > 200) {
            read_more_btn.classList.remove('disabled')
        } else if(product_full_content.clientHeight <= 200) {
            element.classList.add('active');
            return;
        }

        read_more_btn.addEventListener('click', function (e) {
            e.preventDefault();
            product_content.style.maxHeight = product_full_content.clientHeight + "px";
            element.classList.add('active');
            read_more_btn.classList.add('disabled');
        }); 
    })
});