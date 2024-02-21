# frozen_string_literal: true

# Struct representing a fare
module Bot
  class ComThetrainline
    Fare = Struct.new(
      :name,
      :price_in_cents,
      :currency,
      :comfort_class,
      keyword_init: true
    )
  end
end
