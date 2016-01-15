class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
        t.text :title, index: true
        t.string :year, index: true
        t.text :poster_url
        t.timestamps
    end
  end
end
