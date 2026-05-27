import os
import json
import re
import urllib.request
import urllib.parse

# Path configuration
workspace_dir = "/Users/oliver/Documents/antigravity/intelligent-lavoisier"
output_json_path = "/Users/oliver/.gemini/antigravity/brain/a6f02ca2-97ce-4c5c-bb73-a61700b8027d/.system_generated/steps/1088/output.txt"
assets_dir = os.path.join(workspace_dir, "public/assets")
fonts_dir = os.path.join(workspace_dir, "public/fonts")

os.makedirs(assets_dir, exist_ok=True)
os.makedirs(fonts_dir, exist_ok=True)

print("Reading scraped assets data...")
try:
    with open(output_json_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract JSON block
    json_match = re.search(r'(\{.*\})', content, re.DOTALL)
    if not json_match:
        raise ValueError("Could not find JSON object in scraped output")
    
    data = json.loads(json_match.group(1))
except Exception as e:
    print(f"Error reading scraped data: {e}")
    exit(1)

# Extract images and fonts
image_urls = data.get("imageUrls", [])
fonts_data = data.get("fonts", [])
colors_data = data.get("colors", {})

print(f"Found {len(image_urls)} image URLs and {len(fonts_data)} font declarations.")

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

downloaded_images = {}
downloaded_fonts = {}

# 1. Download Images
print("\n--- Downloading Wix Images ---")
for idx, url_str in enumerate(image_urls):
    # Wix urls in srcset can sometimes contain widths, let's normalize
    clean_url = url_str.split(' ')[0].strip()
    if not clean_url:
        continue
    
    # Resolve relative protocols
    if clean_url.startswith('//'):
        clean_url = 'https:' + clean_url
        
    if not clean_url.startswith('http'):
        continue
        
    # Extract a nice filename
    parsed_url = urllib.parse.urlparse(clean_url)
    path_parts = parsed_url.path.split('/')
    
    # Wix images have paths like /media/hash~mv2.png/v1/... or just /media/hash~mv2.png
    # Let's find the media hash segment
    filename = "asset_" + str(idx)
    for part in path_parts:
        if '~mv2' in part:
            filename = part.split('~')[0] + "_" + part.split('~')[1].replace('.', '_')
            # Check file extension
            if 'png' in clean_url.lower():
                filename += ".png"
            elif 'jpg' in clean_url.lower() or 'jpeg' in clean_url.lower():
                filename += ".jpg"
            elif 'webp' in clean_url.lower():
                filename += ".webp"
            elif 'svg' in clean_url.lower():
                filename += ".svg"
            break
    else:
        filename = path_parts[-1]
        if not filename or '.' not in filename:
            filename = f"asset_{idx}.png"
            
    # Clean up filename (remove query params, URL encodes)
    filename = urllib.parse.unquote(filename)
    filename = re.sub(r'[^\w\-\.]', '_', filename)
    
    # Download original source image (strip Wix responsive parameters to get high-res original)
    original_url = clean_url
    if 'static.wixstatic.com/media' in clean_url:
        # Wix media URLs format: https://static.wixstatic.com/media/4ff282_xxx~mv2.png/v1/fill/...
        # By truncating at the extension, we get the original high-resolution master asset!
        media_match = re.match(r'(https://static.wixstatic.com/media/[^/]+)', clean_url)
        if media_match:
            original_url = media_match.group(1)
            
    dest_path = os.path.join(assets_dir, filename)
    
    # Skip if already exists
    if os.path.exists(dest_path):
        print(f"[{idx+1}/{len(image_urls)}] Skipping {filename} (already exists)")
        downloaded_images[clean_url] = filename
        continue
        
    print(f"[{idx+1}/{len(image_urls)}] Downloading {filename} from {original_url}...")
    try:
        req = urllib.request.Request(original_url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as response:
            with open(dest_path, 'wb') as f:
                f.write(response.read())
        downloaded_images[clean_url] = filename
    except Exception as e:
        print(f"  Error: {e}. Trying direct URL: {clean_url}")
        try:
            req = urllib.request.Request(clean_url, headers=headers)
            with urllib.request.urlopen(req, timeout=15) as response:
                with open(dest_path, 'wb') as f:
                    f.write(response.read())
            downloaded_images[clean_url] = filename
        except Exception as e2:
            print(f"  Failed: {e2}")

# 2. Download Fonts
print("\n--- Downloading Wix Fonts ---")
for idx, font in enumerate(fonts_data):
    font_url = font.get('url', '')
    if not font_url:
        continue
        
    if font_url.startswith('//'):
        font_url = 'https:' + font_url
        
    family = font.get('family', 'font')
    weight = font.get('weight', '')
    style = font.get('style', '')
    
    parsed_url = urllib.parse.urlparse(font_url)
    filename = parsed_url.path.split('/')[-1]
    if not filename or '.' not in filename:
        filename = f"{family}_{weight}_{style}.woff2"
        
    filename = urllib.parse.unquote(filename)
    filename = re.sub(r'[^\w\-\.]', '_', filename)
    
    dest_path = os.path.join(fonts_dir, filename)
    
    if os.path.exists(dest_path):
        print(f"[{idx+1}/{len(fonts_data)}] Skipping font {filename} (already exists)")
        downloaded_fonts[font_url] = filename
        continue
        
    print(f"[{idx+1}/{len(fonts_data)}] Downloading font {filename} from {font_url}...")
    try:
        req = urllib.request.Request(font_url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as response:
            with open(dest_path, 'wb') as f:
                f.write(response.read())
        downloaded_fonts[font_url] = filename
    except Exception as e:
        print(f"  Failed: {e}")

# Save manifest mapping for references in Next.js code
manifest = {
    "images": downloaded_images,
    "fonts": downloaded_fonts,
    "colors": colors_data
}

manifest_path = os.path.join(assets_dir, "manifest.json")
with open(manifest_path, 'w', encoding='utf-8') as f:
    json.dump(manifest, f, indent=2)

print(f"\nSuccessfully created public/assets/manifest.json with mapping of all Wix resources.")
print("Asset download process completed successfully!")
