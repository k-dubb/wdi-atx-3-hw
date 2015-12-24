print "Name for order: "
name = gets.chomp
name.capitalize!

print "What do you want to order?"
item = gets.chomp

puts "#{name} wants to order: #{item}"

# hash!
orders = {}

#store the order in the hash
orders["name"] = "item"

print "Add another item to the order?"
more = gets.chomp    
more.downcase
    #while yes, repeat
    while more == "yes"
        print "Name for order: "
        name = gets.chomp
        name.capitalize!

        print "What else do you want to order?"
        item = gets.chomp

        puts "#{name} wants to order: #{item}"

        #store the order in the hash
        orders["name"] = "item"

        print "Add another item to the order?"
        more = gets.chomp    
        more.downcase
    end

#once done, print out all orders
print orders
#print print "All orders: " orders{name: item}
#print "All orders: " orders.each{ |name, item| puts #{name}: #{item}}"