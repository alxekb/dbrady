# frozen_string_literal: true

module Bot
  class ComThetrainline
    # module to handle nasty css accessors
    module CssAccessors
      # it is not enough code to extract this to a decorator class, so I decided to keep it here, sorry :wink:
      def decorator(price_string)
        matches = price_string.match(/(€|\$)(\d+(\.\d+)?)/)

        currency_symbol = matches[1]
        value = matches[2].to_f
        value_in_cents = (value * 100).to_i

        [currency_symbol, value_in_cents]
      end

      def departure_at
        @departure_at ||= timestamps.first
      end

      def arrival_at
        @arrival_at ||= timestamps.last
      end

      def second_class_ticket_price
        journey.css('div[data-test^="eu-journey-row-"][data-test$="-standard-ticket-price"] > span').text
      end

      def first_class_ticket_price
        journey.css('div[data-test^="eu-journey-row-"][data-test$="-first-class-ticket-price"] > span').text
      end

      def fares
        [standard_ticket, first_class_ticket].compact
      end

      def ticket_containers
        journey.css('button[data-test^="journey-details-link"]')
      end

      def standard_fare
        @standard_fare ||= journey.css('button[data-test$="standard-ticket-container"] span').text.strip
      end

      def first_class_fare
        @first_class_fare ||= journey.css('button[data-test$="first-class-ticket-container"] span').text.strip
      end

      def duration_in_minutes
        @duration_in_minutes ||= ((timestamps[1] - timestamps[0]) * 24 * 60).to_i
      end

      def changeovers
        @changeovers ||= journey
                         .at_css('[data-test="journey-details-link"]')
                         .css('span')
                         .last.text.strip.scan(/\d+/).first.to_i
      end
    end
  end
end
