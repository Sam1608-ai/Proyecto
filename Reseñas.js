function addReview() {
    const reviewText = document.getElementById('review-text').value;
    if (reviewText.trim() === "") {
        alert("Por favor, escribe una reseña antes de enviar.");
        return;
    }
    const reviewContainer = document.createElement('div');
    reviewContainer.className = 'review';
    reviewContainer.textContent = reviewText;
    document.getElementById('reviews-container').appendChild(reviewContainer);
    document.getElementById('review-text').value = '';
}
