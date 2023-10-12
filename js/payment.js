document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    const paymentForm = document.getElementById('payment-form');

    // Mảng chứa các sản phẩm trong giỏ hàng (điền thông tin sản phẩm vào đây)
    const products = [
        { name: 'Dưa hấu', price: 5234 },
        { name: 'Hành tây', price: 5236 },
        { name: 'Gà', price: 8234 },
    ];

    // Hiển thị sản phẩm trong giỏ hàng
    function displayCart() {
        cartItems.innerHTML = '';
        let totalPrice = 0;
        products.forEach(product => {
            const item = document.createElement('li');
            item.textContent = `${product.name} - ${product.price} VNĐ`;
            cartItems.appendChild(item);
            totalPrice += product.price;
        });
        totalAmount.textContent = totalPrice;
    }

    displayCart();

    // Xử lý sự kiện khi người dùng gửi biểu mẫu thanh toán
    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const card = document.getElementById('card').value;

        // Thực hiện xử lý thanh toán ở đây (ở dạng giả định)
        alert(`Thanh toán thành công!\nHọ tên: ${name}\nEmail: ${email}\nSố thẻ: ${card}`);
    });
});