class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|
        t.text :name, index: true
        t.text :photo_url
        t.timestamps
    end
  end
end
