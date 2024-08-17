functionconvertToURL() {
    const config = document.getElementById('configInput').value;
    const lines = config.split('\n');

    let privateKey = '', publicKey = '', address = '', mtu = '', endpoint = '', port = '';

    // Determine the formatconst isFormat1 = lines.some(line => line.includes('PrivateKey')) && lines.some(line => line.includes('Endpoint'));
    const isFormat2 = lines.some(line => line.includes('Secret Key')) && lines.some(line => line.includes('Address'));

    if (isFormat1) {
        // Parsing FORMAT1
        lines.forEach(line => {
            if (line.startsWith('PrivateKey =')) {
                privateKey = line.split('=').pop().trim();
            }
            if (line.startsWith('PublicKey =')) {
                publicKey = line.split('=').pop().trim();
            }
            if (line.startsWith('Address =')) {
                address = line.split('=').pop().trim();
            }
            if (line.startsWith('MTU =')) {
                mtu = line.split('=').pop().trim();
            }
            if (line.startsWith('Endpoint =')) {
                const endpointParts = line.split('=').pop().trim().split(':');
                endpoint = endpointParts[0];
                port = endpointParts[1];
            }
        });
    } elseif (isFormat2) {
        // Parsing FORMAT2
        lines.forEach(line => {
            if (line.startsWith('Secret Key')) {
                privateKey = line.split(' ').pop().trim();
            }
            if (line.startsWith('Public Key')) {
                publicKey = line.split(' ').pop().trim();
            }
            if (line.startsWith('Address')) {
                address = line.split(' ').pop().trim();
            }
            if (line.startsWith('Port')) {
                port = line.split(' ').pop().trim();
            }
            if (line.startsWith('MTU')) {
                mtu = line.split(' ').pop().trim();
            }
        });
    } else {
        alert('Unsupported configuration format.');
        return;
    }

    // Validate necessary fieldsif (!privateKey || !publicKey || !address || !port) {
        alert('Please ensure all required fields (Secret Key, Public Key, Address, Port) are provided in the config.');
        return;
    }

    // Construct the URLconst url = `wireguard://${encodeURIComponent(privateKey)}@${address}:${port}/?publickey=${encodeURIComponent(publicKey)}&address=${encodeURIComponent(address)}&mtu=${encodeURIComponent(mtu)}#test`;

    // Display the URLdocument.getElementById('output').innerText = url;
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
