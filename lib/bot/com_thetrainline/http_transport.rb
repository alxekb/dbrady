# frozen_string_literal: true

module Bot
  class ComThetrainline
    # Class responsible for fetching HTTP responses from TheTrainline
    class HttpTransport
      # Fetches a search response from TheTrainline
      #
      # @param from [String] The departure station
      # @param to [String] The arrival station
      # @param departure_at [DateTime] The desired departure time
      # @return [Nokogiri::HTML::Document] The parsed response
      def fetch(_from, _to, _departure_at)
        doc
      end

      private

      def doc
        Nokogiri::HTML::Document.parse(mock_request)
      end

      def mock_request
        File.read(path)
      end

      def path
        File.expand_path('../../../spec/fixtures/SearchResults_Trainline.html', __dir__)
      end
    end
  end
end
