functionconvertToURL() {
    const config = document.getElementById('configInput').value;
    const lines = config.split('\n');
    
    let privateKey = '', publicKey = '', address = '', mtu = '', endpoint = '', port = '';

    lines.forEach(line => {
        if (line.startsWith('Secret Key ')) {
            privateKey = line.split(' ').pop().trim();
        }
        if (line.startsWith('Public Key ')) {
            publicKey = line.split(' ').pop().trim();
        }
        if (line.startsWith('Address ')) {
            endpoint = line.split(' ').pop().trim();
        }
        if (line.startsWith('Port ')) {
            port = line.split(' ').pop().trim();
        }
        if (line.startsWith('MTU ')) {
            mtu = line.split(' ').pop().trim();
        }
    });

    if (!endpoint || !port) {
        alert('Please ensure that "Address" and "Port" are provided in the config.');
        return;
    }

    const url = `wireguard://${encodeURIComponent(privateKey)}@${endpoint}:${port}/?publickey=${encodeURIComponent(publicKey)}&address=${encodeURIComponent(endpoint)}&mtu=${encodeURIComponent(mtu)}#test`;

    document.getElementById('output').innerText = url;
    document.getElementById('copyButton').style.display = 'inline-block';  // Show the copy button
}

functioncopyToClipboard() {
    const url = document.getElementById('output').innerText;
    if (url) {
        navigator.clipboard.writeText(url).then(() => {
            alert('URL copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy URL: ', err);
        });
    } else {
        alert('No URL to copy!');
    }
}
