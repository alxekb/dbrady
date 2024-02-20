# frozen_string_literal: true

module Bot
  class ComThetrainline
    module Builders
      # Build segments from the given DOM element
      class SegmentBuilder
        SERVICE_AGENCY_NAME = 'thetrainline'

        KEYS = %i[departure_station arrival_station duration_in_minutes changeovers products].freeze
        KEYS.each { |key| attr_accessor key }

        attr_reader :journeys

        def initialize(journeys)
          @journeys = journeys
          @departure_station = departure_station
          @arrival_station = arrival_station
          @changeovers = changeovers
          @products = products
          @duration_in_minutes = duration_in_minutes
          @service_agencies = service_agencies
        end

        # Builds a segment from the given DOM element
        # note: station details are passing into since they are not visible in the journey DOM element
        def call
          entries.map do |journey|
            ComThetrainline::Segment.new(journey, **KEYS.each_with_object({}) do |key, hash|
                                                      hash[key] = send(key)
                                                    end).build
          end
        end

        private

        attr_reader :journey

        def entries
          @entries ||= journeys.css("[data-test^='eu-journey-row-'][data-test$='-wrapper']")
        end

        def service_agencies
          [SERVICE_AGENCY_NAME]
        end
      end
    end
  end
end
