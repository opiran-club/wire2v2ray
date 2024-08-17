functionconvertToURL() {
    const config = document.getElementById('configInput').value;
    const lines = config.split('\n'); // Split the config into lineslet privateKey = '';
    let publicKey = '';
    let address = '';
    let endpoint = '';
    let mtu = '';

    lines.forEach(line => {
        if (line.startsWith('Secret Key')) {
            privateKey = line.split('=')[1].trim();
        } elseif (line.startsWith('Public Key')) {
            publicKey = line.split('=')[1].trim();
        } elseif (line.startsWith('Address')) {
            address = line.split('=')[1].trim();
        } elseif (line.startsWith('Port')) {
            endpoint = `${address}:${line.split('=')[1].trim()}`;
        } elseif (line.startsWith('MTU')) {
            mtu = line.split('=')[1].trim();
        }
    });

    const url = `wireguard://${encodeURIComponent(privateKey)}@${endpoint}/?publickey=${encodeURIComponent(publicKey)}&address=${encodeURIComponent(address)}&mtu=${mtu}`;
    
    document.getElementById('output').textContent = url; // Output the result in the designated area
}

// Ensure that the convertToURL function is called when the button is clickeddocument.querySelector('button').addEventListener('click', convertToURL);
