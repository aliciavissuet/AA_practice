
def sluggish_octopus(array)
    prc = Proc.new {|x, y|x.length <=> y.length}
    max_length = 0
    index = 0
    sorted = false
    until sorted
        sorted = true
        (0...array.length-1).each do |i|
            comp = prc.call(array[i], array[i+1])
            if comp == 1
                array[i], array[i+1] = array[i+1], array[i]
                sorted = false 
            end 
        end
    end
    return array[-1]
end

def dominant_octopus(array)
    result = divide_octopi(array)
    return result[-1]
end
def divide_octopi(array)
    return array if array.length <=1
    mid = array.length/2
    left = array[0...mid]
    right = array[mid..-1]
    left = dominant_octopus(left)
    right = dominant_octopus(right)
    return combine_octopi(left, right)
end

def combine_octopi(left, right)
    prc = Proc.new {|x, y|x.length <=> y.length}
    result = []
    until left.empty? || right.empty?
        comp = prc.call(left[0], right[0])
        if comp == -1
            result << left.shift 
        else 
            result << right.shift 
        end 
    end
    return result + left + right
end

def clever_octopus(array)
    prc = Proc.new {|x, y|x.length <=> y.length}
    max_length = 0
    max_fish = "" 
    array.each do |el|
        comp = prc.call(el, max_fish)
        max_fish = el if comp == 1
    end
    return max_fish
end

def slow_dance(direction)
    tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up" ] 
    tiles_array.each {|tile| return tile if tile == direction}
    return nil 
end

def constant_dance(direction)
    tiles_hash = {"up" => 1, "right-up" => 2, "right-down" => 3, "down" => 4, "left-down"=>5, "left"=>6, "left-up"=>7}
    return tiles_hash[direction]
end

