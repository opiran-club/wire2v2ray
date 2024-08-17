functiongenerateURI() {
    const address = document.getElementById('address').value;
    const port = document.getElementById('port').value;
    const secretKey = document.getElementById('secretKey').value;
    const publicKey = document.getElementById('publicKey').value;
    const mtu = document.getElementById('mtu').value;
    const peerSecretKey = document.getElementById('peerSecretKey').value;
    const peerPublicKey = document.getElementById('peerPublicKey').value;
    const allowedIPs = document.getElementById('allowedIPs').value;

    const uri = `wireguard://${encodeURIComponent(peerSecretKey)}@${address}:${port}/?publickey=${encodeURIComponent(publicKey)}&address=${encodeURIComponent(allowedIPs)}&mtu=${mtu}#test`;

    document.getElementById('wg-uri').textContent = uri;
}
