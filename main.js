//mesmo que eu esteja tirando o querySelector do contexto do document
//ainda quero que ele seja ligado .bind(document) ao document (this)
const $ = document.querySelector.bind(document);

function TabNavigation() {
    const html = {
        links: [...$('.tab-links').children],//criando array com objtos html
        contents: [...$('.tab-content').children],//criando array com objtos html
    }
    
    function hideAllTabContent() {
        html.contents.forEach(section => {
            section.style.display = "none";
        });
    }

    function removeActiveClass() {
        html.links.forEach(tab => {
            tab.className = tab.className.replace(" active", "");//coloca vazio onde tiver active
        })
    }

    function showCurrentTab(id) {
        const tabContent = $('#' + id);
        tabContent.style.display = "block";
    }

    function selectTab(event) {
        hideAllTabContent();//limpa a tela antes de mostrar o proximo produto
        removeActiveClass();//limpa o button selecionado
        const target = event.currentTarget;
        showCurrentTab(target.dataset.id);

        target.className += " active";
    }

    function listenerForChange() {
        html.links.forEach(tab => {
            tab.addEventListener('click', selectTab)
        });
    }

    function init() {
        hideAllTabContent();
        listenerForChange();
    }
    return {init}
}

window.addEventListener('load', () => {
    const tabNavigation = TabNavigation();
    tabNavigation.init();
});