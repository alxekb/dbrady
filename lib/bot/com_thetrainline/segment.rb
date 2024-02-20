# frozen_string_literal: true

module Bot
  class ComThetrainline
    # Bot::ComThetrainline::Segment
    # Dirty noisy class, after I did all the work on it, I realized that this class
    # is not doing what it should be doing. I would rather to create a layout class
    # for the page and pull attributes from there. But let's accept this since it is
    # a test task and it is not intended to be extedned/modified and used in production.
    class Segment
      attr_reader :departure_station, :arrival_station, :service_agencies, :products

      # I chose struct over hash because struct is faster for the lookups and it has
      # fancy accessors.
      ENTRY = Struct.new(
        :departure_station,
        :departure_at,
        :arrival_station,
        :arrival_at,
        :service_agencies,
        :duration_in_minutes,
        :changeovers,
        :products,
        :fares,
        keyword_init: true
      )

      def initialize(journey, **args)
        @journey = journey

        @service_agencies = ['thetrainline']
        @duration_in_minutes = duration_in_minutes

        @departure_station = args[:departure_station]
        @arrival_station = args[:arrival_station]
        @products = args[:products]
      end

      def build # rubocop:disable Metrics/MethodLength
        ENTRY.new(
          departure_at:,
          departure_station:,
          arrival_station:,
          arrival_at:,
          service_agencies:,
          duration_in_minutes:,
          changeovers:,
          products:,
          fares:
        )
      end

      private

      attr_reader :journey

      # it is highly likely that I extract this to a builder class
      def standard_ticket
        Fare.new(price_in_cents: decorator(second_class_ticket_price)[1],
                 name: 'standard',
                 currency: decorator(second_class_ticket_price)[0],
                 comfort_class: 2)
      rescue StandardError
        nil
      end

      def first_class_ticket
        Fare.new(price_in_cents: decorator(first_class_ticket_price)[1],
                 name: 'standard',
                 currency: decorator(first_class_ticket_price)[0],
                 comfort_class: 1)
      rescue StandardError
        nil
      end

      def timestamps
        @timestamps ||= journey.css('div[data-test="journey-times"] time').map do |time_element|
          DateTime.parse(time_element['datetime'])
        end
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

      # it is not enough code to extract this to a decorator class, so I decided to keep it here, sorry :wink:
      def decorator(price_string)
        matches = price_string.match(/(€|\$)(\d+(\.\d+)?)/)

        currency_symbol = matches[1]
        value = matches[2].to_f
        value_in_cents = (value * 100).to_i

        [currency_symbol, value_in_cents]
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
