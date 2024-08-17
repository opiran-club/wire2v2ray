'use strict';
function convertToURL() {
    console.log('Function called'); // Debug lineconst config = document.getElementById('configInput').value;
    console.log(config); // Log input valueconst lines = config.split('\n'); // Split the config into lineslet privateKey = '';
    let publicKey = '';
    let address = '';
    let endpoint = '';
    let mtu = '';

    lines.forEach(line => {
        if (line.startsWith('Secret Key')) {
            privateKey = line.split('=')[1].trim();
        } 
        if (line.startsWith('Public Key')) {
            publicKey = line.split('=')[1].trim();
        } 
        if (line.startsWith('Address')) {
            address = line.split('=')[1].trim();
        } 
        if (line.startsWith('Port')) {
            endpoint = `${address}:${line.split('=')[1].trim()}`;
        } 
        if (line.startsWith('MTU')) {
            mtu = line.split('=')[1].trim();
        }
    });

    const url = `wireguard://${encodeURIComponent(privateKey)}@${endpoint}/?publickey=${encodeURIComponent(publicKey)}&address=${encodeURIComponent(address)}&mtu=${mtu}`;
    
    document.getElementById('output').value = url; // Output the result in the designated area
}
