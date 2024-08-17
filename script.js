function convertToURL() {
    const config = document.getElementById('configInput').value;
    const lines = config.split('\n');
    let privateKey = '', publicKey = '', address = '', mtu = '', endpoint = '', port = '';

    lines.forEach(line => {
        if (line.includes('Secret Key')) {
            privateKey = line.split(' ').pop();
        }
        if (line.includes('Public Key')) {
            publicKey = line.split(' ').pop();
        }
        if (line.includes('Address')) {
            address = line.split(' ').pop();
        }
        if (line.includes('MTU')) {
            mtu = line.split(' ').pop();
        }
        if (line.includes('Endpoint')) {
            const endpointParts = line.split(' ').pop().split(':');
            endpoint = endpointParts[0];
            port = endpointParts[1];
        }
    });

    const url = `wireguard://${encodeURIComponent(privateKey)}@${endpoint}:${port}/?publickey=${encodeURIComponent(publicKey)}&address=${encodeURIComponent(address)}&mtu=${encodeURIComponent(mtu)}#test`;

    document.getElementById('output').innerText = url;
}
