json.extract! store, :id, :name, :domain, :adress, :city, :zip_code, :state, :country, :phone_number, :email, :active, :created_at, :updated_at
json.url store_url(store, format: :json)
