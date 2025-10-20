document.addEventListener('DOMContentLoaded', function() {

    // --- Xử lý cuộn trang mượt mà cho các link điều hướng ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Xử lý MODAL chi tiết sản phẩm ---

    const modal = document.getElementById('product-modal');
    // Kiểm tra xem modal có tồn tại không trước khi thêm event listener
    if (modal) {
        const closeButton = document.querySelector('.close-button');
        const productCards = document.querySelectorAll('.product-card');

        // Lắng nghe sự kiện click trên từng thẻ sản phẩm
        productCards.forEach(card => {
            card.addEventListener('click', function() {
                // Lấy thông tin từ các thuộc tính data-* của thẻ được click
                const title = this.dataset.title;
                const imgSrc = this.dataset.img;
                const description = this.dataset.description;

                // Gán thông tin vào các phần tử trong modal
                document.getElementById('modal-title').textContent = title;
                document.getElementById('modal-img').src = imgSrc;
                document.getElementById('modal-description').textContent = description;

                // Hiển thị modal
                modal.style.display = 'block';
            });
        });

        // Hàm để đóng modal
        function closeModal() {
            modal.style.display = 'none';
        }

        // Lắng nghe sự kiện click trên nút đóng (X)
        closeButton.addEventListener('click', closeModal);

        // Lắng nghe sự kiện click bên ngoài cửa sổ modal để đóng
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                closeModal();
            }
        });
    }
});
