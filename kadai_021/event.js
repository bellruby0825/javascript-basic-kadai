const change = document.getElementById('btn');

change.addEventListener('click', () => {

    setTimeout( () => {
        document.getElementById('text').textContent = ('ボタンをクリックしました');
    }, 2000);

});