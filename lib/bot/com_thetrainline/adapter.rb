# frozen_string_literal: true

module Bot
  class ComThetrainline
    # Class responsible for parsing HTML responses
    class Adapter
      # Parses an HTML response and extracts segments
      #
      # @param doc [Nokogiri::HTML4::Document] The HTML response to parse
      # Extract segments from the HTML
      def consume(doc)
        @doc = doc

        segments
      end

      def departure_station
        @departure_station ||= doc.at_css('input[name="from.search"]').attributes['value'].value
      end

      def arrival_station
        @arrival_station ||= doc.at_css('input[name="to.search"]').attributes['value'].value
      end

      def products
        doc.css('fieldset[data-testid="segmentedButton-container"] label').map(&:text)
      end

      private

      attr_reader :doc

      def journeys
        @journeys ||= doc.css('div[aria-labelledby="urn:trainline:flex:nonflexi"]')
      end

      def segments
        builder.products = products
        builder.departure_station = departure_station
        builder.arrival_station = arrival_station

        builder.call
      end

      def builder
        @builder ||= Builders::SegmentBuilder.new(journeys)
      end
    end
  end
end
