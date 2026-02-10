import json
import os
from pathlib import Path

# Paths
BASE_DIR = Path(__file__).resolve().parent.parent
DIRECTIVE_DIR = BASE_DIR / "1_Directive"
EXECUTION_DIR = BASE_DIR / "3_Execution"
DATA_FILE = DIRECTIVE_DIR / "ingredients_data.json"

def load_data():
    """Load ingredient data from JSON file."""
    if not DATA_FILE.exists():
        print(f"Data file not found: {DATA_FILE}")
        return None
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

def generate_product_html(data):
    """Generate HTML content for products section."""
    if not data:
        return ""
    
    html_content = ""
    
    # Production Lines
    html_content += '<div id="production-list" class="product-grid">\n'
    for item in data.get("production_lines", []):
        html_content += f'''
        <div class="product-card">
            <div class="product-image placeholder-image" data-keyword="{item['name']}"></div>
            <h3>{item['name']}</h3>
            <p class="inci">{item['inci_name']}</p>
            <p class="desc">{item['description']}</p>
            <button class="btn-download">Download TDS</button>
        </div>
        '''
    html_content += '</div>\n'

    # Imported Lines
    html_content += '<div id="imported-list" class="product-grid" style="display:none;">\n'
    for item in data.get("imported_lines", []):
        html_content += f'''
        <div class="product-card">
            <div class="product-image placeholder-image" data-keyword="{item['name']}"></div>
            <h3>{item['name']}</h3>
            <p class="supplier">Supplier: {item['supplier']}</p>
            <p class="origin">Origin: {item['origin']}</p>
            <p class="desc">{item['description']}</p>
        </div>
        '''
    html_content += '</div>\n'

    return html_content

def update_website_content():
    """Update index.html in Execution layer with new product data."""
    data = load_data()
    product_html = generate_product_html(data)
    
    index_file = EXECUTION_DIR / "index.html"
    if not index_file.exists():
        print(f"Index file not found in {EXECUTION_DIR}. Please initialize website first.")
        return

    # Simple template replacement (In production, use Jinja2)
    with open(index_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Define markers in HTML
    start_marker = "<!-- PRODUCTS_START -->"
    end_marker = "<!-- PRODUCTS_END -->"

    if start_marker in content and end_marker in content:
        new_content = content.split(start_marker)[0] + start_marker + "\n" + product_html + "\n" + end_marker + content.split(end_marker)[1]
        
        with open(index_file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Website content updated successfully.")
    else:
        print("Markers not found in index.html")

if __name__ == "__main__":
    print("Starting Orchestration Engine...")
    update_website_content()
    print("Orchestration complete.")
