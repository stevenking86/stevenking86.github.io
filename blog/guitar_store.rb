#This was used to help me write ruby-classes blog post.

class Guitar
  def initialize(type, color)
    @type = type
    @color = color
    @string_use = 0
  end

  def what_kind
    puts "I've got a #{@color} #{@type} and I'm ready to rock."
  end

  def play_gig
    if @string_use == 2
      puts "You should definitely change your strings
      before you play another gig!"
      @string_use = 0
    else
      puts"Great gig! You totally rocked."
      @string_use += 1
    end
  end

end
