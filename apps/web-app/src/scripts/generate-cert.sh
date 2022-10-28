#! /bin/bash
# exit when any command fails
set -e

mkdir -p ~/.config/strike-app-certs \
		&& echo "✅ Created cert folder in home folder. (~/.config/strike-app-certs)" \
		|| { echo "❌ Could not create cert folder."; false; }

openssl req -x509 -newkey rsa:4096 -sha256 -days 3650 -nodes \
  -keyout ~/.config/strike-app-certs/dev.local.key -out ~/.config/strike-app-certs/dev.local.crt -extensions san -config \
  <(echo "[req]";
    echo distinguished_name=req;
    echo "[san]";
    echo subjectAltName=DNS:localhost,IP:10.0.0.1,IP:127.0.0.1
    ) \
  -subj '/C=SE/ST=Random/L=Random/O=WBD/OU=WBD/CN=WBD Localhost Development/emailAddress=example@wbd.com' \
  && echo "✅ Created self signed root certificate." \
		|| { echo "❌ Could not create certificate."; false; }

security add-trusted-cert -d -p ssl -r trustRoot \
  -k ~/Library/Keychains/login.keychain-db \
  ~/.config/strike-app-certs/dev.local.crt \
  && echo "✅ Cert added to trusted store." \
  || echo "ℹ️ Could not add root cert to trusted store. Add it yourself :)" ;