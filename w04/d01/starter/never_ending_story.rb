story = [
  'Fry is born without a delta brainwave',
  'As a result, Fry is cryogenically frozen until 2999',
  'In the future, Fry works on a spaceship',
  'The spaceship hits a wormhole and crashes in 1941 Roswell, NM',
  'Fry encounters his grandmother, then inadvertently sires his father'
]

story.each do |line|
    puts line
    puts "Should we continue? (y/n)"
    answer = gets.chomp   
        if answer == "y"
            story.push(line) 
        elsif answer == "n"
            puts "That's the end of the story!"
        break
        end
end

