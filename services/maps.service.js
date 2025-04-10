const axios = require('axios');
    module.exports.getAddressCoordinate = async (address) => {
        const GOOGLE_MAPS_API_KEY = 'your_google_maps_api_key';
        try {
            const address = req.body.address;
            if (!address) {
                return res.status(400).json({ error: 'Address is required' });
            }

            const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address: address,
                    key: GOOGLE_MAPS_API_KEY
                }
            });

            if (response.data.status !== 'OK') {
                return res.status(400).json({ error: 'Unable to fetch coordinates' });
            }

            const location = response.data.results[0].geometry.location;
            return res.status(200).json({ lat: location.lat, lng: location.lng });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    };
