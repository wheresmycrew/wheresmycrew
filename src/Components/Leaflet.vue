<template>
    <div id="map" style="height: 100%; width: 100%; z-index: 0"></div>
</template>

<script>
import leaflet from 'leaflet'

export default {
    mounted: () => {
        let map = leaflet.map('map').setView([51.505, -0.09], 13)

        leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map)
    }
}
</script>

<style>

</style>