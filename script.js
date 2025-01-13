const searchInput = document.getElementById('searchInput');
const dropdownList = document.getElementById('dropdownList');
const originalItems = Array.from(dropdownList.children);

searchInput.addEventListener('focus', () => {
    dropdownList.style.display = 'block';
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown-container')) {
        dropdownList.style.display = 'none';
    }
});

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    dropdownList.innerHTML = '';
    
    const filteredItems = originalItems.filter(item => 
        item.textContent.toLowerCase().includes(query)
    );

    if (filteredItems.length === 0) {
        const noResultsItem = document.createElement('li');
        noResultsItem.textContent = 'No results found';
        noResultsItem.classList.add('no-results');
        dropdownList.appendChild(noResultsItem);
    } else {
        filteredItems.forEach(item => dropdownList.appendChild(item));
    }
});

dropdownList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI' && !e.target.classList.contains('no-results')) {
        searchInput.value = e.target.textContent;
        dropdownList.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('nav-button');
    const optionLists = document.getElementById('hidden-opt');

    toggleButton.addEventListener('click', () => {
        const isHidden = optionLists.style.display === 'none' || optionLists.style.display === '';
        optionLists.style.display = isHidden ? 'block' : 'none';
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('header')) {
            optionLists.style.display = 'none';
        }
    });
});