module Toyable
  extend ActiveSupport::Concern

  included do
    has_many :toys, as: :toyable
  end

  def receive_toy(name)
    # @toy = Toy.find_by(name: name)
    # # unless @toy 
    #     @toy = Toy.new 
    #     @toy.name = name 
    #     @toy.toyable_id = self.id 
    #     @toy.toyable_type = self.class
    #     @toy.save!
    # end
    #  Toy.find_or_create_by(name: name) do |toy|
    #     toy.toyable_id = self.id 
    #     toy.toyable_type = self.class
    #     @toy = toy 
    #  end
    #  self.toys << @toy
    self.toys.find_or_create_by(name: name) 
  end
end