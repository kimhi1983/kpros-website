# Start Local Web Server
Start-Process -FilePath "python" -ArgumentList "-m http.server 8080 --directory `"3_Execution`"" -WindowStyle Hidden

# Wait for server to start
Start-Sleep -Seconds 2

# Start Cloudflare Tunnel
Write-Host "Starting Cloudflare Tunnel for kproscorp.com..."
if (-not (Test-Path "314c5b8a-e255-4e31-a6d5-7fba5c4d88f9.json")) {
    Write-Host "Copying credential file..."
    Copy-Item "C:\Users\user\.cloudflared\314c5b8a-e255-4e31-a6d5-7fba5c4d88f9.json" -Destination .
}
cloudflared tunnel --config config.yml run kpros-web
