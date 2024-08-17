function convertToURL() {
    const lines = config.split('\n');
    let privateKey = '';
    let publicKey = '';
    let address = '';
    let endpoint = '';
    let mtu = '';

    lines.forEach(line => {
        if (line.startsWith('PrivateKey') || line.startsWith('Secret Key')) {
            privateKey = line.split('=')[1].trim();
        } else if (line.startsWith('PublicKey') || line.startsWith('Public Key')) {
            publicKey = line.split('=')[1].trim();
        } else if (line.startsWith('Address') || line.startsWith('Allowed IPs')) {
            address = line.split('=')[1].trim();
        } else if (line.startsWith('Endpoint') || line.startsWith('Address')) {
            endpoint = line.split('=')[1].trim();
        } else if (line.startsWith('MTU')) {
            mtu = line.split('=')[1].trim();
        }
    });

    const url = `wireguard://${encodeURIComponent(privateKey)}@${endpoint}/?publickey=${encodeURIComponent(publicKey)}&address=${encodeURIComponent(address)}&mtu=${mtu}#test`;
    return url;
}

// Example usage:
const config = `
[Interface]
PrivateKey = EFc6Mkqwx1MeUwryS0Z4FUg4fbmAh539h1H5D5qSsmw=
Address = 10.0.0.2/32
DNS = 1.1.1.1, 1.0.0.1
MTU = 1380

# portal-1
[Peer]
PublicKey = QxMYgprUSL1K77dIUrlgo5wOs8tJ9gZsfU6AQPLYn2I=
AllowedIPs = 0.0.0.0/0, ::/0
Endpoint = 193.26.159.70:2000
`;

console.log(convertToURL(config));
