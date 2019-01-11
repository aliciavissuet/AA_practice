class Stack
    def initialize
        @ivar = []
    end

    def push(el)
        @ivar << el
        return @ivar
    end

    def pop
        @ivar.pop
    end

    def peek
        return @ivar[-1]
    end
end

class Queue
    def initialize
        @lineup = []
    end

    def enqueue(el)
        @lineup << el
        @lineup 
    end

    def dequeue
        @lineup.shift
    end

    def peek 
        return @lineup[0]
    end
end

class Map
    attr_accessor :keys
    def initialize
        @my_map = []
        @keys = []
    end

    def update_keys
        @keys = @my_map.map {|arr_el| arr_el[0]}
    end

    def set(key, value)
        if @keys.include? key
            @my_map[get(key)][1]=value
            update_keys
            
        else 
            @my_map << [key, value]
            update_keys
        end
    end

    def get(key)
        i = @keys.index(key)
        return @my_map[i]
    end

    def delete(key)
        i = @keys.index(key)
        @my_map.delete_at(i)
        update_keys
    end

    def show
        @my_map
    end
end