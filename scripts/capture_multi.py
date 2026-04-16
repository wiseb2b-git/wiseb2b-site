from playwright.sync_api import sync_playwright
import os

os.makedirs("C:/projects/wiseb2_site/screenshots", exist_ok=True)

pages = [
    ("https://wiseb2b.eu/", "homepage"),
    ("https://wiseb2b.eu/platforma-b2b/", "platforma-b2b"),
]

viewports = [
    ("desktop", 1440, 900),
    ("mobile", 390, 844),
]

with sync_playwright() as p:
    browser = p.chromium.launch()
    for url, slug in pages:
        for vp_name, w, h in viewports:
            page = browser.new_page(viewport={"width": w, "height": h})
            page.goto(url, wait_until="networkidle", timeout=30000)
            page.wait_for_timeout(1500)
            out = f"C:/projects/wiseb2_site/screenshots/{slug}_{vp_name}.png"
            page.screenshot(path=out, full_page=False)
            print(f"Saved: {out}")
            page.close()
    browser.close()
print("Done.")
