print "Name for order: "
name = gets.chomp
name.capitalize!

print "What do you want to order?"
item = gets.chomp

puts "#{name} + wants to order: #{item}"

# hash!
orders = {}

#store the order in the hash
puts orders["name"]
puts orders["item"]


print "Add another item to the order?"
more.downcase = gets.chomp    
    #    while yes, repeat
    while more == "yes"
        print "Name for order: "
        name = gets.chomp
        name.capitalize!

        print "What else do you want to order?"
        item = gets.chomp

        puts "#{name} + wants to order: #{item}"
        #store the order in the hash
        puts orders["name"]
        puts orders["item"]
    end

#once done, print out all orders
print "All orders: " + orders.each{ |x, y| puts + "#{x}: #{y}"}"