AFRAME.registerComponent('cursorListener', {
    schema:{
        selectedItem_id: {type: 'string', default: ''}
    },

    init: function() {
        this.handleMouseEnterEvent()
        this.handleMouseLeaveEvent()
    },

    handlePlacesList: function() {
        const id = this.el.getAttribute('id')
        const places_id = ['tajmahal', 'budapest', 'eiffeltower', 'newyork']
        if (places_id.includes(id)){
            const placesContainer = document.querySelector('#places_container')
            placesContainer.setAttribute('cursorListener', {selectedItem_id: id})
            placesContainer.setAttribute('material', {color: '#ff0000', opacity: 1})
        }
    },

    handleMouseEnterEvent: function() {
        this.el.addEventListener('mouseenter', () => {
            this.handlePlacesList()
        })
    },

    handleMouseLeaveEvent: function() {
        this.el.addEventListener('mouseleave', () => {
            const {selectedItem_id} = this.data
            if (selectedItem_id) {
                const el = document.querySelector(`#${selectedItem_id}`)
                const id = el.getAttribute('id')
                if (id === selectedItem_id){
                    el.setAttribute('material', {color: 'black', opacity: 0.7})
                }
            }
        })
    }
})