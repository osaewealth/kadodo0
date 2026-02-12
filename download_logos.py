import urllib.request
import os
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

def download_file(url, filename):
    try:
        req = urllib.request.Request(
            url, 
            data=None, 
            headers={
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        )
        print(f"Attempting to download {url} to {filename}...")
        with urllib.request.urlopen(req) as response:
            with open(filename, 'wb') as f:
                f.write(response.read())
        print(f"Downloaded {filename}")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")

assets_dir = r"c:\Users\WEALTH\Desktop\universalkadodo\src\assets"
os.makedirs(assets_dir, exist_ok=True)

# Wikimedia URLs are usually reliable with User-Agent
au_url = "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/African_Union_logo.svg/1200px-African_Union_logo.svg.png"
caricom_url = "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Caricom_Logo.svg/1200px-Caricom_Logo.svg.png"

download_file(au_url, os.path.join(assets_dir, "au-logo.png"))
download_file(caricom_url, os.path.join(assets_dir, "caricom-logo.png"))
