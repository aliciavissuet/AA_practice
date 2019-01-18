class LRUCache
    def initialize(num=5)
        @cache = {}
        @linked_list = []
        @size = num
    end

    def count
      @linked_list.length
    end

    def add(el)
      # adds element to cache according to LRU principle
      next_el = @linked_list.head.next 
      @linked_list.head = el
      el.next_el = next_el 
      next_el.prev_el = el 
      @cache << el 
    end

    def show
      result = []
      q = []
      q << @linked_list.head
      until q.empty?
        el = q.pop
        result << el.value 
        q << el.next_el 
      end 
      return result
    end

    private
    # helper methods go here!

  end