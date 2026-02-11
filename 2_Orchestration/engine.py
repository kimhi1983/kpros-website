import json
import os
from pathlib import Path

# Paths
BASE_DIR = Path(__file__).resolve().parent.parent
DIRECTIVE_DIR = BASE_DIR / "1_Directive"
EXECUTION_DIR = BASE_DIR / "3_Execution"
DATA_FILE = DIRECTIVE_DIR / "ingredients_data.json"
OUTPUT_FILE = EXECUTION_DIR / "products.json"

def load_data():
    """Load ingredient data from JSON file."""
    if not DATA_FILE.exists():
        print(f"Data file not found: {DATA_FILE}")
        return None
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

def transform_to_frontend_format(data):
    """Transform raw data into the format expected by the React frontend."""
    products = []
    
    # Process Production Lines
    for item in data.get("production_lines", []):
        products.append({
            "id": item.get("id"),
            "category": "K-PROS Specialties", # Default category for production lines if not specified
            "item": item.get("name"),
            "description": item.get("description"),
            "inciName": item.get("inci_name"),
            "brand": "KPROS Custom"
        })

    # Process Imported Lines
    for item in data.get("imported_lines", []):
        products.append({
            "id": item.get("id"),
            "category": item.get("category", "Global Sourcing"), # Use category from JSON or default
            "item": item.get("name"),
            "description": item.get("description"),
            "inciName": item.get("inci_name", "N/A"), # Handle missing fields
            "brand": item.get("supplier")
        })
        
    return products

def generate_product_json():
    """Generate products.json in Execution layer."""
    data = load_data()
    if not data:
        return

    formatted_products = transform_to_frontend_format(data)
    
    # Ensure Execution directory exists
    EXECUTION_DIR.mkdir(parents=True, exist_ok=True)

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(formatted_products, f, indent=2, ensure_ascii=False)
    
    print(f"Successfully generated {OUTPUT_FILE} with {len(formatted_products)} products.")

if __name__ == "__main__":
    print("Starting Orchestration Engine...")
    generate_product_json()
    print("Orchestration complete.")
