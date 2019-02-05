class Corgi < ApplicationRecord
    has_many :toys, as: :toyable, inverse_of: :corgi
end
