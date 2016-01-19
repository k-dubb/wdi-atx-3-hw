orders = {}

while true 

    print "Name for order: "
    name = gets.chomp
    name.capitalize!

    print "#{name} wants to order: "
    order = gets.chomp

    orders[name] ||= []
    orders[name].push(order)

    print "Add another item to the order? (y/n)"
    more = gets.chomp    
    more.downcase

    break if more != "y"

end 

    puts "All orders: "
    puts orders

