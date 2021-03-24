json.extract! product, :id, :name, :description, :price, :customizable, :active, :position, :created_at, :updated_at
json.url product_url(product, format: :json)
