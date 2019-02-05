class Toy < ApplicationRecord
  validates :name, uniqueness: { scope: [:toyable] }
  validates :name, uniqueness: true

  belongs_to :toyable, polymorphic: true
  
end
