class Board
  attr_accessor :cups, :turns

  def initialize(name1, name2)
    @cups = create_cups
    @players = [name1, name2]
    @current_player = name1
    @turns = 0
  
  end

  
  def valid_move?(start_pos)
    raise 'Invalid starting cup' unless start_pos.is_a?(Integer) && ((0..5).to_a.include?(start_pos) || (7..12).to_a.include?(start_pos))
    raise 'Starting cup is empty' if cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    
    stones = @cups[start_pos].length
    @cups[start_pos] = []

    place_pos = start_pos
    while stones > 0
      place_pos +=1 
      place_pos = place_pos % 14
      if place_pos != bad_cup(current_player_name)
        @cups[place_pos] << :stone 
        stones -=1
      end 
    end
    render
    end_pos = place_pos
    next_turn(end_pos, current_player_name)

    
   
  end

  def switch_player
    if @current_player == @players[0]
      @current_player = @players[1] 
    else 
      @current_player = @players[0]
    end
  end

  def next_turn(end_pos,current_player_name)
    # make_move(ending_cup_idx, current_player_name)
    if end_pos == good_cup(current_player_name)
      return :prompt 
    elsif @cups[end_pos]==[:stone]
      return :switch 
    else
      
      return end_pos
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    return true if (0...6).all?{|i| @cups[i].empty?} || (7...13).all?{|i| @cups[i].empty?}
    return false 
  end

  def winner
    return @players[0] if @cups[6].length > @cups[13].length 
    return @players[1] if @cups[13].length > @cups[6].length 
    return :draw
  end

  def create_cups
    board = []
    14.times{board << Array.new+[:stone, :stone, :stone, :stone, ]}
    board[6]=[]
    board[13]=[]
    return board
  end 

  
  def bad_cup(curr_player)
    return 13 if curr_player == @players[0]
    return 6
  end

  def good_cup(curr_player)
    return 6 if curr_player == @players[0]
    return 13
  end

  
   
  
  
end
