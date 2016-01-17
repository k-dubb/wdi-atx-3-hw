class Word
  def initialize(original_word)
    @original_word = original_word
  end

  def original_word
    return @original_word.downcase
  end

  def piglatinize
    vowels = ["a", "e", "i", "o", "u"]

        if !vowels.include?(original_word[0])
            counter = 0
            while !vowels.include?(original_word[counter])
                counter += 1
            end
       
            return original_word[counter..-1] + original_word[0..(counter-1)] + "ay"
       
       else 

            return original_word + "way"  
    
        end

    end

end
newWord = Word.new("christmas")

p newWord.piglatinize
