<template>
    <div id="map" style="height: 100%; width: 100%; z-index: 0"></div>
</template>

<script>
import Leaflet from 'leaflet'

export default {
    props: {
        coords: {
            type: Array,
            required: true,
            default: []
        }
    },
    data: () => {
        return {
            markers: [],
            map: null
        }
    },
    mounted () {
        this.setupMap()
        this.createMarkers()
    },
    methods: {
        setupMap () {
            this.map = Leaflet.map('map').setView([51.505, -0.09], 13)

            const layer = Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            })
            layer.addTo(this.map)
        },
        createMarkers() {
            this.coords.forEach(element => {
                const marker = Leaflet.marker(element)
                marker.addTo(this.map)
                this.markers.push(marker)
            })
        },
        updateMarkers() {

        }
    }
}
</script>

<style>

</style>