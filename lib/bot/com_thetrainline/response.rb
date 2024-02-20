# frozen_string_literal: true

module Bot
  class ComThetrainline
    # Class representing a parsed response
    class Response
      # Initializes a new Response
      #
      # @param segments [Array<Segment>] The segments in the response
      def initialize(segments)
        @segments = segments
      end

      # Accessor for the segments
      #
      # @return [Array<Segment>] The segments in the response
      attr_reader :segments
    end
  end
end
