function convertToURL() {
    // Retrieve input values from the formconst address = document.getElementById('address').value;
    const port = document.getElementById('port').value;
    const secretKey = document.getElementById('secretKey').value;
    const publicKey = document.getElementById('publicKey').value;
    const mtu = document.getElementById('mtu').value;
    const peerSecretKey = document.getElementById('peerSecretKey').value;
    const peerPublicKey = document.getElementById('peerPublicKey').value;
    const allowedIPs = document.getElementById('allowedIPs').value;

    // Construct the WireGuard URIconst url = `wireguard://${encodeURIComponent(peerSecretKey)}@${address}:${port}/?publickey=${encodeURIComponent(peerPublicKey)}&address=${encodeURIComponent(allowedIPs)}&mtu=${encodeURIComponent(mtu)}`;

    // Output the generated URLdocument.getElementById('wg-uri').innerText = url;
}
