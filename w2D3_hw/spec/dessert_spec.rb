require 'rspec'
require 'dessert'
require 'chef'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  subject(:dessert) {Dessert.new("cookie", 10, chef)}
  let(:chef) { double("chef") }

  describe "#initialize" do
    it "sets a type" do 
      expect(dessert.type).to eq('cookie')
    end

    it "sets a quantity" do 
      expect(dessert.quantity).to eq(10)
    end 

    it "starts ingredients as an empty array" do 
      expect(dessert.ingredients).to be_empty 
    end

    it "raises an argument error when given a non-integer quantity" do 
      expect { Dessert.new('fifteen') }.to raise_error(ArgumentError)
    end

  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do 
      expect(dessert.add_ingredient("sugar")).to eq (['sugar'])
    end
  end

  describe "#mix!" do
    before(:each) do 
      dessert.add_ingredient("eggs")
      dessert.add_ingredient("chocolate chips")
      dessert.add_ingredient("flour")
      dessert.add_ingredient("oil")
      dessert.add_ingredient("brown sugar")
      dessert.add_ingredient("baking soda")
      dessert.add_ingredient("salt")
    end
    it "shuffles the ingredient array" do 
      expect(dessert.mix!).not_to eq(['eggs', 'chocolate chips', "flour"])
    end

  end

  describe "#eat" do 
    before(:each) do 
      dessert.eat(5)
    end
    it "subtracts an amount from the quantity" do 
      expect(dessert.quantity).to eq(5)
    end


    it "raises an error if the amount is greater than the quantity" do 
      expect { dessert.eat(1000) }.to raise_error('not enough left!')
    end
  end

  describe "#serve" do
    let(:chef2) { Chef.new('Kevin') }
    subject(:dessert) { Dessert.new("cookie", 10, chef2)}
    it "contains the titleized version of the chef's name" do 
      expect(dessert.serve).to include('Chef Kevin the Great Baker') 
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do 
      expect(chef).to receive(:bake).with(dessert)
      dessert.make_more
    end
  end
end
